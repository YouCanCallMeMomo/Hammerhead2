import { useState, useEffect, useRef, useCallback } from 'react'

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
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const scrollRef = useRef(null)
  const timerRef = useRef(null)
  const total = REVIEWS.length

  const getCardOffset = useCallback((i) => {
    const wrap = scrollRef.current
    if (!wrap) return 0
    const card = wrap.querySelector('.testi-card')
    if (!card) return 0
    return i * (card.offsetWidth + 20)
  }, [])

  const scrollToIdx = useCallback((i) => {
    const newIdx = ((i % total) + total) % total
    const wrap = scrollRef.current
    if (wrap) wrap.scrollTo({ left: getCardOffset(newIdx), behavior: 'smooth' })
    setIdx(newIdx)
  }, [total, getCardOffset])

  const next = useCallback(() => scrollToIdx(idx + 1), [idx, scrollToIdx])
  const prev = useCallback(() => scrollToIdx(idx - 1), [idx, scrollToIdx])

  // Sync idx when user manually swipes
  useEffect(() => {
    const wrap = scrollRef.current
    if (!wrap) return
    const onScroll = () => {
      const card = wrap.querySelector('.testi-card')
      if (!card) return
      const newIdx = Math.round(wrap.scrollLeft / (card.offsetWidth + 20))
      setIdx(Math.min(newIdx, total - 1))
    }
    wrap.addEventListener('scroll', onScroll, { passive: true })
    return () => wrap.removeEventListener('scroll', onScroll)
  }, [total])

  // Auto-play
  useEffect(() => {
    if (paused) { clearInterval(timerRef.current); return }
    timerRef.current = setInterval(() => {
      setIdx(i => {
        const newIdx = (i + 1) % total
        const wrap = scrollRef.current
        if (wrap) {
          const card = wrap.querySelector('.testi-card')
          if (card) wrap.scrollTo({ left: newIdx * (card.offsetWidth + 20), behavior: 'smooth' })
        }
        return newIdx
      })
    }, 4000)
    return () => clearInterval(timerRef.current)
  }, [paused, total])

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

        <div
          className="testi-outer reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Scroll track */}
          <div className="testi-scroll" ref={scrollRef}>
            {REVIEWS.map((r, i) => (
              <div className={`testi-card${i === idx ? ' active' : ''}`} key={i}>
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

          {/* Navigation bar */}
          <div className="testi-nav">
            <button className="testi-btn" onClick={prev} aria-label="Previous">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            <div className="testi-dots">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot${i === idx ? ' active' : ''}`}
                  onClick={() => scrollToIdx(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <span className="testi-counter">{idx + 1} / {total}</span>

            <button className="testi-btn" onClick={next} aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
