// Boat / Maldives dhoni images from Unsplash
const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80', alt: 'Liveaboard vessel at sunset, Maldives', main: true },
  { src: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&q=80', alt: 'Underwater coral reef Maldives' },
  { src: 'https://images.unsplash.com/photo-1519053054369-472c24c42f79?w=800&q=80', alt: 'Maldives deck view' },
]

const SPECS = [
  { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', strong: '10', label: 'Max guests' },
  { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', strong: '4 Bunk + 2 Double', label: 'Cabin types' },
  { icon: 'M2 12h20M12 2v20', strong: 'AC Cabins', label: 'Air conditioned' },
  { icon: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01', strong: 'All Meals', label: 'Full board' },
]

export default function Boat({ lang }) {
  const t = {
    en: {
      eyebrow: 'The Vessel',
      h2: 'Our liveaboard — built for diving',
      lead: 'I operate aboard a purpose-built Maldivian Dhoni liveaboard — a traditional wooden vessel adapted for small-group dive safaris. Think of it as a floating dive base, not a cruise ship.',
      desc: 'The boat is compact by design — that\'s the point. A small vessel means calm moorings at sites the bigger boats can\'t reach, flexible dive schedules, and a crew that knows every guest by name.',
      specsTitle: 'Vessel specifications',
    },
    id: {
      eyebrow: 'Kapal Kami',
      h2: 'Liveaboard kami — dibangun untuk menyelam',
      lead: 'Saya beroperasi di atas perahu Dhoni Maldiva yang dibangun khusus — perahu kayu tradisional yang diadaptasi untuk safari selam kelompok kecil.',
      desc: 'Kapal ini kecil secara desain — itulah intinya. Kapal kecil berarti bisa berlabuh di lokasi yang tidak bisa dicapai kapal besar, jadwal menyelam fleksibel, dan kru yang mengenal setiap tamu.',
      specsTitle: 'Spesifikasi kapal',
    },
    de: {
      eyebrow: 'Das Schiff',
      h2: 'Unser Liveaboard — gebaut zum Tauchen',
      lead: 'Ich operiere auf einem eigens gebauten maledivischen Dhoni-Liveaboard — ein traditionelles Holzschiff, das für Kleingruppen-Tauschsafaris angepasst wurde.',
      desc: 'Das Boot ist kompakt — das ist der Punkt. Ein kleines Schiff bedeutet ruhige Ankerplätze an Stellen, die größere Boote nicht erreichen, flexible Tauchpläne und eine Crew, die jeden Gast beim Namen kennt.',
      specsTitle: 'Schiffsspezifikationen',
    },
  }[lang]

  return (
    <section className="section" id="boat">
      <div className="container">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.h2}</h2>
        <div className="divider-rule" />
        <p className="lead">{t.lead}</p>
        <p style={{marginTop:'1rem', fontSize:'.95rem', lineHeight:1.8, color:'var(--ink2)', maxWidth:'680px'}}>{t.desc}</p>

        <div className="boat-photos reveal">
          <div className="boat-photo-main">
            <img src={PHOTOS[0].src} alt={PHOTOS[0].alt} />
          </div>
          {PHOTOS.slice(1).map((p, i) => (
            <div className="boat-photo-sm" key={i}>
              <img src={p.src} alt={p.alt} />
            </div>
          ))}
        </div>

        <h3 style={{marginTop:'36px', marginBottom:'4px'}}>{t.specsTitle}</h3>
        <div className="boat-specs reveal">
          {SPECS.map((s, i) => (
            <div className="spec-card" key={i}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={s.icon}/>
              </svg>
              <strong>{s.strong}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
