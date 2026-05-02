import { useState, useEffect } from 'react'

const WA_LINK = 'https://wa.me/6282146469654?text=Hi%20Abdul!%20I%27m%20interested%20in%20a%20Maldives%20Dive%20Safari.'

export default function Nav({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const t = {
    en: { about: 'About', boat: 'The Boat', avail: 'Availability', pricing: 'Pricing', faq: 'FAQ', book: 'Book via WhatsApp' },
    id: { about: 'Tentang', boat: 'Kapal', avail: 'Ketersediaan', pricing: 'Harga', faq: 'FAQ', book: 'Hubungi via WhatsApp' },
    de: { about: 'Über mich', boat: 'Das Boot', avail: 'Verfügbarkeit', pricing: 'Preise', faq: 'FAQ', book: 'Buchen via WhatsApp' },
  }[lang]

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <a className="nav-brand" href="#top">
          <svg className="icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="3"/>
          </svg>
          Abdul Manan
        </a>

        <ul className="nav-links">
          <li><a href="#about">{t.about}</a></li>
          <li><a href="#boat">{t.boat}</a></li>
          <li><a href="#slots">{t.avail}</a></li>
          <li><a href="#pricing">{t.pricing}</a></li>
          <li><a href="#faq">{t.faq}</a></li>
        </ul>

        <div className="nav-right">
          <div className="lang-switcher">
            {['en','id','de'].map(l => (
              <button key={l} className={`lang-btn${lang===l?' active':''}`} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="nav-wa" href={WA_LINK} target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.272a.5.5 0 00.671.671l5.437-1.469A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.91 0-3.7-.505-5.252-1.389l-.374-.217-3.876 1.046 1.051-3.763-.237-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            {t.book}
          </a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#about" onClick={close}>{t.about}</a>
        <a href="#boat" onClick={close}>{t.boat}</a>
        <a href="#slots" onClick={close}>{t.avail}</a>
        <a href="#pricing" onClick={close}>{t.pricing}</a>
        <a href="#faq" onClick={close}>{t.faq}</a>
        <a href={WA_LINK} target="_blank" rel="noreferrer" style={{color:'var(--teal)'}} onClick={close}>{t.book}</a>
        <div className="mobile-lang">
          {['en','id','de'].map(l => (
            <button key={l} className={lang===l?'active':''} onClick={() => { setLang(l); close() }}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
