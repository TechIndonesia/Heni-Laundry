import { useState } from "react";

const PHONES = [
  { raw: "085366573886", wa: "6285366573886", label: "0853-6657-3886" },
  { raw: "082141285551", wa: "6282141285551", label: "0821-4128-5551" },
];

const ALAMAT = "Jl. Karanggayam 1 No. 54, Kec. Tambaksari, Surabaya";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(ALAMAT);

function waLink(wa: string, nama?: string) {
  const pesan = encodeURIComponent(
    `Halo Heni Laundry, saya ingin menanyakan tentang ${nama ?? "layanan laundry"}.`,
  );
  return `https://wa.me/${wa}?text=${pesan}`;
}

const CLOTHES_SERVICES = [
  {
    nama: "Cuci Kering + Setrika (Reguler)",
    harga: "Rp 5000 - Rp 8.000 /kg",
    deskripsi: "Pakaian bersih, wangi, dan rapi siap pakai.",
    durasi: "Estimasi selesai 2-3 hari",
    highlight: false,
  },
  {
    nama: "Cuci Kering Saja",
    harga: "Rp 1.000 - Rp 2.000 /kg",
    deskripsi: "Hanya dicuci dan dikeringkan, tanpa disetrika.",
    durasi: "Estimasi selesai 2-3 hari",
    highlight: false,
  },
  {
    nama: "Laundry Kilat / Express",
    harga: "Rp 5.000 - Rp 10.000 /kg",
    deskripsi: "Cepat dan bersih. Tersedia layanan hitungan jam.",
    durasi: "Selesai 1 hari hingga hitungan jam",
    highlight: true,
  },
];

const SHOE_SERVICES = [
  {
    nama: "Cleaning Standar",
    bahan: "Kanvas / Kain",
    harga: "Rp 15.000 - Rp 35.000 /pasang",
    deskripsi: "Pembersihan rutin untuk sepatu kanvas dan kain.",
    highlight: false,
  },
  {
    nama: "Deep Cleaning",
    bahan: "Semua jenis sepatu",
    harga: "Rp 25.000 - Rp 50.000 /pasang",
    deskripsi: "Pembersihan menyeluruh sampai ke sela-sela.",
    highlight: false,
  },
  {
    nama: "Repaint / Unyellowing",
    bahan: "All material",
    harga: "Rp 35.000 - Rp 75.000+ /pasang",
    deskripsi: "Mengembalikan warna asli & anti-kuning pada sol.",
    highlight: true,
  },
];

function WAIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.031 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.13-.66.13-1.002-.015-.243-2.364-1.461-2.594-1.69zm-2.58 7.614h-.002a8.865 8.865 0 0 1-4.51-1.236l-.324-.193-3.351.877.898-3.264-.212-.335a8.847 8.847 0 0 1-1.36-4.69c.002-4.892 3.984-8.872 8.875-8.872a8.823 8.823 0 0 1 6.28 2.6 8.816 8.816 0 0 1 2.596 6.28c-.003 4.89-3.986 8.833-8.89 8.833zm7.504-16.363A10.59 10.59 0 0 0 16.542 5.3c-5.845 0-10.602 4.756-10.604 10.6 0 1.87.486 3.694 1.41 5.31L5 27l5.95-1.554a10.6 10.6 0 0 0 5.58 1.593l.004.001c5.845 0 10.603-4.756 10.605-10.602a10.52 10.52 0 0 0-3.105-7.482z" />
    </svg>
  );
}

function LocationIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ShirtIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

function ShoeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 18h19.5a1.5 1.5 0 0 0 1.5-1.5 2.5 2.5 0 0 0-2-2.45V12a2 2 0 0 0-1.1-1.79l-2.9-1.45A5 5 0 0 0 14 8H8l-2 2H3a1 1 0 0 0-1 1v7z" />
      <path d="M7 14h.01" />
      <path d="M10 14h.01" />
    </svg>
  );
}

function SparkleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>
  );
}

