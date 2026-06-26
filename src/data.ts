export const PHONES = [
  { number: "085366573886", wa: "6285366573886" },
  { number: "082141285551", wa: "6282141285551" },
];

export const ADDRESS = "Jl. Karanggayam 1 No. 54, Kec. Tambaksari, Surabaya";

export const WA_MESSAGE =
  "Halo Heni Laundry, saya ingin bertanya tentang layanan laundry baju & sepatu.";

export function waLink(wa: string, message = WA_MESSAGE) {
  return `https://wa.me/${wa}?text=${encodeURIComponent(message)}`;
}

export type Service = {
  name: string;
  estimate?: string;
  price: string;
};

export type Category = {
  id: string;
  title: string;
  icon: string;
  blurb: string;
  services: Service[];
};

export const CATEGORIES: Category[] = [
  {
    id: "pakaian",
    title: "Laundry Pakaian",
    icon: "👕",
    blurb: "Cuci bersih, wangi, dan rapi untuk pakaian sehari-hari Anda.",
    services: [
      {
        name: "Cuci Kering + Setrika (Reguler)",
        estimate: "Estimasi selesai 2–3 hari",
        price: "Rp 5.000 – Rp 8.000 / kg",
      },
      {
        name: "Cuci Kering Saja",
        price: "Rp 1.000 – Rp 2.000 / kg",
      },
      {
        name: "Laundry Kilat / Express",
        estimate: "Selesai 1 hari hingga hitungan jam",
        price: "Rp 8.000 – Rp 10.000 / kg",
      },
    ],
  },
  {
    id: "sepatu",
    title: "Laundry & Perawatan Sepatu",
    icon: "👟",
    blurb: "Sepatu kesayangan kembali bersih, segar, dan seperti baru.",
    services: [
      {
        name: "Cleaning Standar (Kanvas / Kain)",
        price: "Rp 15.000 – Rp 35.000 / pasang",
      },
      {
        name: "Deep Cleaning (Pembersihan Menyeluruh)",
        price: "Rp 25.000 – Rp 50.000 / pasang",
      },
      {
        name: "Repaint / Unyellowing (Anti-kuning)",
        estimate: "Mengembalikan warna asli",
        price: "Rp 35.000 – Rp 75.000+ / pasang",
      },
    ],
  },
];
