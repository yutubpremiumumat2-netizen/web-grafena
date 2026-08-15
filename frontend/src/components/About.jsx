import { Reveal } from "./Reveal";
import { StarField } from "./Decorations";
import { Users, Sparkles, Rocket } from "lucide-react";

const chapters = [
  { n: "01", icon: Rocket, title: "Sebuah Peluncuran", text: "GRAFENA 2026 adalah acara orientasi mahasiswa baru program studi Teknologi Industri Kimia (TIK) D4 Universitas Padjadjaran — berlangsung 8 pekan, dari 5 September hingga 24 Oktober 2026 (didahului Pramabim 29 Agustus)." },
  { n: "02", icon: Users, title: "55 Penjelajah", text: "Dirancang untuk sekitar 55 mahasiswa baru TIK D4. Setiap maba memulai perjalanan ini sendiri-sendiri, dari titik yang berbeda." },
  { n: "03", icon: Sparkles, title: "Satu Angkatan", text: "Tujuannya satu: membangun kebersamaan. Selama 8 pekan, jarak dari Bumi ke luar angkasa menjadi metafora perjalanan kalian menjadi satu angkatan yang utuh." },
];

export const About = () => (
  <section
    id="tentang"
    data-testid="about-section"
    className="relative overflow-hidden bg-gradient-to-b from-[#1e2a5e] via-[#24346e] to-[#2b2f7a] px-6 py-24 sm:py-32"
  >
    <StarField count={30} className="opacity-60" />
    <div className="relative z-10 mx-auto max-w-6xl">
      <Reveal>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#4cc9f0]">Tentang GRAFENA</p>
        <h2 className="font-heading max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Perjalanan dari <span className="aurora-text">Bumi</span> menuju satu angkatan
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {chapters.map((c, i) => (
          <Reveal key={c.n} delay={i * 0.12}>
            <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur transition-colors duration-300 hover:border-[#4cc9f0]/40 hover:bg-white/[0.08]">
              <div className="flex items-center justify-between">
                <span className="font-heading text-4xl font-semibold text-white/20">{c.n}</span>
                <c.icon className="h-7 w-7 text-[#4cc9f0] transition-transform duration-300 group-hover:-translate-y-1" />
              </div>
              <h3 className="font-heading mt-6 text-xl font-medium">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
