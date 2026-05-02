export default function Contact({ lang }) {
  const t = {
    en: {
      eyebrow: 'Get in Touch',
      h2: 'Book directly with Abdul',
      lead: 'Skip the agencies — contact me directly on WhatsApp, email, or Instagram. I reply personally within a few hours.',
      cards: [
        {
          href: 'https://wa.me/6282146469654',
          label: 'WhatsApp',
          value: '+62 821 4646 9654',
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
        },
        {
          href: 'mailto:abdulmanan.dive@gmail.com',
          label: 'Email',
          value: 'abdulmanan.dive@gmail.com',
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
        },
        {
          href: 'https://instagram.com/abdulmanan.diver',
          label: 'Instagram',
          value: '@abdulmanan.diver',
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
        },
      ],
    },
    id: {
      eyebrow: 'Hubungi Kami',
      h2: 'Pesan langsung dengan Abdul',
      lead: 'Lewati agen — hubungi saya langsung di WhatsApp, email, atau Instagram. Saya membalas secara pribadi dalam beberapa jam.',
      cards: [
        { href: 'https://wa.me/6282146469654', label: 'WhatsApp', value: '+62 821 4646 9654', icon: null },
        { href: 'mailto:abdulmanan.dive@gmail.com', label: 'Email', value: 'abdulmanan.dive@gmail.com', icon: null },
        { href: 'https://instagram.com/abdulmanan.diver', label: 'Instagram', value: '@abdulmanan.diver', icon: null },
      ],
    },
    de: {
      eyebrow: 'Kontakt',
      h2: 'Direkt bei Abdul buchen',
      lead: 'Überspringen Sie Agenturen — kontaktieren Sie mich direkt auf WhatsApp, per E-Mail oder Instagram.',
      cards: [
        { href: 'https://wa.me/6282146469654', label: 'WhatsApp', value: '+62 821 4646 9654', icon: null },
        { href: 'mailto:abdulmanan.dive@gmail.com', label: 'E-Mail', value: 'abdulmanan.dive@gmail.com', icon: null },
        { href: 'https://instagram.com/abdulmanan.diver', label: 'Instagram', value: '@abdulmanan.diver', icon: null },
      ],
    },
  }[lang]

  // Reuse EN icons for other langs
  const icons = [
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  ]

  return (
    <section className="contact-section" id="contact">
      <div className="container" style={{position:'relative', zIndex:1}}>
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.h2}</h2>
        <div className="divider-rule" style={{background:'#7ecec6'}} />
        <p className="lead">{t.lead}</p>

        <div className="contact-cards reveal">
          {t.cards.map((c, i) => (
            <a className="contact-card" href={c.href} target="_blank" rel="noreferrer" key={i}>
              {icons[i]}
              <span className="clabel">{c.label}</span>
              <span className="cvalue">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
