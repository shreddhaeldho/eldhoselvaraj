import useReveal from "../hooks/useReveal";

const CARDS = [
  { num:"01", title:"Production Management",   desc:"End-to-end production planning, scheduling and on-ground execution across films of all scales.",
    icon:<svg viewBox="0 0 48 48" fill="none"><rect x="4" y="12" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M4 20h40M16 12v8M32 12v8" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { num:"02", title:"Production Control",      desc:"Managing schedules, timelines, resources and operational requirements with precision.",
    icon:<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5"/><path d="M24 6v18l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { num:"03", title:"Executive Production",    desc:"Coordinating production requirements and ensuring smooth execution at the executive level.",
    icon:<svg viewBox="0 0 48 48" fill="none"><path d="M24 4L44 16v16L24 44 4 32V16L24 4z" stroke="currentColor" strokeWidth="1.5"/><circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { num:"04", title:"Line Production",         desc:"On-ground coordination and logistical management for Kerala and pan-India shoots.",
    icon:<svg viewBox="0 0 48 48" fill="none"><path d="M8 40V20l16-12 16 12v20M18 40v-10h12v10" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { num:"05", title:"Budgeting & Scheduling",  desc:"Planning resources, budgets and production timelines with strategic financial oversight.",
    icon:<svg viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 20h36M16 10v10" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { num:"06", title:"Crew Coordination",       desc:"Managing large production teams, talent, vendors and logistical networks efficiently.",
    icon:<svg viewBox="0 0 48 48" fill="none"><circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5"/><circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="1.5"/><circle cx="24" cy="32" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M20 20l4 6m4-6l-4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { num:"07", title:"Creative Writing",        desc:"Screenplay author and award-winning travelogue writer in the Malayalam literary space.",
    icon:<svg viewBox="0 0 48 48" fill="none"><path d="M10 16 Q24 8 38 16M8 26 Q24 16 40 26M10 36 Q24 24 38 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { num:"08", title:"Documentary Production",  desc:"Produced a Kerala floods documentary screened at IDSFFK, receiving critical acclaim.",
    icon:<svg viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5"/><circle cx="24" cy="24" r="3" fill="currentColor"/></svg> },
];

function ExpCard({ card }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="exp-card reveal-up" data-num={card.num}>
      <div className="exp-icon">{card.icon}</div>
      <h3>{card.title}</h3>
      <p>{card.desc}</p>
    </div>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="expertise">
      <div className="expertise-bg-text">CRAFT</div>
      <div className="container">
        <div className="section-badge">03 / Expertise</div>
        <h2 className="section-title">Production<br /><em>Is the Craft</em></h2>
        <div className="expertise-grid">
          {CARDS.map((c, i) => <ExpCard key={i} card={c} />)}
        </div>
      </div>
    </section>
  );
}
