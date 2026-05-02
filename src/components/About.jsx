// Abdul Manan guide photo (Unsplash diver portrait)
const PHOTO = 'https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?w=840&q=80'

export default function About({ lang }) {
  const t = {
    en: {
      eyebrow: 'Your Guide',
      h2: 'Dive with Abdul Manan',
      bio1: 'I\'ve spent over a decade guiding divers through the crystal-blue waters of the Maldives. From thrilling shark encounters at Rasdhoo Atoll to serene manta ray cleaning stations, every dive I lead is tailored to your experience level and curiosity.',
      bio2: 'I operate aboard a purpose-built Maldivian Dhoni liveaboard — small groups only, fully crewed, with all meals included. When you book with me directly, you get a personal guide who knows every reef, every current, every season.',
      credDives: '15,000+', credDivesL: 'Dives logged',
      credYears: '10+', credYearsL: 'Years guiding',
      langTitle: 'Languages spoken',
      ssiLabel: 'SSI Certified',
      ssiName: 'Abdul Manan',
      ssiPro: 'Dive Pro #56293',
      ssiLevel: 'Divemaster Instructor',
    },
    id: {
      eyebrow: 'Pemandu Anda',
      h2: 'Menyelam bersama Abdul Manan',
      bio1: 'Saya telah menghabiskan lebih dari satu dekade memandu penyelam di perairan biru jernih Maladewa. Dari pertemuan hiu yang mendebarkan di Rasdhoo Atoll hingga stasiun pembersihan pari manta yang tenang, setiap penyelaman yang saya pimpin disesuaikan dengan tingkat pengalaman dan keingintahuan Anda.',
      bio2: 'Saya beroperasi di atas perahu Dhoni Maldiva yang dibangun khusus — hanya kelompok kecil, kru lengkap, dengan semua makan termasuk. Ketika Anda memesan langsung dengan saya, Anda mendapatkan pemandu pribadi yang mengenal setiap terumbu karang.',
      credDives: '15.000+', credDivesL: 'Selaman tercatat',
      credYears: '10+', credYearsL: 'Tahun memandu',
      langTitle: 'Bahasa yang digunakan',
      ssiLabel: 'Bersertifikat SSI',
      ssiName: 'Abdul Manan',
      ssiPro: 'Dive Pro #56293',
      ssiLevel: 'Divemaster Instructor',
    },
    de: {
      eyebrow: 'Ihr Guide',
      h2: 'Tauchen mit Abdul Manan',
      bio1: 'Ich führe seit über einem Jahrzehnt Taucher durch die kristallklaren Gewässer der Malediven. Von aufregenden Haibegegnungen am Rasdhoo-Atoll bis hin zu ruhigen Mantarochen-Reinigungsstationen — jeder Tauchgang, den ich leite, ist auf Ihr Erfahrungsniveau zugeschnitten.',
      bio2: 'Ich operiere auf einem eigens gebauten maledivischen Dhoni-Liveaboard — nur Kleingruppen, voll bemannt, alle Mahlzeiten inklusive. Wenn Sie direkt bei mir buchen, erhalten Sie einen persönlichen Guide, der jedes Riff kennt.',
      credDives: '15.000+', credDivesL: 'Tauchgänge',
      credYears: '10+', credYearsL: 'Jahre als Guide',
      langTitle: 'Gesprochene Sprachen',
      ssiLabel: 'SSI Zertifiziert',
      ssiName: 'Abdul Manan',
      ssiPro: 'Dive Pro #56293',
      ssiLevel: 'Divemaster Instructor',
    },
  }[lang]

  const langs = [
    { flag: '🇬🇧', name: 'English', level: 'Fluent' },
    { flag: '🇮🇩', name: 'Indonesian', level: 'Native' },
    { flag: '🇩🇪', name: 'Deutsch', level: 'Conversational' },
  ]

  return (
    <section className="section" id="about">
      <div className="container">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.h2}</h2>
        <div className="divider-rule" />

        <div className="about-grid">
          {/* Photo + SSI Badge */}
          <div className="about-photo-wrap reveal">
            <img src={PHOTO} alt="Abdul Manan — Maldives Dive Guide" />
            <div className="ssi-badge">
              <div className="ssi-logo">SSI</div>
              <div className="ssi-badge-text">
                <p>{t.ssiLabel}</p>
                <strong>{t.ssiName}</strong>
                <span>{t.ssiLevel} · {t.ssiPro}</span>
              </div>
            </div>
          </div>

          {/* Bio + credentials */}
          <div className="reveal">
            <p className="about-bio">{t.bio1}</p>
            <p className="about-bio" style={{marginTop:'1rem'}}>{t.bio2}</p>

            <div className="cred-row">
              <div className="cred-card">
                <div className="cred-num">{t.credDives}</div>
                <div className="cred-label">{t.credDivesL}</div>
              </div>
              <div className="cred-card">
                <div className="cred-num">{t.credYears}</div>
                <div className="cred-label">{t.credYearsL}</div>
              </div>
            </div>

            {/* SSI detail card */}
            <div className="cred-card" style={{marginBottom:'16px', background:'linear-gradient(135deg,#e8f4f2,#f0f9f7)', borderColor:'var(--border2)'}}>
              <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                <div className="ssi-logo" style={{width:'36px',height:'36px',fontSize:'.75rem'}}>SSI</div>
                <div>
                  <div style={{fontWeight:700, color:'var(--teal)', fontSize:'1rem'}}>Abdul Manan</div>
                  <div style={{fontSize:'.78rem', color:'var(--ink3)'}}>Divemaster Instructor · Dive Pro #56293</div>
                </div>
              </div>
            </div>

            <p style={{fontSize:'.8rem', fontWeight:600, color:'var(--ink3)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'10px'}}>
              {t.langTitle}
            </p>
            <div className="lang-cards">
              {langs.map(l => (
                <div className="lang-card" key={l.name}>
                  <span className="flag-sm">{l.flag}</span>
                  <span className="lname">{l.name}</span>
                  <span className="llevel">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
