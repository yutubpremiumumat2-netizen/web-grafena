// GRAFENA 2026 — Pembagian kelompok maba
// 54 maba: 5 kelompok @8 orang + 2 kelompok @7 orang. Nama = placeholder.
// GANTI: target waktu reveal (WIB / UTC+7)
export const REVEAL_TARGET = "2026-08-25T18:00:00+07:00";

const SIZES = [8, 8, 8, 8, 8, 7, 7];

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

const ALL_NAMES = Array.from({ length: 54 }, (_, i) => `Maba ${String(i + 1).padStart(2, "0")}`);

let cursor = 0;
export const GROUPS = SIZES.map((size, i) => {
  const members = ALL_NAMES.slice(cursor, cursor + size);
  cursor += size;
  return {
    id: i + 1,
    name: `Kelompok ${i + 1}`,
    gradient: GRADIENTS[i],
    glow: GLOWS[i],
    members,
  };
});
