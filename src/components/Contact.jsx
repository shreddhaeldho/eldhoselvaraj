import useReveal from "../hooks/useReveal";

function CCard({ href, children }) {
  const ref = useReveal();
  if (href) {
    return (
      <a ref={ref} href={href} className="contact-card reveal-up">
        {children}
      </a>
    );
  }
  return (
    <div ref={ref} className="contact-card reveal-up non-link">
      {children}
    </div>
  );
}

export default function Contact() {
  const socialRef = useReveal();

  return (
    <section id="contact" className="contact">
      <div className="contact-bg"><div className="contact-orb" /></div>
      <div className="container">
        <div className="section-badge">07 / Contact</div>
        <h2 className="section-title">Let us Create<br /><em>Something Great</em></h2>
        <p className="contact-lead">For production collaborations, creative writing, or film-related opportunities — reach out.</p>

        <div className="contact-grid">
          <CCard href="tel:+919447819488">
            <div className="cc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.128.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l1.27-.63a2 2 0 0 1 2.11-.45c.907.339 1.85.572 2.81.7a2 2 0 0 1 1.72 2.03z"/>
              </svg>
            </div>
            <div className="cc-label">Phone</div>
            <div className="cc-value">+91 94478 19488</div>
            <div className="cc-sub">+91 94002 55550</div>
          </CCard>

          <CCard href="mailto:eldhosr@gmail.com">
            <div className="cc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="cc-label">Email</div>
            <div className="cc-value">eldhosr@gmail.com</div>
            <div className="cc-sub">Responds within 24 hours</div>
          </CCard>

          <CCard>
            <div className="cc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="cc-label">Location</div>
            <div className="cc-value">Prakriti H, Vadavucode</div>
            <div className="cc-sub">Puthencruz, Ernakulam – 682310</div>
          </CCard>
        </div>

        <div ref={socialRef} className="contact-social reveal-up">
          <a href="https://www.instagram.com/elddho_" target="_blank" rel="noopener noreferrer" className="soc-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            Instagram
          </a>
          <a href="https://m3db.com/eldho-selvaraj" target="_blank" rel="noopener noreferrer" className="soc-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 10l4 4 4-4"/></svg>
            M3DB
          </a>
          <a href="https://www.imdb.com/name/nm8938181/" target="_blank" rel="noopener noreferrer" className="soc-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 8v8M12 8v8"/></svg>
            IMDb
          </a>
        </div>
      </div>
    </section>
  );
}
