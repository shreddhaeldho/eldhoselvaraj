import useReveal from "../hooks/useReveal";

const LEADERSHIP = [
  { role:"Treasurer",                 org:"FEFKA Production Executive Union" },
  { role:"General Council Member",    org:"FEFKA" },
  { role:"Former President & Secretary", org:"Malayalam Cine Technicians' Cooperative Society" },
];

const IND_ITEMS = [
  { title:"FEFKA Member",            desc:"Member of the Film Employees Federation of Kerala as a Production Executive.",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { title:"FEFKA Treasurer",         desc:"Currently serving as Treasurer of the FEFKA Production Executive Union.",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg> },
  { title:"Former President",        desc:"Former President of the Malayalam Cine Technicians' Cooperative Society.",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { title:"Former Honorary Secretary",desc:"Former Honorary Secretary of the Malayalam Cine Technicians' Cooperative Society.",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title:"Film Distribution",       desc:"Experience in film distribution through Nalukettu Release across Kerala markets.",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { title:"Acting Credits",          desc:"Appeared on screen in Bhramaram (2009) and Mohanlal (2018).",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 10l4 4 4-4"/></svg> },
];

function LeadCard({ item }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="lead-card reveal-up">
      <div className="lead-role">{item.role}</div>
      <div className="lead-org">{item.org}</div>
    </div>
  );
}

function IndItem({ item }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="ind-item reveal-up">
      <div className="ind-icon">{item.icon}</div>
      <div className="ind-text">
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

export default function Industry() {
  return (
    <section id="industry" className="industry">
      <div className="container">
        <div className="section-badge">06 / Industry</div>
        <h2 className="section-title">Within<br /><em>The Industry</em></h2>
        <div className="leadership-grid">
          {LEADERSHIP.map((l, i) => <LeadCard key={i} item={l} />)}
        </div>
        <div className="industry-grid">
          {IND_ITEMS.map((it, i) => <IndItem key={i} item={it} />)}
        </div>
      </div>
    </section>
  );
}
