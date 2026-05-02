const Icon = ({ d }) => (
  <svg className="icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d}/>
  </svg>
)

export default function WhyBook({ lang }) {
  const t = {
    en: {
      eyebrow: 'Why Dive with Me',
      h2: 'A different kind of dive experience',
      lead: 'Skip the crowded resort dive centres. When you book directly with me, you get a dedicated expert who is fully invested in your dive.',
      cards: [
        { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', title: 'Small Groups Only', body: 'Maximum 10 divers per trip — every guest gets personal attention, not a number on a roster.' },
        { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Expert Local Knowledge', body: 'I grew up in these waters. I know the currents, the seasons, the secret spots that resort guides rush past.' },
        { icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', title: 'Trilingual Communication', body: 'English, Indonesian and German — I brief in your language so every safety instruction is crystal clear.' },
        { icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', title: 'All-Inclusive Comfort', body: 'All meals, equipment rental, and diving fees included. No surprise charges — just show up and dive.' },
        { icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', title: 'SSI Certified Safety', body: 'SSI Divemaster Instructor Dive Pro #56293. Every dive is briefed and conducted to the highest safety standards.' },
        { icon: 'M12 22V12M12 12L4 7M12 12l8-5', title: 'Direct Booking = Best Price', body: 'Book straight with me — no agency markups, no middlemen. Your money goes to your guide, not a commission chain.' },
      ],
    },
    id: {
      eyebrow: 'Kenapa Menyelam Bersama Saya',
      h2: 'Pengalaman menyelam yang berbeda',
      lead: 'Lewati pusat selam resort yang ramai. Saat Anda memesan langsung dengan saya, Anda mendapatkan ahli berdedikasi yang sepenuhnya berinvestasi dalam penyelaman Anda.',
      cards: [
        { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', title: 'Hanya Kelompok Kecil', body: 'Maksimal 10 penyelam per perjalanan — setiap tamu mendapat perhatian pribadi.' },
        { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Pengetahuan Lokal Ahli', body: 'Saya tumbuh di perairan ini. Saya tahu arus, musim, dan titik rahasia.' },
        { icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', title: 'Komunikasi Tiga Bahasa', body: 'Inggris, Indonesia, dan Jerman — briefing dalam bahasa Anda.' },
        { icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', title: 'Kenyamanan All-Inclusive', body: 'Semua makan, sewa peralatan, dan biaya menyelam sudah termasuk.' },
        { icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', title: 'Keamanan Bersertifikat SSI', body: 'SSI Divemaster Instructor Dive Pro #56293. Setiap penyelaman dijalankan sesuai standar keselamatan tertinggi.' },
        { icon: 'M12 22V12M12 12L4 7M12 12l8-5', title: 'Pemesanan Langsung = Harga Terbaik', body: 'Pesan langsung dengan saya — tidak ada markup agen, tidak ada perantara.' },
      ],
    },
    de: {
      eyebrow: 'Warum mit mir tauchen',
      h2: 'Ein anderes Taucherlebnis',
      lead: 'Überspringen Sie die überfüllten Resort-Tauchzentren. Wenn Sie direkt bei mir buchen, erhalten Sie einen engagierten Experten.',
      cards: [
        { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', title: 'Nur Kleingruppen', body: 'Maximal 10 Taucher pro Reise — jeder Gast erhält persönliche Aufmerksamkeit.' },
        { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Lokale Expertise', body: 'Ich bin in diesen Gewässern aufgewachsen. Ich kenne die Strömungen, die Jahreszeiten, die geheimen Spots.' },
        { icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', title: 'Dreisprachig', body: 'Englisch, Indonesisch und Deutsch — Briefings in Ihrer Sprache.' },
        { icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', title: 'All-inclusive Komfort', body: 'Alle Mahlzeiten, Leihausrüstung und Tauchgebühren inklusive.' },
        { icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', title: 'SSI-zertifizierte Sicherheit', body: 'SSI Divemaster Instructor Dive Pro #56293. Höchste Sicherheitsstandards.' },
        { icon: 'M12 22V12M12 12L4 7M12 12l8-5', title: 'Direktbuchung = bester Preis', body: 'Buchen Sie direkt bei mir — keine Agenturaufschläge, keine Mittelsmänner.' },
      ],
    },
  }[lang]

  return (
    <section className="section section-alt" id="why">
      <div className="container">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.h2}</h2>
        <div className="divider-rule" />
        <p className="lead">{t.lead}</p>

        <div className="why-grid">
          {t.cards.map((c, i) => (
            <div className="why-card reveal" key={i}>
              <div className="why-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={c.icon}/>
                </svg>
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
