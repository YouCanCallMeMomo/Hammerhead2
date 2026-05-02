export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>
        © {year} Abdul Manan · Maldives Dive Guide
        &nbsp;·&nbsp; SSI Divemaster Instructor · Dive Pro #56293
      </p>
      <p>
        <a href="https://wa.me/6282146469654" target="_blank" rel="noreferrer">WhatsApp</a>
        &nbsp;·&nbsp;
        <a href="mailto:abdulmanan.dive@gmail.com">Email</a>
        &nbsp;·&nbsp;
        <a href="https://instagram.com/abdulmanan.diver" target="_blank" rel="noreferrer">Instagram</a>
      </p>
    </footer>
  )
}
