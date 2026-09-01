// GRAFENA 2026 — Kunci Orbit data
// NOTE: Passwords are placeholders (planet names). Ganti dengan kata sandi asli tiap minggu.

// GANTI: gambar starterpack Gerbang I (letakkan file di /public/starterpack lalu sesuaikan path)
export const STARTERPACK_IMAGES = ["/starterpack/1.png", "/starterpack/2.png", "/starterpack/3.png"];

export const ORBITS = [
  {
    week: 1,
    codename: "MERKURIUS",
    password: "GALAKSI BIMA SAKTI",
    title: "Gerbang I – Ignition",
    dates: "5 – 12 September",
    starterpackImages: STARTERPACK_IMAGES,
    clues: [
      { group: "Kelompok 1", text: "Kawasan di mana lembar lembar keadilan dirumuskan, undang undang dipelajari" },
      { group: "Kelompok 2", text: "Tempat dimana kunci sebuah hubungan" },
      { group: "Kelompok 3", text: "Tempat dimana mahasiswa/i bisa bebas berekspresi dengan penampilan" },
      { group: "Kelompok 4", text: "Bukan sawah, tetapi di sinilah hasil bumi diolah melalui teknologi hingga bernilai lebih tinggi." },
      { group: "Kelompok 5", text: "Bangunan yang dihuni oleh para calon konsultan" },
      { group: "Kelompok 6", text: "Fakultas dengan kode npm 14" },
      { group: "Kelompok 7", text: "Bukan dokter ikan, tetapi memahami kehidupannya" },
    ],
    reveal: {
      title: "Starterpack Gerbang I",
      desc: "Ini starterpack perlengkapanmu untuk memulai perjalanan.",
    },
    gradient: "from-[#5b8def] to-[#4cc9f0]",
    glow: "#4cc9f0",
  },
  {
    week: 2,
    codename: "VENUS",
    password: "VENUS",
    title: "Gerbang II – Liftoff",
    dates: "13 – 19 September",
    reveal: {
      title: "Outfit Minggu 2 — Atmosfer",
      desc: "Tema pastel biru langit. Sepatu bebas namun rapi. Jangan lupa bawa botol minum.",
    },
    gradient: "from-[#4361ee] to-[#4895ef]",
    glow: "#4895ef",
  },
  {
    week: 3,
    codename: "BUMI",
    password: "BUMI",
    title: "Gerbang III – Ascent",
    dates: "20 – 26 September",
    reveal: {
      title: "Outfit Minggu 3 — Orbit",
      desc: "Warna tema ungu-teal. Aksesori bertema luar angkasa dipersilakan. Mulai terasa jadi satu tim.",
    },
    gradient: "from-[#7209b7] to-[#4361ee]",
    glow: "#7209b7",
  },
  {
    week: 4,
    codename: "MARS",
    password: "MARS",
    title: "Gerbang IV – Atmosfer",
    dates: "27 Sep – 3 Oktober",
    reveal: {
      title: "Outfit Minggu 4 — Mars",
      desc: "Sentuhan warna merah/oranye. Bawa perlengkapan tugas kelompok. Setengah perjalanan tercapai!",
    },
    gradient: "from-[#b5179e] to-[#7209b7]",
    glow: "#b5179e",
  },
  {
    week: 5,
    codename: "JUPITER",
    password: "JUPITER",
    title: "Gerbang V – Orbit",
    dates: "4 – 10 Oktober",
    reveal: {
      title: "Outfit Minggu 5 — Jupiter",
      desc: "Tema warna berani & mencolok. Kompak satu angkatan. Semakin jauh dari Bumi, semakin dekat satu sama lain.",
    },
    gradient: "from-[#f72585] to-[#b5179e]",
    glow: "#f72585",
  },
  {
    week: 6,
    codename: "SATURNUS",
    password: "SATURNUS",
    title: "Gerbang VI – Deep Space",
    dates: "11 – 17 Oktober",
    reveal: {
      title: "Outfit Minggu 6 — Saturnus",
      desc: "Aksesori 'cincin' / lingkaran. Tema deep space ungu gelap. Persiapan menuju puncak acara.",
    },
    gradient: "from-[#480ca8] to-[#3a0ca3]",
    glow: "#7b2ff7",
  },
  {
    week: 7,
    codename: "URANUS",
    password: "URANUS",
    title: "Gerbang VII – Galaksi",
    dates: "18 – 22 Oktober",
    reveal: {
      title: "Outfit Minggu 7 — Uranus",
      desc: "Tema teal-biru dingin. Bawa kenang-kenangan untuk teman se-angkatan.",
    },
    gradient: "from-[#20b2aa] to-[#4361ee]",
    glow: "#20b2aa",
  },
  {
    week: 8,
    codename: "NEPTUNUS",
    password: "NEPTUNUS",
    title: "Gerbang VIII – Cosmos",
    dates: "24 Oktober — Puncak",
    reveal: {
      title: "Outfit Minggu 8 — Neptunus",
      desc: "Outfit terbaikmu! Malam puncak GRAFENA. Kamu datang sendirian — kini kamu bagian dari satu angkatan. 🎉",
    },
    gradient: "from-[#9370db] to-[#f72585]",
    glow: "#c05cff",
  },
];

export const STORAGE_KEY = "grafena_orbit_progress_v1";
