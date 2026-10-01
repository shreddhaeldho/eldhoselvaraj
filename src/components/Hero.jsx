import { useEffect, useRef } from "react";
import useCountUp from "../hooks/useCountUp";

function StatItem({ value, suffix, label }) {
  const ref = useRef(null);
  const count = useCountUp(value, ref);
  return (
    <div className="hstat">
      <strong ref={ref}>{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function Hero() {
  const orb1 = useRef(null);
  const orb2 = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 28;
      const y = (e.clientY / window.innerHeight - 0.5) * 28;
      if (orb1.current) orb1.current.style.transform = `translate(${x}px,${y}px)`;
      if (orb2.current) orb2.current.style.transform = `translate(${-x*0.5}px,${-y*0.5}px)`;
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  function scrollTo(id) {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-grain" />
        <div className="hero-orb hero-orb-1" ref={orb1} />
        <div className="hero-orb hero-orb-2" ref={orb2} />
      </div>

      <div className="hero-content hero-split">
        {/* Text column */}
        <div className="hero-text-col">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            <span>Malayalam Film Industry · Est. 2004</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-first">ELDHO</span>
            <span className="hero-last">SELVARAJ</span>
          </h1>
          <div className="hero-roles">
            <span>Production Controller</span>
            <span className="dot">·</span>
            <span>Executive Producer</span>
            <span className="dot">·</span>
            <span>Author</span>
          </div>
          <p className="hero-bio">Two decades of shaping Malayalam cinema — from production floors to the written word.</p>
          <div className="hero-actions">
            <a href="#filmography" className="btn-gold"
               onClick={e => { e.preventDefault(); scrollTo("#filmography"); }}>View Filmography</a>
            <a href="#contact" className="btn-ghost"
               onClick={e => { e.preventDefault(); scrollTo("#contact"); }}>Get In Touch</a>
          </div>
          <div className="hero-social">
            <a href="https://www.instagram.com/elddho_" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <span>@elddho_</span>
            </a>
            <a href="https://m3db.com/eldho-selvaraj" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="M3DB">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 10l4 4 4-4"/></svg>
              <span>M3DB Profile</span>
            </a>
            <a href="https://www.imdb.com/name/nm8938181/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="IMDb">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 8v8M12 8v8M17 8v8M7 12h5M12 12h5"/></svg>
              <span>IMDb</span>
            </a>
          </div>
        </div>

        {/* Portrait column */}
        <div className="hero-portrait-col">
          <div className="hero-portrait-frame">
            <img src="/assets/eldho.jpg" alt="Eldho Selvaraj" className="hero-portrait-img" />
            <div className="hero-portrait-overlay" />
            <div className="hero-portrait-badge">
              <span className="hpb-name">Eldho Selvaraj</span>
              <span className="hpb-role">Production Controller · Author</span>
            </div>
            <div className="portrait-corner portrait-corner-tl" />
            <div className="portrait-corner portrait-corner-tr" />
            <div className="portrait-corner portrait-corner-bl" />
            <div className="portrait-corner portrait-corner-br" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="hero-stats">
        <StatItem value={20} suffix="+" label="Years in Cinema" />
        <StatItem value={55} suffix="+" label="Films" />
        <StatItem value={2004} suffix="" label="Debut Year" />
        <StatItem value={2025} suffix="" label="Award Year" />
      </div>

      <div className="hero-scroll">
        <div className="scroll-text">Scroll</div>
        <div className="scroll-bar"><div className="scroll-progress" /></div>
      </div>
    </section>
  );
}
