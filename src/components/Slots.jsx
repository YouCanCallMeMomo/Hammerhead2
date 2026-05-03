const WA = (trip) =>
  `https://wa.me/6282146469654?text=Hi%20Abdul!%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(trip)}%20trip.`

const SLOTS = [
  { dates: '01.09.2026 – 10.09.2026', days: '10 Days', status: 'available', info: 'Sonderpreis, Datum flexibel' },
  { dates: '12.09.2026 – 22.09.2026', days: '11 Days', status: 'available', info: 'Sonderpreis, Datum flexibel' },
  { dates: '24.09.2026 – 07.10.2026', days: '14 Days', status: 'available', info: 'Sonderpreis, Datum flexibel' },
  { dates: '09.10.2026 – 16.10.2026', days: '8 Days', status: 'full', info: 'Full Charter' },
  { dates: '18.10.2026 – 27.10.2026', days: '10 Days', status: 'available', info: 'Full Charter possible' },
  { dates: '29.10.2026 – 08.11.2026', days: '11 Days', status: 'full', info: 'Full Charter' },
  { dates: '10.11.2026 – 20.11.2026', days: '11 Days', status: 'full', info: 'Full Charter' },
  { dates: '22.11.2026 – 05.12.2026', days: '14 Days', status: 'few', info: 'Waiting List' },
  { dates: '07.12.2026 – 20.12.2026', days: '14 Days', status: 'full', info: 'Full Charter' },
  { dates: '22.12.2026 – 01.01.2027', days: '11 Days', status: 'available', info: 'Full Charter possible' },
  { dates: '03.01.2027 – 14.01.2027', days: '12 Days', status: 'available', info: '' },
  { dates: '16.01.2027 – 26.01.2027', days: '11 Days', status: 'full', info: 'Full Charter' },
  { dates: '31.01.2027 – 12.02.2027', days: '13 Days', status: 'available', info: '' },
  { dates: '14.02.2027 – 26.02.2027', days: '13 Days', status: 'full', info: '' },
  { dates: '28.02.2027 – 11.03.2027', days: '12 Days', status: 'full', info: 'Full Charter' },
  { dates: '13.03.2027 – 25.03.2027', days: '13 Days', status: 'full', info: 'Full Charter' },
  { dates: '27.03.2027 – 06.04.2027', days: '11 Days', status: 'full', info: 'Full Charter' },
  { dates: '08.04.2027 – 21.04.2027', days: '14 Days', status: 'available', info: 'Sonderpreis, Datum flexibel' },
  { dates: '23.04.2027 – 03.05.2027', days: '11 Days', status: 'full', info: 'Full Charter' }
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
      lead: 'Reserve your slot by contacting me directly on WhatsApp. Dates fill fast.',
      col1: 'Trip (Days)', col2: 'Dates', col3: 'Status', col4: 'Info', col5: 'Action',
      book: 'Book now!',
      full: 'Full',
      note: 'All prices per person, twin-share basis. Includes all dives, full-board meals, transfers from Male. Payment terms discussed directly — no third-party platform fees.',
    },
    id: {
      eyebrow: 'Trip Mendatang',
      h2: 'Ketersediaan & pemesanan',
      lead: 'Pesan slot Anda dengan menghusbungi saya langsung di WhatsApp.',
      col1: 'Trip (Hari)', col2: 'Tanggal', col3: 'Status', col4: 'Info', col5: 'Aksi',
      book: 'Book now!',
      full: 'Penuh',
      note: 'Semua harga per orang, basis twin-share. Termasuk semua penyelaman, makan penuh, transfer dari Male.',
    },
    de: {
      eyebrow: 'Kommende Reisen',
      h2: 'Verfügbarkeit & Buchung',
      lead: 'Reservieren Sie Ihren Platz direkt bei mir auf WhatsApp.',
      col1: 'Reise (Tage)', col2: 'Daten', col3: 'Status', col4: 'Info', col5: 'Aktion',
      book: 'Book now!',
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

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', margin: '20px 0' }}>
          {[
            { cls: 'dot-a', label: 'Available' },
            { cls: 'dot-f', label: 'Full' },
            { cls: 'dot-fw', label: 'Few left' },
          ].map(l => (
            <span className="leg" key={l.label}>
              <span className={`leg-dot ${l.cls}`} />
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
                      <div className="trip-name">{s.days}</div>
                    </td>
                    <td>{s.dates}</td>
                    <td><span className={`pill ${st.pill}`}>{st.label}</span></td>
                    <td className="price-col" style={{ fontSize: '.9rem', fontWeight: '500', color: 'var(--ink2)' }}>{s.info}</td>
                    <td>
                      {s.status === 'full'
                        ? <span className="book-link disabled">{t.full}</span>
                        : <a className="book-link" href={WA(s.dates)} target="_blank" rel="noreferrer">{t.book} ↗</a>
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
