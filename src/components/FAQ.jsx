import { useState } from 'react'

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
)

export default function FAQ({ lang }) {
  const [open, setOpen] = useState(null)

  const t = {
    en: {
      eyebrow: 'FAQ',
      h2: 'Common questions',
      items: [
        { q: 'What certification do I need?', a: 'Open Water (OW) minimum for most trips. Advanced Open Water recommended for deeper sites. I offer refresher dives for anyone returning after a long break.' },
        { q: 'What equipment is included?', a: 'BCD, regulator, wetsuit, mask, fins, dive computer, and tank are all included. You\'re welcome to bring your own gear.' },
        { q: 'How do I book?', a: 'Contact me directly on WhatsApp (+62 821 4646 9654). We\'ll discuss availability, your preferences, and I\'ll send you a booking summary and deposit details. No third-party platforms.' },
        { q: 'What is the best time to visit?', a: 'December–April for the South Malé and Ari Atolls (calm seas, excellent visibility). June–September for manta rays and whale sharks in Baa and Lhaviyani Atolls.' },
        { q: 'Can I dive if I\'ve never dived before?', a: 'Yes — I offer Discover Scuba Diving (introductory) sessions. You can try diving without a certification on these supervised dives. Full certification courses can also be arranged.' },
        { q: 'What happens if the weather is bad?', a: 'The Maldives has excellent diving conditions year-round. In the rare case of a severe weather event, we adapt the itinerary to sheltered sites. Safety always comes first.' },
      ],
    },
    id: {
      eyebrow: 'FAQ',
      h2: 'Pertanyaan umum',
      items: [
        { q: 'Sertifikasi apa yang saya butuhkan?', a: 'Minimum Open Water (OW) untuk sebagian besar perjalanan. Advanced Open Water direkomendasikan untuk situs yang lebih dalam.' },
        { q: 'Peralatan apa yang termasuk?', a: 'BCD, regulator, wetsuit, masker, fins, dive computer, dan tangki semuanya termasuk.' },
        { q: 'Bagaimana cara memesan?', a: 'Hubungi saya langsung di WhatsApp (+62 821 4646 9654). Tidak ada platform pihak ketiga.' },
        { q: 'Kapan waktu terbaik untuk berkunjung?', a: 'Desember–April untuk laut yang tenang. Juni–September untuk pari manta dan hiu paus.' },
        { q: 'Bisakah saya menyelam jika belum pernah menyelam?', a: 'Ya — saya menawarkan sesi Discover Scuba Diving. Anda bisa mencoba menyelam tanpa sertifikasi.' },
        { q: 'Apa yang terjadi jika cuaca buruk?', a: 'Maladewa memiliki kondisi menyelam yang sangat baik sepanjang tahun. Kami menyesuaikan rute ke situs yang terlindungi.' },
      ],
    },
    de: {
      eyebrow: 'FAQ',
      h2: 'Häufige Fragen',
      items: [
        { q: 'Welche Zertifizierung brauche ich?', a: 'Mindestens Open Water (OW). Advanced Open Water für tiefere Spots empfohlen.' },
        { q: 'Welche Ausrüstung ist inklusive?', a: 'BCD, Regler, Neoprenanzug, Maske, Flossen, Tauchcomputer und Flasche sind alle inklusive.' },
        { q: 'Wie kann ich buchen?', a: 'Kontaktieren Sie mich direkt auf WhatsApp (+62 821 4646 9654). Keine Drittanbieter-Plattformen.' },
        { q: 'Wann ist die beste Reisezeit?', a: 'Dezember–April für ruhiges Meer. Juni–September für Mantas und Walhaie.' },
        { q: 'Kann ich tauchen, wenn ich noch nie getaucht bin?', a: 'Ja — ich biete Discover Scuba Diving Einheiten an.' },
        { q: 'Was passiert bei schlechtem Wetter?', a: 'Die Malediven haben das ganze Jahr über hervorragende Bedingungen. Wir passen die Route bei Bedarf an.' },
      ],
    },
  }[lang]

  return (
    <section className="section" id="faq">
      <div className="container" style={{maxWidth:'720px'}}>
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.h2}</h2>
        <div className="divider-rule" />

        <div className="faq-list">
          {t.items.map((item, i) => (
            <div className={`faq-item${open===i?' open':''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open===i ? null : i)}>
                {item.q}
                <span className="faq-arr"><PlusIcon /></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
