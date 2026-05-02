export default function About({ lang }) {
  const t = {
    en: {
      eyebrow: 'Your Instructor',
      h2: <>Meet Abdul Manan, <em>PADI OWSI #465559</em></>,
      bio1: 'I have been diving since 2000. With over 15,000 dives across Indonesia and the Maldives, I do not just guide you — I help you truly understand and fall in love with the ocean. Based in Malé since 2019, I know every current, every cleaning station, and every feeding ground in these waters.',
      credDives: '15,000+', credDivesL: 'Logged Dives',
      credYears: 'Since 2000', credYearsL: 'Diving Experience',
      credMaldives: 'Since 2019', credMaldivesL: 'In Maldives',
      credCert: 'OWSI', credCertL: 'PADI Certified',
      langTitle: 'I speak your language',
      ssiLabel: 'SSI Certified',
      ssiName: 'Abdul Manan',
      ssiPro: 'Dive Pro #56293',
      ssiLevel: 'Divemaster Instructor',
    },
    id: {
      eyebrow: 'Instruktur Anda',
      h2: <>Kenali Abdul Manan, <em>PADI OWSI #465559</em></>,
      bio1: 'Saya telah menyelam sejak tahun 2000. Dengan lebih dari 15.000 penyelaman di Indonesia dan Maladewa, saya tidak hanya memandu Anda — saya membantu Anda benar-benar memahami dan jatuh cinta pada lautan. Berbasis di Malé sejak 2019, saya mengetahui setiap arus, setiap stasiun pembersihan, dan setiap area mencari makan di perairan ini.',
      credDives: '15.000+', credDivesL: 'Total Penyelaman',
      credYears: 'Sejak 2000', credYearsL: 'Pengalaman Menyelam',
      credMaldives: 'Sejak 2019', credMaldivesL: 'Di Maladewa',
      credCert: 'OWSI', credCertL: 'Tersertifikasi PADI',
      langTitle: 'Bahasa yang digunakan',
      ssiLabel: 'Bersertifikat SSI',
      ssiName: 'Abdul Manan',
      ssiPro: 'Dive Pro #56293',
      ssiLevel: 'Divemaster Instructor',
    },
    de: {
      eyebrow: 'Dein Tauchlehrer',
      h2: <>Lerne Abdul Manan kennen, <em>PADI OWSI #465559</em></>,
      bio1: 'Ich tauche seit dem Jahr 2000. Mit über 15.000 Tauchgängen in Indonesien und den Malediven führe ich Sie nicht nur — ich helfe Ihnen, den Ozean wirklich zu verstehen und zu lieben. Seit 2019 in Malé ansässig, kenne ich jede Strömung, jede Putzerstation und jeden Futterplatz in diesen Gewässern.',
      credDives: '15.000+', credDivesL: 'Geloggte Tauchgänge',
      credYears: 'Seit 2000', credYearsL: 'Taucherfahrung',
      credMaldives: 'Seit 2019', credMaldivesL: 'Auf den Malediven',
      credCert: 'OWSI', credCertL: 'PADI-zertifiziert',
      langTitle: 'Ich spreche deine Sprache',
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
          {/* Photo + PADI Badge + SSI Badge */}
          <div className="about-photo-wrap reveal">
            <img src="/abdul-manan.jpg" alt="Abdul Manan — Maldives Dive Guide" />
            
            <div className="padi-badge">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7ecec6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              <div className="padi-badge-text">
                <p>PADI Open Water Scuba Instructor</p>
                <strong>OWSI &nbsp;#465559</strong>
              </div>
            </div>

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

            <div className="cred-row">
              <div className="cred-card">
                <div className="cred-num">{t.credDives}</div>
                <div className="cred-label">{t.credDivesL}</div>
              </div>
              <div className="cred-card">
                <div className="cred-num">{t.credYears}</div>
                <div className="cred-label">{t.credYearsL}</div>
              </div>
              <div className="cred-card">
                <div className="cred-num">{t.credMaldives}</div>
                <div className="cred-label">{t.credMaldivesL}</div>
              </div>
              <div className="cred-card">
                <div className="cred-num">{t.credCert}</div>
                <div className="cred-label">{t.credCertL}</div>
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
