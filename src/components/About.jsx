import useReveal from "../hooks/useReveal";

const TIMELINE = [
  { year: "2004",      title: "Debut — Achuvinte Amma",     desc: "Began career as Production Manager with Sathyan Anthikad's landmark film." },
  { year: "2006-2012", title: "Production Management Era",  desc: "Classmates, Bhramaram, Race — building a reputation for precision and reliability." },
  { year: "2017-2020", title: "Executive Production & Scale",desc: "Chef, Lucifer, Prathi Poovankozhi — overseeing high-profile productions." },
  { year: "2022-2025", title: "International & Award-Winning",desc: "Cobalt Blue, Papa Buka, Maranamass — and the Satyajit Ray Golden Arch Film Award (2025)." },
];

function RevealDiv({ className = "", children }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal-up${className ? " " + className : ""}`}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-badge">01 / The Journey</div>
        <div className="about-grid">
          {/* Left column */}
          <div className="about-left">
            <h2 className="section-title">Two Decades<br /><em>In Cinema</em></h2>
            <div className="about-text">
              <p>Eldho Selvaraj is a Malayalam film production professional who began his career as a Production Manager with Sathyan Anthikad's landmark film <strong>Achuvinte Amma</strong> (2004).</p>
              <p>Over an illustrious career spanning over two decades, he has contributed to more than <strong>55 films</strong> across various executive and creative capacities — including Production Manager, Production Executive, Production Controller, and Executive Producer.</p>
              <p>His rich filmography features landmark Malayalam cinematic projects such as <strong>Classmates</strong>, <strong>Bhramaram</strong>, <strong>Prathi Poovankozhi</strong>, <strong>Lucifer</strong>, and <strong>Maranamass</strong>.</p>
              <p>An accomplished writer alongside his production work, Eldho penned the screenplay for <strong>Sarasu</strong> and authored <strong>Kazhchakaliloode</strong>, a critically acclaimed film location travelogue honoured with the prestigious <strong>Satyajit Ray Golden Arch Film Award (2025)</strong>.</p>
            </div>
            <div className="about-links">
              <a href="https://www.instagram.com/elddho_" target="_blank" rel="noopener noreferrer" className="about-ext-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                Instagram
              </a>
              <a href="https://m3db.com/eldho-selvaraj" target="_blank" rel="noopener noreferrer" className="about-ext-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 10l4 4 4-4"/></svg>
                M3DB
              </a>
              <a href="https://www.imdb.com/name/nm8938181/" target="_blank" rel="noopener noreferrer" className="about-ext-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 8v8M12 8v8"/></svg>
                IMDb Profile
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="about-right">
            <RevealDiv className="about-portrait">
              <div className="about-portrait-frame">
                <img src="/assets/eldho.jpg" alt="Eldho Selvaraj" loading="lazy" />
                <div className="about-portrait-caption">
                  <span>Eldho Selvaraj</span>
                  <em>20+ Years · Malayalam Cinema</em>
                </div>
                <div className="about-corner about-corner-tl" />
                <div className="about-corner about-corner-br" />
              </div>
            </RevealDiv>

            <div className="timeline-vert">
              {TIMELINE.map((t, i) => (
                <RevealDiv key={i} className="tv-item">
                  <div className="tv-year">{t.year}</div>
                  <div className="tv-dot" />
                  <div className="tv-content">
                    <h4>{t.title}</h4>
                    <p>{t.desc}</p>
                  </div>
                </RevealDiv>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
