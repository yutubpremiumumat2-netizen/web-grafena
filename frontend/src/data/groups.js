// GRAFENA 2026 — Pembagian kelompok maba (data asli dari DATA KELOMPOK.xlsx)
// GANTI: target waktu reveal (WIB / UTC+7)
export const REVEAL_TARGET = "2026-08-28T18:00:00+07:00";

// GANTI: password akses panitia (override tampilan reveal tanpa menunggu countdown)
export const PANITIA_PASSWORD = "PANITGRAF2026";

const GRADIENTS = [
  "from-[#4cc9f0] to-[#4361ee]",
  "from-[#4361ee] to-[#7209b7]",
  "from-[#7209b7] to-[#b5179e]",
  "from-[#b5179e] to-[#f72585]",
  "from-[#20b2aa] to-[#4cc9f0]",
  "from-[#9370db] to-[#7209b7]",
  "from-[#f72585] to-[#7209b7]",
];

const GLOWS = ["#4cc9f0", "#4361ee", "#7209b7", "#b5179e", "#20b2aa", "#9370db", "#f72585"];

const RAW = [
  {
    codename: "ELECTRA",
    members: [
      "Nafisah Zulaikha Putri",
      "Johanes Maheza Putra",
      "Talitha Maritza Awalia",
      "Muhammad Dinejad Oktavian",
      "Asti Alya Putri",
      "Kembang Qeyza Aprilya Djanto",
      "Muhammad Fajar Alamsyah",
    ],
  },
  {
    codename: "ASTER",
    members: [
      "Helmi Satria Wirhadinata",
      "Raisha Sabrina Az Zahra",
      "Ibni Dziban Amirullah",
      "Fahla Fatia Azzahra",
      "Kenilafayza Hanifah Anggoro",
      "Bagas Afif Praseptiawan",
      "Aulia Nursyarifa",
      "aliya bahira",
    ],
  },
  {
    codename: "CENTAURI",
    members: [
      "Salsabila Rahmah Hafid",
      "Hammda Fayuta",
      "Muhammad Rayhan Muttaqim",
      "Glenn Geraldo Tarigan",
      "Firdan Faudillah Yusuf",
      "Fauzy Septyan Ramadhan",
      "Syafa Abiyya Rahmi",
      "Kalula Oktadelfina",
    ],
  },
  {
    codename: "CANOPUS",
    members: [
      "Muhamad Raadhi Djauhar",
      "Calya Zain Zerlina",
      "Rajendra Belva Winanta",
      "Adwis Zunetahayu Azizah",
      "Aulia Nadirah Zahra",
      "Muhammad Azril Fatoni",
      "Naya Shafa Huwaida",
      "Andrian Hendriatna Habibilah",
    ],
  },
  {
    codename: "ALTAIR",
    members: [
      "Agnia Kamila Ahmad",
      "Zainab Zafira",
      "Kaindra Veda Arkana",
      "RENATO IZAZ KRESNA",
      "Cleantha Fata Marvelancy Greatajaya",
      "Efrizal Pratama",
      "Sulhan Muhammad Fiqha",
      "Naffthaly Zannaty Nurfhadyla",
    ],
  },
  {
    codename: "CAPELLA",
    members: [
      "Farrassabiq Hadya Ichsan",
      "Kirana Farasdina",
      "Farrel Ahmad Prasetyo",
      "Hafifah Salsabilah",
      "Rhenata Nafisa Tsaaqif",
      "Dashiel Kaleb Ellohim Lumban Toruan",
      "Naila Althofun Nisa",
      "Rizki Oetih Amak",
    ],
  },
  {
    codename: "ORION",
    members: [
      "Kynan Adila Machda",
      "Teuku Rashieka Rafa Maliqan",
      "Frisiati amni",
      "Nadhira Myesha Salsabila",
      "Ahnaf Harits Ramadhani",
      "Siti Qotrun Nada Nursalam",
      "Akhmad Ali Daffa",
      "Kahlil Firdan Putra Anggoro",
    ],
  },
];

export const GROUPS = RAW.map((g, i) => ({
  id: i + 1,
  name: `Kelompok ${i + 1}`,
  codename: g.codename,
  gradient: GRADIENTS[i],
  glow: GLOWS[i],
  members: g.members,
}));

export const TOTAL_MABA = GROUPS.reduce((sum, g) => sum + g.members.length, 0);