function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const waClothes = waLink(PHONES[0].wa, "Laundry Pakaian");
  const waShoes = waLink(PHONES[1].wa, "Laundry Sepatu");

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-sky-100">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-200">
              <SparkleIcon className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-slate-900 text-lg">Heni Laundry</p>
              <p className="text-xs text-slate-500 -mt-0.5">Baju & Sepatu</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-sky-600 transition">Beranda</a>
            <a href="#layanan" className="hover:text-sky-600 transition">Layanan</a>
            <a href="#harga" className="hover:text-sky-600 transition">Harga</a>
            <a href="#tentang" className="hover:text-sky-600 transition">Tentang</a>
            <a href="#kontak" className="hover:text-sky-600 transition">Kontak</a>
          </div>

          <a
            href={waLink(PHONES[0].wa)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-200 hover:shadow-xl hover:opacity-95 transition"
          >
            <WAIcon className="h-4 w-4" />
            Order WhatsApp
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-sky-50"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden border-t border-sky-100 bg-white px-4 py-3 space-y-2">
            {[
              { h: "#home", t: "Beranda" },
              { h: "#layanan", t: "Layanan" },
              { h: "#harga", t: "Harga" },
              { h: "#tentang", t: "Tentang" },
              { h: "#kontak", t: "Kontak" },
            ].map((l) => (
              <a
                key={l.h}
                href={l.h}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50"
              >
                {l.t}
              </a>
            ))}
            <a
              href={waLink(PHONES[0].wa)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow"
            >
              <WAIcon className="h-4 w-4" /> Order WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
          <div className="absolute top-40 -right-20 h-80 w-80 rounded-full bg-cyan-200/60 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Buka Setiap Hari • Surabaya
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Laundry <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">Bersih & Wangi</span>,<br />
              Baju & Sepatu.
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              <strong>Heni Laundry</strong> melayani cuci pakaian dan perawatan sepatu
              dengan hasil bersih maksimal. Tersedia layanan reguler dan express untuk kebutuhan Anda di area Tambaksari, Surabaya.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink(PHONES[0].wa)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-0.5 transition"
              >
                <WAIcon className="h-5 w-5" />
                Order via WhatsApp
              </a>
              <a
                href="#harga"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-sky-700 ring-1 ring-sky-200 hover:bg-sky-50 transition"
              >
                Lihat Daftar Harga
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-sky-600" />
                <span>Express 1 hari</span>
              </div>
              <div className="flex items-center gap-2">
                <SparkleIcon className="h-4 w-4 text-sky-600" />
                <span>Wangi Tahan Lama</span>
              </div>
              <div className="flex items-center gap-2">
                <LocationIcon className="h-4 w-4 text-sky-600" />
                <span>Tambaksari, Surabaya</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-300 via-cyan-200 to-emerald-200 rounded-3xl blur-2xl opacity-60" />
              <div className="relative rounded-3xl bg-white shadow-2xl shadow-sky-200/60 ring-1 ring-sky-100 p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">Hari Ini</p>
                    <p className="text-lg font-bold text-slate-900">Order Cepat</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white">
                    <SparkleIcon />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href={waClothes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100 hover:bg-sky-100 transition"
                  >
                    <ShirtIcon className="h-7 w-7 text-sky-600" />
                    <p className="mt-3 font-bold text-slate-900">Laundry Baju</p>
                    <p className="text-xs text-slate-600 mt-0.5">Mulai Rp 5.000/kg</p>
                  </a>
                  <a
                    href={waShoes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100 hover:bg-emerald-100 transition"
                  >
                    <ShoeIcon className="h-7 w-7 text-emerald-600" />
                    <p className="mt-3 font-bold text-slate-900">Laundry Sepatu</p>
                    <p className="text-xs text-slate-600 mt-0.5">Mulai Rp 15.000</p>
                  </a>
                </div>

                <div className="mt-5 rounded-2xl bg-slate-900 text-white p-4">
                  <div className="flex items-center gap-3">
                    <WAIcon className="h-8 w-8 text-emerald-400" />
                    <div>
                      <p className="text-xs text-slate-300">Hubungi langsung</p>
                      {PHONES.map((p) => (
                        <a
                          key={p.wa}
                          href={waLink(p.wa)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block font-bold hover:text-emerald-300 transition"
                        >
                          {p.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Layanan Kami</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
              Solusi lengkap kebersihan pakaian & sepatu
            </h2>
            <p className="mt-3 text-slate-600">
              Kami menjaga pakaian dan sepatu kesayangan Anda tetap bersih, rapi, dan awet dengan penanganan profesional.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <ShirtIcon className="h-7 w-7" />,
                title: "Laundry Pakaian",
                desc: "Cuci kering, cuci + setrika, hingga layanan express kilat selesai dalam hitungan jam.",
                color: "from-sky-500 to-cyan-500",
              },
              {
                icon: <ShoeIcon className="h-7 w-7" />,
                title: "Perawatan Sepatu",
                desc: "Cleaning standar, deep cleaning, hingga repaint & unyellowing untuk sepatu kesayangan.",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: <ClockIcon className="h-7 w-7" />,
                title: "Express & Kilat",
                desc: "Butuh cepat? Pilih layanan express 1 hari atau kilat hitungan jam dengan kualitas terbaik.",
                color: "from-amber-500 to-orange-500",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="group relative rounded-2xl bg-white p-7 ring-1 ring-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-lg`}>
                  {s.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HARGA */}
      <section id="harga" className="py-16 md:py-20 bg-gradient-to-b from-sky-50/60 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Daftar Harga</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
              Harga transparan, hasil memuaskan
            </h2>
            <p className="mt-3 text-slate-600">
              Pilih layanan sesuai kebutuhan Anda. Klik paket untuk langsung order via WhatsApp.
            </p>
          </div>

          {/* Pakaian */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-md">
                <ShirtIcon />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">1. Laundry Pakaian</h3>
                <p className="text-sm text-slate-500">Harga per kilogram (kg)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {CLOTHES_SERVICES.map((s, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-6 ring-1 transition-all hover:-translate-y-1 hover:shadow-xl ${
                    s.highlight
                      ? "bg-gradient-to-br from-sky-600 to-cyan-500 text-white ring-sky-600 shadow-lg shadow-sky-200"
                      : "bg-white text-slate-800 ring-slate-100 shadow-sm"
                  }`}
                >
                  {s.highlight && (
                    <span className="absolute -top-3 left-6 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow">
                      Favorit
                    </span>
                  )}
                  <p className={`text-xs font-semibold uppercase tracking-wider ${s.highlight ? "text-sky-100" : "text-sky-600"}`}>
                    Paket {i + 1}
                  </p>
                  <h4 className="mt-1 text-lg font-bold leading-tight">{s.nama}</h4>
                  <p className={`mt-3 text-2xl font-extrabold ${s.highlight ? "text-white" : "text-slate-900"}`}>
                    {s.harga}
                  </p>
                  <p className={`mt-2 text-sm ${s.highlight ? "text-sky-50" : "text-slate-600"}`}>
                    {s.deskripsi}
                  </p>
                  <div className={`mt-4 flex items-center gap-2 text-xs font-medium ${s.highlight ? "text-sky-100" : "text-slate-500"}`}>
                    <ClockIcon className="h-4 w-4" />
                    {s.durasi}
                  </div>
                  <a
                    href={waLink(PHONES[0].wa, s.nama)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                      s.highlight
                        ? "bg-white text-sky-700 hover:bg-sky-50"
                        : "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:opacity-95"
                    }`}
                  >
                    <WAIcon className="h-4 w-4" />
                    Pesan Sekarang
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Sepatu */}
          <div className="mt-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md">
                <ShoeIcon />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">2. Laundry Sepatu & Perawatan</h3>
                <p className="text-sm text-slate-500">Harga per pasang</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {SHOE_SERVICES.map((s, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-6 ring-1 transition-all hover:-translate-y-1 hover:shadow-xl ${
                    s.highlight
                      ? "bg-gradient-to-br from-emerald-600 to-teal-500 text-white ring-emerald-600 shadow-lg shadow-emerald-200"
                      : "bg-white text-slate-800 ring-slate-100 shadow-sm"
                  }`}
                >
                  {s.highlight && (
                    <span className="absolute -top-3 left-6 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow">
                      Premium
                    </span>
                  )}
                  <p className={`text-xs font-semibold uppercase tracking-wider ${s.highlight ? "text-emerald-100" : "text-emerald-600"}`}>
                    {s.bahan}
                  </p>
                  <h4 className="mt-1 text-lg font-bold leading-tight">{s.nama}</h4>
                  <p className={`mt-3 text-2xl font-extrabold ${s.highlight ? "text-white" : "text-slate-900"}`}>
                    {s.harga}
                  </p>
                  <p className={`mt-2 text-sm ${s.highlight ? "text-emerald-50" : "text-slate-600"}`}>
                    {s.deskripsi}
                  </p>
                  <a
                    href={waLink(PHONES[1].wa, s.nama)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                      s.highlight
                        ? "bg-white text-emerald-700 hover:bg-emerald-50"
                        : "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:opacity-95"
                    }`}
                  >
                    <WAIcon className="h-4 w-4" />
                    Pesan Sekarang
                  </a>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-slate-500">
            * Harga dapat berubah tergantung tingkat kekotoran, bahan, dan jenis layanan. Hubungi kami untuk info lebih lanjut.
          </p>
        </div>
      </section>

      {/* TENTANG / ALAMAT */}
      <section id="tentang" className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Tentang Kami</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
              Heni Laundry — Terpercaya di Tambaksari, Surabaya
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Heni Laundry adalah jasa laundry pakaian dan perawatan sepatu yang berlokasi di Tambaksari, Surabaya.
              Kami berkomitmen memberikan hasil bersih, wangi, dan rapi dengan proses yang aman untuk semua jenis bahan.
            </p>

            <div className="mt-6 rounded-2xl bg-sky-50 p-5 ring-1 ring-sky-100">
              <div className="flex items-start gap-3">
                <LocationIcon className="h-6 w-6 text-sky-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-slate-900">Alamat Kami</p>
                  <p className="text-slate-700 mt-1">{ALAMAT}</p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:text-sky-900 transition"
                  >
                    Lihat di Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-900 text-white p-5">
                <p className="text-3xl font-extrabold text-sky-400">100%</p>
                <p className="mt-1 text-sm text-slate-300">Jaminan Bersih & Wangi</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white p-5">
                <p className="text-3xl font-extrabold">Express</p>
                <p className="mt-1 text-sm text-sky-50">Selesai 1 hari</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-300 to-cyan-200 rounded-3xl blur-2xl opacity-50" />
            <div className="relative rounded-3xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500 p-1 shadow-2xl">
              <div className="rounded-[22px] bg-white p-6 md:p-8">
                <div className="space-y-4">
                  {[
                    { icon: <ShirtIcon className="h-5 w-5" />, t: "Pakaian ditangani dengan hati-hati" },
                    { icon: <ShoeIcon className="h-5 w-5" />, t: "Sepatu dibersihkan sela-per-sela" },
                    { icon: <SparkleIcon className="h-5 w-5" />, t: "Parfum laundry premium, wangi tahan lama" },
                    { icon: <ClockIcon className="h-5 w-5" />, t: "Tepat waktu sesuai estimasi" },
                  ].map((it, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-700">
                        {it.icon}
                      </div>
                      <p className="text-slate-700 font-medium pt-2">{it.t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-300">Hubungi Kami</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
              Siap antar-jemput laundry Anda?
            </h2>
            <p className="mt-3 text-slate-300">
              Klik nomor di bawah untuk langsung terhubung via WhatsApp. Kami siap membantu.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {PHONES.map((p, idx) => (
              <a
                key={p.wa}
                href={waLink(p.wa)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-md p-5 ring-1 ring-white/20 hover:bg-white/15 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
                  <WAIcon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider">
                    {idx === 0 ? "WhatsApp 1 (Utama)" : "WhatsApp 2"}
                  </p>
                  <p className="mt-0.5 text-xl font-extrabold">{p.label}</p>
                  <p className="text-xs text-slate-300 mt-0.5 group-hover:text-white">Klik untuk chat →</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-white/10 backdrop-blur-md p-5 ring-1 ring-white/20 flex items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 text-white shadow-lg">
              <LocationIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider">Alamat</p>
              <p className="mt-0.5 font-bold text-white">{ALAMAT}</p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm text-sky-300 hover:text-white"
              >
                Buka di Google Maps →
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={waLink(PHONES[0].wa)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 font-bold text-white shadow-xl shadow-emerald-900/40 hover:shadow-2xl hover:-translate-y-0.5 transition"
            >
              <WAIcon className="h-5 w-5" />
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 text-white">
              <SparkleIcon className="h-4 w-4" />
            </div>
            <p className="text-sm">
              <span className="font-bold text-white">Heni Laundry</span> • Baju & Sepatu
            </p>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Heni Laundry. Surabaya, Indonesia.</p>
        </div>
      </footer>

      {/* FLOATING WA */}
      <a
        href={waLink(PHONES[0].wa)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform"
        aria-label="Chat WhatsApp"
      >
        <WAIcon className="h-7 w-7" />
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-ping" />
      </a>
    </div>
  );
}
