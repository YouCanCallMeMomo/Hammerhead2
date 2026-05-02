const WA = (trip) =>
  `https://wa.me/6282146469654?text=Hi%20Abdul!%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(trip)}%20trip.`

const SLOTS = [
  { trip: 'Rasdhoo & North Malé Atoll', route: 'Male → Rasdhoo → Male', dates: '14–18 Jun 2025', status: 'available', price: '$650', slots: 3 },
  { trip: 'South Malé Shark Safari', route: 'Male → South Malé → Male', dates: '25–29 Jun 2025', status: 'few', price: '$680', slots: 2 },
  { trip: 'Baa Atoll UNESCO Reserve', route: 'Male → Baa → Male', dates: '10–15 Jul 2025', status: 'full', price: '$720', slots: 0 },
  { trip: 'Ari Atoll Manta Circuit', route: 'Male → Ari → Male', dates: '22–27 Jul 2025', status: 'available', price: '$695', slots: 4 },
  { trip: 'Lhaviyani Whale Shark Run', route: 'Male → Lhaviyani → Male', dates: '8–13 Aug 2025', status: 'custom', price: 'From $710', slots: 5 },
]

const STATUS = {
  available: { pill: 'pill-a', label: 'Available' },
  few: { pill: 'pill-fw', label: 'Few left' },
  full: { pill: 'pill-f', label: 'Full' },
  custom: { pill: 'pill-c', label: 'Enquire' },
}

export default function Slots({ lang }) {
  const t = {
    en: {
      eyebrow: 'Upcoming Trips',
      h2: 'Availability & booking',
      lead: 'Reserve your slot by contacting me directly on WhatsApp. Dates fill fast — especially peak manta and whale shark season (Jun–Sep).',
      col1: 'Trip', col2: 'Dates', col3: 'Status', col4: 'Price / person', col5: 'Action',
      book: 'Book with Abdul',
      full: 'Full',
      note: 'All prices per person, twin-share basis. Includes all dives, full-board meals, transfers from Male. Payment terms discussed directly — no third-party platform fees.',
    },
    id: {
      eyebrow: 'Trip Mendatang',
      h2: 'Ketersediaan & pemesanan',
      lead: 'Pesan slot Anda dengan menghubungi saya langsung di WhatsApp.',
      col1: 'Trip', col2: 'Tanggal', col3: 'Status', col4: 'Harga / orang', col5: 'Aksi',
      book: 'Pesan dengan Abdul',
      full: 'Penuh',
      note: 'Semua harga per orang, basis twin-share. Termasuk semua penyelaman, makan penuh, transfer dari Male.',
    },
    de: {
      eyebrow: 'Kommende Reisen',
      h2: 'Verfügbarkeit & Buchung',
      lead: 'Reservieren Sie Ihren Platz direkt bei mir auf WhatsApp.',
      col1: 'Reise', col2: 'Daten', col3: 'Status', col4: 'Preis / Person', col5: 'Aktion',
      book: 'Buchen bei Abdul',
      full: 'Voll',
      note: 'Alle Preise pro Person, Twin-Basis. Inklusive aller Tauchgänge, Vollpension, Transfers ab Male.',
    },
  }[lang]

  return (
    <section className="section section-alt" id="slots">
      <div className="container">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.h2}</h2>
        <div className="divider-rule" />
        <p className="lead">{t.lead}</p>

        <div style={{display:'flex', gap:'20px', flexWrap:'wrap', margin:'20px 0'}}>
          {[
            {cls:'dot-a', label:'Available'},
            {cls:'dot-f', label:'Full'},
            {cls:'dot-fw', label:'Few left'},
            {cls:'dot-c', label:'Enquire'},
          ].map(l => (
            <span className="leg" key={l.label}>
              <span className={`leg-dot ${l.cls}`}/>
              {l.label}
            </span>
          ))}
        </div>

        <div className="table-wrap reveal">
          <table className="slots">
            <thead>
              <tr>
                <th>{t.col1}</th>
                <th>{t.col2}</th>
                <th>{t.col3}</th>
                <th>{t.col4}</th>
                <th>{t.col5}</th>
              </tr>
            </thead>
            <tbody>
              {SLOTS.map((s, i) => {
                const st = STATUS[s.status]
                return (
                  <tr key={i}>
                    <td>
                      <div className="trip-name">{s.trip}</div>
                      <div className="trip-route">{s.route}</div>
                    </td>
                    <td>{s.dates}</td>
                    <td><span className={`pill ${st.pill}`}>{st.label}</span></td>
                    <td className="price-col">{s.price}</td>
                    <td>
                      {s.status === 'full'
                        ? <span className="book-link disabled">{t.full}</span>
                        : <a className="book-link" href={WA(s.trip)} target="_blank" rel="noreferrer">{t.book} ↗</a>
                      }
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="slots-note">* {t.note}</p>
      </div>
    </section>
  )
}
