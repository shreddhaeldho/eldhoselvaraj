const NAV = ["About","Films","Filmography","Writing","Industry","Contact"];
const HREFS = ["#about","#featured","#filmography","#writing","#industry","#contact"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>ELDHO SELVARAJ</h3>
            <p>Production Controller · Executive Producer · Author</p>
            <p className="footer-years">20+ Years · 55+ Films · Malayalam Cinema</p>
          </div>
          <nav className="footer-nav">
            {NAV.map((n, i) => <a key={i} href={HREFS[i]}>{n}</a>)}
          </nav>
          <div className="footer-social">
            <a href="https://www.instagram.com/elddho_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://m3db.com/eldho-selvaraj" target="_blank" rel="noopener noreferrer" aria-label="M3DB">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 10l4 4 4-4"/></svg>
            </a>
            <a href="https://www.imdb.com/name/nm8938181/" target="_blank" rel="noopener noreferrer" aria-label="IMDb">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 8v8M12 8v8"/></svg>
            </a>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Eldho Selvaraj. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
