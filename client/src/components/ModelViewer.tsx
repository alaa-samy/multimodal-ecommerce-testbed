import { useEffect, useState } from "react";
import { createElement } from "react";

export default function ModelViewer({ src, alt }: { src: string; alt: string }) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (customElements.get("model-viewer")) {
      setReady(true);
      return;
    }
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.onload = () => setReady(true);
    script.onerror = () => setFailed(true);
    document.head.appendChild(script);
  }, []);

  if (failed) return <div className="flex min-h-[420px] flex-col items-center justify-center bg-[#ede6dc] px-8 text-center text-sm text-[#8d8074]"><strong className="text-[#25211e]">3D viewer could not load</strong><span className="mt-2">The ABO catalog image is still available. Try again on a connection that allows the model-viewer module.</span></div>;
  if (!ready) return <div className="flex min-h-[420px] items-center justify-center bg-[#ede6dc] text-sm text-[#8d8074]">Loading product 3D preview…</div>;

  return <div className="relative h-full min-h-[420px] rounded-[30px] bg-[#ede6dc]">{createElement("model-viewer", {
    src,
    alt,
    "camera-controls": true,
    "auto-rotate": true,
    ar: true,
    "ar-modes": "webxr scene-viewer quick-look",
    "ar-scale": "fixed",
    "shadow-intensity": "1",
    exposure: "0.9",
    style: { width: "100%", height: "100%", minHeight: "420px" },
    onError: () => setFailed(true),
  }, createElement("button", {
    slot: "ar-button",
    className: "absolute bottom-5 right-5 rounded-full bg-[#d6533f] px-4 py-2.5 text-xs font-bold text-white shadow-lg",
  }, "View in your space"))}</div>;
}
