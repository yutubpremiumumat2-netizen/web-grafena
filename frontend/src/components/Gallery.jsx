import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Upload, Loader2, Trash2, Film } from "lucide-react";
import { Reveal } from "./Reveal";
import { StarField } from "./Decorations";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const PLACEHOLDERS = [
  "https://images.unsplash.com/photo-1763889167811-9fdc12b8bda3?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  "https://images.unsplash.com/photo-1773853430977-a24ed30f6f35?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  "https://images.unsplash.com/photo-1772723246503-6d8770130bf2?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  "https://images.unsplash.com/photo-1699730164892-d7c433524ff3?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  "https://images.unsplash.com/photo-1558442157-c6999dbf7edb?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  "https://images.unsplash.com/photo-1495837174058-628aafc7d610?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
];

const spans = ["sm:col-span-2 sm:row-span-2", "", "", "sm:row-span-2", "", "sm:col-span-2"];

const MediaCard = ({ item, onDelete }) => (
  <div className="group relative overflow-hidden rounded-3xl border border-white/10" data-testid={`gallery-media-${item.id}`}>
    {item.media_type === "video" ? (
      <video
        src={`${BACKEND_URL}${item.file_url}`}
        className="h-full w-full object-cover"
        controls
        playsInline
        data-testid={`gallery-video-${item.id}`}
      />
    ) : (
      <img
        src={`${BACKEND_URL}${item.file_url}`}
        alt={item.original_filename}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    )}
    <button
      onClick={() => onDelete(item.id)}
      data-testid={`gallery-delete-${item.id}`}
      aria-label="Hapus media"
      className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur transition-all duration-300 hover:bg-[#f72585] group-hover:opacity-100"
    >
      <Trash2 className="h-4 w-4" />
    </button>
    {item.media_type === "video" && (
      <span className="pointer-events-none absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px] uppercase tracking-widest text-white/90">
        <Film className="h-3 w-3" /> Reels
      </span>
    )}
  </div>
);

export const Gallery = () => {
  const [uploaded, setUploaded] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const fetchMedia = async () => {
    try {
      const { data } = await axios.get(`${API}/gallery`);
      setUploaded(data);
    } catch (e) {
      // gallery is optional; ignore fetch errors silently
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const onFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    const form = new FormData();
    form.append("file", file);
    try {
      await axios.post(`${API}/gallery/upload`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Media berhasil diunggah! 🚀");
      await fetchMedia();
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Gagal mengunggah media.");
    } finally {
      setLoading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const onDelete = async (id) => {
    try {
      await axios.delete(`${API}/gallery/${id}`);
      setUploaded((p) => p.filter((x) => x.id !== id));
      toast("Media dihapus.");
    } catch {
      toast.error("Gagal menghapus media.");
    }
  };

  const showPlaceholders = uploaded.length === 0;

  return (
    <section
      id="galeri"
      data-testid="gallery-section"
      className="relative overflow-hidden bg-gradient-to-b from-[#191345] via-[#120e33] to-[#0d0a24] px-6 py-24 sm:py-32"
    >
      <StarField count={40} />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#4cc9f0]">Galeri</p>
              <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Momen dari <span className="aurora-text">setiap orbit</span>
              </h2>
            </div>
            <div>
              <input
                ref={inputRef}
                type="file"
                accept="image/*,video/*"
                onChange={onFile}
                className="hidden"
                data-testid="gallery-upload-input"
              />
              <button
                onClick={() => inputRef.current?.click()}
                disabled={loading}
                data-testid="gallery-upload-button"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4cc9f0] to-[#7209b7] px-6 py-3 font-heading text-sm font-medium text-white transition-transform duration-300 hover:scale-105 disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                {loading ? "Mengunggah..." : "Unggah Foto/Video"}
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3">
          {uploaded.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.06} className={`overflow-hidden rounded-3xl ${spans[i % spans.length]}`}>
              <div className="h-full w-full">
                <MediaCard item={item} onDelete={onDelete} />
              </div>
            </Reveal>
          ))}

          {showPlaceholders &&
            PLACEHOLDERS.map((src, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08} className={`group relative overflow-hidden rounded-3xl ${spans[i]}`}>
                <div className="h-full w-full overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src={src}
                    alt={`Momen GRAFENA ${i + 1}`}
                    loading="lazy"
                    data-testid={`gallery-image-${i}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 translate-y-2 font-heading text-sm text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    #GRAFENA2026
                  </span>
                </div>
              </Reveal>
            ))}
        </div>
        <p className="mt-6 text-center text-xs uppercase tracking-widest text-white/40">
          {showPlaceholders ? "*Foto placeholder — unggah foto/video asli GRAFENA di atas" : "Momen asli GRAFENA 2026"}
        </p>
      </div>
    </section>
  );
};
