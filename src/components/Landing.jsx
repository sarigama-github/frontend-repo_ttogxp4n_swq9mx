import Reveal from "./Reveal";

const colors = {
  primary: "#0F2A44",
  secondary: "#2B5C8A",
  accent: "#1FA2A5",
};

function SectionHeader({ title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-slate-600">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16" style={{ backgroundColor: colors.accent }} />
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200/70 p-6 hover:shadow-lg transition-shadow">
      {children}
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md" style={{ backgroundColor: colors.primary }} />
            <div className="font-semibold text-slate-900">Kolegium Dermatologi, Venereologi & Estetika</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              "Beranda",
              "Tentang Kami",
              "Komisi/Divisi",
              "Pendidikan",
              "Kegiatan",
              "Publikasi",
              "Blog",
              "Anggota",
              "Kontak",
            ].map((item) => (
              <a key={item} className="hover:underline hover:text-slate-900 text-slate-600" href="#">
                {item}
              </a>
            ))}
            <a
              href="#"
              className="px-3 py-2 rounded-md text-white"
              style={{ backgroundColor: colors.secondary }}
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }} />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 text-white">
          <Reveal>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Kolegium Dermatologi, Venereologi & Estetika
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 max-w-2xl text-white/90">
              Menguatkan pendidikan, penelitian, dan standar klinis dermatologi di Indonesia melalui kolaborasi profesional dan integritas akademik.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pendidikan"
                className="px-4 py-2 rounded-md font-medium"
                style={{ backgroundColor: colors.accent }}
              >
                Lihat Program Pendidikan
              </a>
              <a
                href="#tentang"
                className="px-4 py-2 rounded-md font-medium border border-white/30 hover:bg-white/10"
              >
                Tentang Kolegium
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeader
          title="Tentang Kolegium"
          subtitle="Organisasi profesional untuk pendidikan, penelitian, dan standar klinis di Indonesia."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <Card>
              <h3 className="text-xl font-semibold text-slate-900">Visi & Misi</h3>
              <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
                <li>Menjamin mutu pendidikan dan kompetensi profesional.</li>
                <li>Mendorong penelitian dan pengembangan ilmu.</li>
                <li>Menegakkan standar praktik klinis dan etik.</li>
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card>
              <h3 className="text-xl font-semibold text-slate-900">Struktur & Sejarah</h3>
              <p className="mt-4 text-slate-600">
                Berdiri untuk memperkuat kolaborasi antar institusi pendidikan dan layanan, serta mengembangkan pedoman klinis yang berbasis bukti.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Komisi/Divisi */}
      <section id="komisi" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Komisi & Divisi" subtitle="Koordinasi program kerja dan pengembangan pedoman" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dermatologi", icon: "🩺" },
              { name: "Venereologi", icon: "🧬" },
              { name: "Estetika", icon: "✨" },
              { name: "Standar & Akreditasi", icon: "🛡️" },
              { name: "Pendidikan", icon: "🎓" },
              { name: "Penelitian", icon: "🔬" },
              { name: "Etik & Disiplin", icon: "⚖️" },
              { name: "Publikasi & Guideline", icon: "📄" },
            ].map((c, i) => (
              <Reveal key={c.name} delay={i * 60}>
                <Card>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl" aria-hidden>{c.icon}</div>
                    <div className="font-semibold text-slate-900">{c.name}</div>
                  </div>
                  <a className="mt-4 inline-block text-sm text-slate-600 hover:underline" href="#">
                    Pelajari lebih lanjut
                  </a>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kegiatan */}
      <section id="kegiatan" className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeader title="Konferensi, Seminar, dan Workshop" />
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((n, i) => (
            <Reveal key={n} delay={i*80}>
              <Card>
                <div className="text-sm text-slate-500">12–14 Okt 2025 • Jakarta • Offline</div>
                <h3 className="mt-2 font-semibold text-slate-900">Dermatology Update {n}</h3>
                <p className="mt-2 text-slate-600">Seminar nasional dengan sesi workshop dan presentasi penelitian terbaru.</p>
                <a className="mt-4 inline-block text-sm" style={{ color: colors.secondary }} href="#">Detail</a>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Publikasi */}
      <section id="publikasi" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Publikasi & Pedoman Klinis" />
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((n, i) => (
              <Reveal key={n} delay={i*80}>
                <Card>
                  <div className="text-xs font-medium text-white inline-block px-2 py-1 rounded-full" style={{ backgroundColor: colors.accent }}>Pedoman</div>
                  <h3 className="mt-3 font-semibold text-slate-900">Guideline Tata Laksana Acne Vulgaris</h3>
                  <p className="mt-2 text-slate-600">Ringkasan evidence-based untuk praktik klinis dermatologi.</p>
                  <a className="mt-4 inline-block text-sm" style={{ color: colors.secondary }} href="#">Lihat PDF</a>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeader title="Berita & Artikel Terbaru" />
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((n, i) => (
            <Reveal key={n} delay={i*80}>
              <Card>
                <div className="text-sm text-slate-500">12 Sep 2025 • Editorial</div>
                <h3 className="mt-2 font-semibold text-slate-900">Tren Penelitian Dermatologi {n}</h3>
                <p className="mt-2 text-slate-600">Highlight riset terkini di bidang dermatologi dan estetika di Indonesia.</p>
                <a className="mt-4 inline-block text-sm" style={{ color: colors.secondary }} href="#">Baca selengkapnya</a>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Ajukan Senter Pendidikan</h3>
            <p className="text-slate-600 mt-1">Bergabung memperkuat ekosistem pendidikan dermatologi nasional.</p>
          </div>
          <a href="#" className="px-4 py-2 rounded-md text-white" style={{ backgroundColor: colors.secondary }}>Ajukan Sekarang</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold text-slate-900">Kolegium DVE</div>
            <p className="mt-2 text-slate-600">Sekretariat: Jl. Contoh No. 1, Jakarta</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Program & Kegiatan</div>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li>Konferensi</li>
              <li>Workshop</li>
              <li>Seminar</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Sumber Daya</div>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li>Publikasi</li>
              <li>Dokumen PDF</li>
              <li>Guideline</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Kontak</div>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li>Email: sekretariat@kolegium-dve.org</li>
              <li>Telepon: (021) 000-000</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} Kolegium Dermatologi, Venereologi & Estetika</div>
      </footer>
    </div>
  );
}
