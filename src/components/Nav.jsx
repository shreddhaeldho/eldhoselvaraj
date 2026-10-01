import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#about",       label: "About"       },
  { href: "#expertise",   label: "Expertise"   },
  { href: "#filmography", label: "Filmography" },
  { href: "#writing",     label: "Writing"     },
  { href: "#industry",    label: "Industry"    },
];

function scrollTo(id) {
  const el = document.querySelector(id);
  if (!el) return;
  window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.innerWidth > 900 && open) setOpen(false);
      // active nav
      const sections = document.querySelectorAll("section[id]");
      let cur = "";
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo"
           onClick={e => { e.preventDefault(); scrollTo("#hero"); }}>ES</a>
        <nav className={`nav-menu${open ? " open" : ""}`} id="navMenu">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
               className={`nav-link${active === l.href.slice(1) ? " active" : ""}`}
               onClick={e => { e.preventDefault(); setOpen(false); scrollTo(l.href); }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-link nav-cta"
             onClick={e => { e.preventDefault(); setOpen(false); scrollTo("#contact"); }}>
            Contact
          </a>
        </nav>
        <button className={`burger${open ? " open" : ""}`} id="burger"
                aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <span /><span />
        </button>
      </div>
    </header>
  );
}
