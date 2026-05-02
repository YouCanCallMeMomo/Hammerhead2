const WA_LINK = 'https://wa.me/6282146469654?text=Hi%20Abdul!%20I%27m%20interested%20in%20a%20Maldives%20Dive%20Safari.'

const CheckIcon = () => (
  <svg className="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

export default function Pricing({ lang }) {
  const t = {
    en: {
      eyebrow: 'Pricing',
      h2: 'Transparent, all-inclusive rates',
      lead: 'All prices are per person and include everything listed. No hidden extras — just show up ready to dive.',
      cards: [
        {
          type: 'Shared Cabin',
          amt: '$620', per: '/ person, twin share',
          featured: false,
          items: ['4–5 night liveaboard', '10–12 guided dives', 'All meals & snacks', 'Equipment rental', 'Male transfer'],
          note: 'Minimum 2 guests. Bunk or twin cabin.',
        },
        {
          type: 'Private Cabin',
          amt: '$850', per: '/ person, solo or couple',
          featured: true,
          featuredTag: 'Most Popular',
          items: ['4–5 night liveaboard', '10–12 guided dives', 'All meals & snacks', 'Equipment rental', 'Male transfer', 'Double cabin — private'],
          note: 'Solo or couple booking. Limited availability.',
        },
      ],
      cta: 'Get a custom quote',
      deposit: '30% deposit to hold your slot. Balance 30 days before departure.',
    },
    id: {
      eyebrow: 'Harga',
      h2: 'Tarif transparan, all-inclusive',
      lead: 'Semua harga per orang dan mencakup semua yang tercantum. Tidak ada biaya tersembunyi.',
      cards: [
        {
          type: 'Kabin Bersama', amt: '$620', per: '/ orang, twin share', featured: false,
          items: ['Liveaboard 4–5 malam', '10–12 selaman terpandu', 'Semua makan & snack', 'Sewa peralatan', 'Transfer Male'],
          note: 'Minimum 2 tamu. Kabin bunk atau twin.',
        },
        {
          type: 'Kabin Pribadi', amt: '$850', per: '/ orang, solo atau pasangan', featured: true, featuredTag: 'Paling Populer',
          items: ['Liveaboard 4–5 malam', '10–12 selaman terpandu', 'Semua makan & snack', 'Sewa peralatan', 'Transfer Male', 'Kabin double — pribadi'],
          note: 'Pemesanan solo atau pasangan.',
        },
      ],
      cta: 'Dapatkan penawaran khusus',
      deposit: 'Deposit 30% untuk menahan slot Anda. Sisa 30 hari sebelum keberangkatan.',
    },
    de: {
      eyebrow: 'Preise',
      h2: 'Transparente All-inclusive-Preise',
      lead: 'Alle Preise pro Person, alle aufgeführten Leistungen inklusive. Keine versteckten Kosten.',
      cards: [
        {
          type: 'Geteilte Kabine', amt: '$620', per: '/ Person, Twin-Sharing', featured: false,
          items: ['4–5 Nächte Liveaboard', '10–12 geführte Tauchgänge', 'Alle Mahlzeiten & Snacks', 'Ausrüstungsverleih', 'Male Transfer'],
          note: 'Mindestens 2 Gäste. Etagenbett oder Twin-Kabine.',
        },
        {
          type: 'Private Kabine', amt: '$850', per: '/ Person, allein oder Paar', featured: true, featuredTag: 'Am beliebtesten',
          items: ['4–5 Nächte Liveaboard', '10–12 geführte Tauchgänge', 'Alle Mahlzeiten & Snacks', 'Ausrüstungsverleih', 'Male Transfer', 'Doppelkabine — privat'],
          note: 'Allein- oder Paarbuchung.',
        },
      ],
      cta: 'Individuelles Angebot einholen',
      deposit: '30% Anzahlung zur Reservierung. Restbetrag 30 Tage vor Abreise.',
    },
  }[lang]

  return (
    <section className="section section-alt" id="pricing">
      <div className="container">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.h2}</h2>
        <div className="divider-rule" />
        <p className="lead">{t.lead}</p>

        <div className="pricing-grid reveal">
          {t.cards.map((c, i) => (
            <div className={`price-card${c.featured ? ' featured' : ''}`} key={i}>
              {c.featured && <div className="featured-tag">{c.featuredTag}</div>}
              <div className="price-type">{c.type}</div>
              <div className="price-amt">{c.amt}</div>
              <div className="price-per">{c.per}</div>
              <ul className="price-list">
                {c.items.map((item, j) => (
                  <li key={j}><CheckIcon />{item}</li>
                ))}
              </ul>
              <p className="price-note">{c.note}</p>
              <a href={WA_LINK} target="_blank" rel="noreferrer"
                style={{display:'inline-flex', alignItems:'center', gap:'6px', marginTop:'20px', padding:'10px 20px', background:'var(--teal)', color:'#fff', borderRadius:'6px', fontWeight:600, fontSize:'.88rem', textDecoration:'none', transition:'background .2s'}}
                onMouseOver={e => e.currentTarget.style.background='var(--teal2)'}
                onMouseOut={e => e.currentTarget.style.background='var(--teal)'}
              >
                {t.cta} →
              </a>
            </div>
          ))}
        </div>
        <p className="slots-note" style={{marginTop:'24px'}}>* {t.deposit}</p>
      </div>
    </section>
  )
}
