const WA_LINK = 'https://wa.me/6282146469654?text=Hi%20Abdul!%20I%27m%20interested%20in%20a%20Maldives%20Dive%20Safari.'

// Underwater Maldives ocean hero image (Unsplash)
const HERO_IMG = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80'

export default function Hero({ lang }) {
  const t = {
    en: {
      tag1: '🇬🇧 English', tag2: '🇮🇩 Indonesian', tag3: '🇩🇪 German',
      h1a: 'Dive the Maldives with',
      h1b: 'Abdul Manan',
      sub: 'Small-group liveaboard dive safaris led by a certified SSI Divemaster Instructor with 15,000+ dives. I operate aboard a purpose-built Maldivian Dhoni liveaboard — all meals included, fully crewed.',
      cta1: 'Book via WhatsApp',
      cta2: 'View Availability',
      stat1n: '15,000+', stat1l: 'Dives logged',
      stat2n: '10+', stat2l: 'Years guiding',
      stat3n: '3', stat3l: 'Languages',
    },
    id: {
      tag1: '🇬🇧 Inggris', tag2: '🇮🇩 Indonesia', tag3: '🇩🇪 Jerman',
      h1a: 'Menyelam di Maladewa bersama',
      h1b: 'Abdul Manan',
      sub: 'Safari menyelam liveaboard kelompok kecil dipandu oleh SSI Divemaster Instructor bersertifikat dengan 15.000+ selaman. Kami menggunakan perahu Dhoni Maldiva yang dibangun khusus — semua makan termasuk, kru lengkap.',
      cta1: 'Pesan via WhatsApp',
      cta2: 'Lihat Ketersediaan',
      stat1n: '15.000+', stat1l: 'Selaman tercatat',
      stat2n: '10+', stat2l: 'Tahun memandu',
      stat3n: '3', stat3l: 'Bahasa',
    },
    de: {
      tag1: '🇬🇧 Englisch', tag2: '🇮🇩 Indonesisch', tag3: '🇩🇪 Deutsch',
      h1a: 'Tauchen auf den Malediven mit',
      h1b: 'Abdul Manan',
      sub: 'Kleingruppen-Liveaboard-Safaris unter Leitung eines zertifizierten SSI-Divemasters mit über 15.000 Tauchgängen. Wir fahren auf einem eigens gebauten maledivischen Dhoni-Liveaboard — alle Mahlzeiten inklusive, voll bemannt.',
      cta1: 'Buchen via WhatsApp',
      cta2: 'Verfügbarkeit ansehen',
      stat1n: '15.000+', stat1l: 'Tauchgänge',
      stat2n: '10+', stat2l: 'Jahre als Guide',
      stat3n: '3', stat3l: 'Sprachen',
    },
  }[lang]

  return (
    <div className="hero" id="top">
      <img className="hero-bg-img" src={HERO_IMG} alt="Crystal clear Maldives waters" />
      <div className="hero-overlay" />
      <div className="hero-shimmer" />

      <div className="hero-content">
        <div className="hero-lang-tags">
          {[t.tag1, t.tag2, t.tag3].map(tag => (
            <span className="hero-lang-tag" key={tag}>{tag}</span>
          ))}
        </div>

        <h1>
          {t.h1a} <em>{t.h1b}</em>
        </h1>
        <p className="hero-sub">{t.sub}</p>

        <div className="hero-btns">
          <a className="btn btn-primary" href={WA_LINK} target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.272a.5.5 0 00.671.671l5.437-1.469A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            {t.cta1}
          </a>
          <a className="btn btn-ghost" href="#slots">{t.cta2}</a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="stat-num">{t.stat1n}</div>
          <div className="stat-label">{t.stat1l}</div>
        </div>
        <div className="hero-stat">
          <div className="stat-num">{t.stat2n}</div>
          <div className="stat-label">{t.stat2l}</div>
        </div>
        <div className="hero-stat">
          <div className="stat-num">{t.stat3n}</div>
          <div className="stat-label">{t.stat3l}</div>
        </div>
      </div>
    </div>
  )
}
