import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { Readable } from "stream";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  registerStorageProxy(app);
  registerOAuthRoutes(app);
  app.get("/api/abo-model/:shard/:filename", async (req, res) => {
    const shard = String(req.params.shard || "").toLowerCase();
    const filename = String(req.params.filename || "");
    const itemId = filename.endsWith(".glb") ? filename.slice(0, -4) : "";
    if (!/^[0-9a-f]$/.test(shard) || !/^[A-Za-z0-9]+$/.test(itemId)) {
      res.status(400).json({ error: "Invalid ABO model path" });
      return;
    }

    const upstreamUrl = `https://amazon-berkeley-objects.s3.us-east-1.amazonaws.com/3dmodels/original/${shard}/${itemId}.glb`;
    try {
      const upstream = await fetch(upstreamUrl, {
        headers: req.headers.range ? { Range: req.headers.range } : undefined,
      });
      if (!upstream.ok || !upstream.body) {
        res.status(upstream.status || 502).end();
        return;
      }
      res.status(upstream.status);
      res.setHeader("Content-Type", "model/gltf-binary");
      res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=604800");
      for (const header of ["content-length", "content-range", "accept-ranges", "etag"]) {
        const value = upstream.headers.get(header);
        if (value) res.setHeader(header, value);
      }
      Readable.fromWeb(upstream.body as import("stream/web").ReadableStream).pipe(res);
    } catch (error) {
      console.error("[ABO model proxy] Failed to fetch model", error);
      if (!res.headersSent) res.status(502).json({ error: "ABO model unavailable" });
      else res.end();
    }
  });
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
