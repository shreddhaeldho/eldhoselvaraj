import { asset } from "../utils/asset";
import useReveal from "../hooks/useReveal";

const FILMS = [
  { img: "achuvinte-amma.jpg", title: "Achuvinte Amma", year: 2004, role: "Production Manager", note: "Debut film. Directed by Sathyan Anthikad." },
  { img: "classmates.jpg",     title: "Classmates",     year: 2006, role: "Production Manager" },
  { img: "bhramaram.jpg",      title: "Bhramaram",      year: 2009, role: "Executive in Charge of Production" },
  { img: "lucifer.jpg",        title: "Lucifer",         year: 2019, role: "Executive in Charge of Production" },
  { img: "prathi-poovankozhi.jpg", title: "Prathi Poovankozhi", year: 2019, role: "Executive in Charge of Production" },
  { img: "maranamass.jpg",     title: "Maranamass",     year: 2025, role: "Production" },
  { img: "chef.jpg",           title: "Chef",           year: 2017, role: "Line Producer – Kochi" },
  { img: "cobalt-blue.jpg",    title: "Cobalt Blue",    year: 2022, role: "Line Producer – Kerala" },
  { img: "adrishya-jalakangal.jpg", title: "Adrishya Jalakangal", year: 2023, role: "Line Producer" },
  { img: "laxmmi.jpg",         title: "Laxmmi",         year: 2020, role: "Production" },
  { img: "papa-buka.jpg",      title: "Papa Buka",      year: 2025, role: "Line Producer – India" },
];

function FeatCard({ film }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="feat-card reveal-up">
      <div className="feat-poster">
        <img src={asset(film.img)} alt={film.title}
             onError={e => e.target.style.display = "none"} />
        <div className="feat-fallback">
          <span className="feat-fallback-title">{film.title.toUpperCase()}</span>
          <span className="feat-fallback-year">{film.year}</span>
        </div>
        <div className="feat-overlay-badge"><span>{film.role}</span></div>
      </div>
      <div className="feat-info">
        <h3>{film.title}</h3>
        <span className="feat-year">{film.year}</span>
        <span className="feat-role">{film.role}</span>
        {film.note && <p className="feat-note">{film.note}</p>}
      </div>
    </div>
  );
}

export default function FeaturedFilms() {
  return (
    <section id="featured" className="featured">
      <div className="container">
        <div className="section-badge">02 / Notable Films</div>
        <h2 className="section-title">Films That<br /><em>Define the Journey</em></h2>
        <div className="featured-grid">
          {FILMS.map((f, i) => <FeatCard key={i} film={f} />)}
        </div>
      </div>
    </section>
  );
}
