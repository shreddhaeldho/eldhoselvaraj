import { asset } from "../utils/asset";
import useReveal from "../hooks/useReveal";

function WCard({ className, children }) {
  const ref = useReveal();
  return <div ref={ref} className={`writing-card reveal-up ${className || ""}`}>{children}</div>;
}

export default function Writing() {
  return (
    <section id="writing" className="writing">
      <div className="container">
        <div className="section-badge">05 / Literary Work</div>
        <h2 className="section-title">Words Beyond<br /><em>The Screen</em></h2>
        <div className="writing-grid">

          <WCard className="award-card">
            <div className="award-icon">
              <svg viewBox="0 0 48 48" fill="none"><path d="M24 4l4.5 9.5 10.5 1.5-7.5 7.5 1.5 10.5L24 28l-9 5 1.5-10.5L9 15 19.5 13.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M16 36l8 4 8-4M20 40v6M28 40v6M17 46h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div className="award-label">Trophy Award — 2025</div>
            <h3>Satyajit Ray Golden Arch Film Award</h3>
            <p>Received the prestigious <strong>Satyajit Ray Golden Arch Film Award (2025)</strong> for <em>Kazhchakaliloode</em> — Best Book Related to Cinema.</p>
          </WCard>

          <WCard>
            <div className="writing-type-tag">Book · Travelogue</div>
            <div className="writing-num">01</div>
            <h3>Kazhchakaliloode</h3>
            <p>A critically acclaimed film location travelogue — covering the locations, people, and stories behind Malayalam cinema. Winner of the Satyajit Ray Golden Arch Film Award (2025).</p>
            <div className="writing-asset">
              <img src={asset("kazhchakaliloode.webp")} alt="Kazhchakaliloode book cover"
                   onError={e => e.target.parentElement.style.display = "none"} loading="lazy" />
            </div>
          </WCard>

          <WCard>
            <div className="writing-type-tag">Screenplay</div>
            <div className="writing-num">02</div>
            <h3>Sarasu</h3>
            <p>Screenplay authored by Eldho Selvaraj — a story rooted in human relationships and the Malayalam cultural landscape.</p>
          </WCard>

          <WCard className="media-card">
            <div className="writing-type-tag">Television</div>
            <div className="media-tv-icon">
              <svg viewBox="0 0 48 48" fill="none"><rect x="4" y="10" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M16 42h16M24 38v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="1.5"/><polygon points="22,21 22,27 28,24" fill="currentColor"/></svg>
            </div>
            <h3>Location Hunt</h3>
            <p>Featured on Safari TV's popular television programme <strong>Location Hunt</strong> — sharing insights into film location scouting and production across Kerala.</p>
          </WCard>

        </div>
      </div>
    </section>
  );
}
