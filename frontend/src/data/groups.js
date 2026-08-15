// GRAFENA 2026 — Pembagian kelompok maba (data asli dari DATA KELOMPOK.xlsx)
// GANTI: target waktu reveal (WIB / UTC+7)
export const REVEAL_TARGET = "2026-08-25T18:00:00+07:00";

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
      "Helmi Satria Wirhadinata",
      "Salsabila Rahmah",
      "Hafid",
      "Muhamad Raadhi Djauhar",
      "Agnia Kamila",
      "Ahmad Farrassabiq Hadya Ichsan",
      "Kynan Adila Machda",
    ],
  },
  {
    codename: "ASTER",
    members: [
      "Johanes Maheza Putra",
      "Raisha Sabrina Az Zahra",
      "Hammda Fayuta",
      "Calya Zain Zerlina",
      "Zainab Zafira Kirana",
      "Farasdina Teuku Rashieka",
      "Rafa Maliqan",
      "Talitha Maritza Awalia",
    ],
  },
  {
    codename: "CENTAURI",
    members: [
      "Ibni Dziban Amirullah",
      "Muhammad Rayhan Muttaqim",
      "Rajendra Belva Winanta",
      "Kaindra Veda Arkana",
      "Farrel Ahmad Prasetyo",
      "Frisiati Amni",
      "Muhammad Dinejad Oktavian",
      "Fahla Fatia Azzahra",
    ],
  },
  {
    codename: "CANOPUS",
    members: [
      "Glenn Geraldo Tarigan",
      "Adwis Zunetahayu Azizah",
      "Renato Izaz Kresna",
      "Hafifah Salsabilah",
      "Nadhira Myesha Salsabila",
      "Asti Alya Putri",
      "Kenilafayza Hanifah Anggoro",
      "Firdan Faudillah Yusuf",
    ],
  },
  {
    codename: "ALTAIR",
    members: [
      "Aulia Nadirah Zahra",
      "Cleantha Fata Marvelancy Greatajaya",
      "Rhenata Nafisa Tsaaqif",
      "Ahnaf Harits Ramadhani",
      "Kembang Qeyza Aprilya",
      "Djanto Bagas Afif Praseptiawan",
      "Fauzy Septyan Ramadhan",
      "Muhammad Azril Fatoni",
    ],
  },
  {
    codename: "CAPELLA",
    members: [
      "Efrizal Pratama",
      "Dashiel Kaleb Ellohim Lumban Toruan",
      "Siti Qotrun Nada Nursalam",
      "Muhammad Fajar Alamsyah",
      "Aulia Nursyarifa",
      "Syafa Abiyya Rahmi",
      "Naya Shafa Huwaida Sulhan",
      "Muhammad Fiqha",
    ],
  },
  {
    codename: "ORION",
    members: [
      "Naila Althofun Nisa",
      "Akhmad Ali Daffa",
      "Aliya Bahira",
      "Kalula Oktadelfina Andrian",
      "Hendriatna Habibilah",
      "Naffthaly Zannaty Nurfhadyla",
      "Rizki Oetih Amak",
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
