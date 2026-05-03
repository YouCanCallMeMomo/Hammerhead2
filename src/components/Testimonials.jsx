const REVIEWS = [
  {
    stars: '★★★★★',
    text: 'Abdul is simply the best dive guide I\'ve ever had. His knowledge of the reefs, the marine life behaviour, and the tidal conditions is extraordinary. He spotted a thresher shark before anyone else even knew to look.',
    name: 'Markus H.',
    flag: '🇩🇪',
    meta: 'Ari Atoll Safari · Mar 2024',
  },
  {
    stars: '★★★★★',
    text: 'What sets Abdul apart is how personal the whole experience feels. There were only 6 of us on board — we ate together, planned dives together, and Abdul made sure every dive was tailored to our level. Already planning my return trip.',
    name: 'Sarah L.',
    flag: '🇬🇧',
    meta: 'North Malé Atoll · Jan 2024',
  },
  {
    stars: '★★★★★',
    text: 'Saya sudah menyelam di banyak tempat, tapi pengalaman bersama Abdul benar-benar berbeda. Dia tahu di mana pari manta makan, kapan hiu martil lewat. Sangat direkomendasikan!',
    name: 'Reza F.',
    flag: '🇮🇩',
    meta: 'Baa Atoll · Feb 2024',
  },
  {
    stars: '★★★★★',
    text: 'The liveaboard vessel is simple but perfectly functional — clean cabins, great food, and Abdul makes sure every dive is safe and spectacular. Worth every cent, and I saved money booking directly with him too.',
    name: 'Claire B.',
    flag: '🇫🇷',
    meta: 'South Malé Atoll · Apr 2024',
  },
]

export default function Testimonials({ lang }) {
  const t = {
    en: { eyebrow: 'Guest Reviews', h2: 'What divers say' },
    id: { eyebrow: 'Ulasan Tamu', h2: 'Kata para penyelam' },
    de: { eyebrow: 'Gästebewertungen', h2: 'Was Taucher sagen' },
  }[lang]

  return (
    <section className="section" id="reviews">
      <div className="container">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.h2}</h2>
        <div className="divider-rule" />

        <div className="testi-carousel reveal">
          {REVIEWS.map((r, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-stars">{r.stars}</div>
              <p className="testi-text">{r.text}</p>
              <div className="testi-author">
                <span className="testi-flag">{r.flag}</span>
                <div>
                  <div className="tname">{r.name}</div>
                  <div className="tmeta">{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
