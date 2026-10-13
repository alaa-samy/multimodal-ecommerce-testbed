import { useEffect, useState } from "react";
import { createElement } from "react";

export default function ModelViewer({ src, alt }: { src: string; alt: string }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (customElements.get("model-viewer")) {
      setReady(true);
      return;
    }
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.onload = () => setReady(true);
    document.head.appendChild(script);
  }, []);
  if (!ready) return <div className="flex min-h-[420px] items-center justify-center bg-[#ede6dc] text-sm text-[#8d8074]">Loading 3D preview…</div>;
  return <div className="h-full min-h-[420px] rounded-[30px] bg-[#ede6dc]">{createElement("model-viewer", { src, alt, "camera-controls": true, "auto-rotate": true, ar: true, "ar-modes": "webxr scene-viewer quick-look", "shadow-intensity": "1", style: { width: "100%", height: "100%", minHeight: "420px" } })}</div>;
}
