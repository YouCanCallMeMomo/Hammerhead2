export default function About({ lang }) {
  const t = {
    en: {
      eyebrow: 'Your Instructor',
      h2: <>Meet Abdul Manan, <em>PADI OWSI #465559</em></>,
      bio1: 'I have been diving since 2000. With over 15,000 dives across Indonesia and the Maldives, I do not just guide you — I help you truly understand and fall in love with the ocean. Based in Malé since 2019, I know every current, every cleaning station, and every feeding ground in these waters.',
      credDives: '15,000+', credDivesL: 'Logged Dives',
      credYears: 'Since 2000', credYearsL: 'Diving Experience',
      credMaldives: 'Since 2019', credMaldivesL: 'In Maldives',
      credCert: 'PADI & SSI', credCertL: 'Certified Instructor',
      ssiLevel: 'Divemaster Instructor',
    },
    id: {
      eyebrow: 'Instruktur Anda',
      h2: <>Kenali Abdul Manan, <em>PADI OWSI #465559</em></>,
      bio1: 'Saya telah menyelam sejak tahun 2000. Dengan lebih dari 15.000 penyelaman di Indonesia dan Maladewa, saya tidak hanya memandu Anda — saya membantu Anda benar-benar memahami dan jatuh cinta pada lautan. Berbasis di Malé sejak 2019, saya mengetahui setiap arus, setiap stasiun pembersihan, dan setiap area mencari makan di perairan ini.',
      credDives: '15.000+', credDivesL: 'Total Penyelaman',
      credYears: 'Sejak 2000', credYearsL: 'Pengalaman Menyelam',
      credMaldives: 'Sejak 2019', credMaldivesL: 'Di Maladewa',
      credCert: 'PADI & SSI', credCertL: 'Instruktur Bersertifikat',
      ssiLevel: 'Divemaster Instructor',
    },
    de: {
      eyebrow: 'Dein Tauchlehrer',
      h2: <>Lerne Abdul Manan kennen, <em>PADI OWSI #465559</em></>,
      bio1: 'Ich tauche seit dem Jahr 2000. Mit über 15.000 Tauchgängen in Indonesien und den Malediven führe ich Sie nicht nur — ich helfe Ihnen, den Ozean wirklich zu verstehen und zu lieben. Seit 2019 in Malé ansässig, kenne ich jede Strömung, jede Putzerstation und jeden Futterplatz in diesen Gewässern.',
      credDives: '15.000+', credDivesL: 'Geloggte Tauchgänge',
      credYears: 'Seit 2000', credYearsL: 'Taucherfahrung',
      credMaldives: 'Seit 2019', credMaldivesL: 'Auf den Malediven',
      credCert: 'PADI & SSI', credCertL: 'Zertifizierter Tauchlehrer',
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
          {/* Photo column: image + badge below */}
          <div className="about-photo-col reveal">
            <div className="about-photo-wrap">
              <img src="/abdul-manan.jpg" alt="Abdul Manan — Maldives Dive Guide" loading="lazy" />
            </div>

            {/* PADI & SSI badge — below the photo */}
            <div className="padi-cert-row">
              <div className="padi-cert-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7ecec6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                <div>
                  <p className="cert-label">PADI Open Water Scuba Instructor</p>
                  <strong className="cert-num">OWSI &nbsp;#465559</strong>
                </div>
              </div>
              <div className="padi-cert-item">
                <div className="ssi-logo" style={{width:'26px',height:'26px',fontSize:'.6rem',flexShrink:0}}>SSI</div>
                <div>
                  <p className="cert-label">SSI Divemaster Instructor</p>
                  <strong className="cert-num">Dive Pro &nbsp;#56293</strong>
                </div>
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
