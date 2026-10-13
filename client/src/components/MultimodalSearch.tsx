import { useRef, useState } from "react";
import { Camera, ImagePlus, Mic, Search, Square, X } from "lucide-react";

export type MultimodalSearchRequest = {
  text: string;
  image?: File;
  audio?: File;
};

export default function MultimodalSearch({
  initialText = "",
  placeholder = "Describe what you are looking for…",
  onSubmit,
}: {
  initialText?: string;
  placeholder?: string;
  onSubmit: (request: MultimodalSearchRequest) => void;
}) {
  const [text, setText] = useState(initialText);
  const [image, setImage] = useState<File>();
  const [audio, setAudio] = useState<File>();
  const [recording, setRecording] = useState(false);
  const imageInput = useRef<HTMLInputElement>(null);
  const recorder = useRef<MediaRecorder | undefined>(undefined);
  const chunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    if (!navigator.mediaDevices?.getUserMedia) return;
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    chunks.current = [];
    mediaRecorder.ondataavailable = (event) => event.data.size && chunks.current.push(event.data);
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks.current, { type: mediaRecorder.mimeType || "audio/webm" });
      setAudio(new File([blob], "room-search.webm", { type: blob.type }));
      stream.getTracks().forEach((track) => track.stop());
    };
    recorder.current = mediaRecorder;
    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    recorder.current?.stop();
    setRecording(false);
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim() || image || audio) onSubmit({ text: text.trim(), image, audio });
  };

  return <div className="rounded-2xl border border-[#e3dcd2] bg-white p-2 shadow-[0_8px_30px_rgba(72,55,42,.05)]"><form onSubmit={submit} className="flex items-center gap-2"><Search size={18} className="ml-3 shrink-0 text-[#9b8c80]" /><input value={text} onChange={(event) => setText(event.target.value)} placeholder={placeholder} className="h-11 min-w-0 flex-1 bg-transparent text-sm text-[#25211e] outline-none placeholder:text-[#b4a89d]" /><input ref={imageInput} type="file" accept="image/*" className="hidden" onChange={(event) => setImage(event.target.files?.[0])} /><button type="button" onClick={() => imageInput.current?.click()} className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#8d8074] transition hover:bg-[#f0e9df] hover:text-[#d6533f] sm:flex" aria-label="Attach inspiration image"><Camera size={17} /></button><button type="button" onClick={recording ? stopRecording : startRecording} className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${recording ? "bg-[#d6533f] text-white" : "text-[#8d8074] hover:bg-[#f0e9df] hover:text-[#d6533f]"}`} aria-label={recording ? "Stop voice recording" : "Record voice search"}>{recording ? <Square size={15} fill="currentColor" /> : <Mic size={17} />}</button><button type="submit" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d6533f] text-white transition hover:bg-[#b94331]" aria-label="Submit multimodal search"><Search size={17} /></button></form>{(image || audio || recording) && <div className="mt-2 flex flex-wrap items-center gap-2 border-t border-[#eee7de] px-3 pt-2 text-xs text-[#6f655c]">{image && <span className="flex items-center gap-1 rounded-full bg-[#f0e9df] px-2.5 py-1"><ImagePlus size={13} /> {image.name}<button type="button" onClick={() => setImage(undefined)} aria-label="Remove image"><X size={12} /></button></span>}{audio && <span className="flex items-center gap-1 rounded-full bg-[#f0e9df] px-2.5 py-1"><Mic size={13} /> Voice attached<button type="button" onClick={() => setAudio(undefined)} aria-label="Remove voice"><X size={12} /></button></span>}{recording && <span className="text-[#d6533f]">Recording… press the microphone to stop</span>}</div>}</div>;
}
