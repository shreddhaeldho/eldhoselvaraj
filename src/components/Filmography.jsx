import { useState } from "react";
import { FILMS, MARQUEE_ITEMS } from "../data/films";

const FILTERS = [
  { label:"All",        value:"all"        },
  { label:"Production", value:"production" },
  { label:"Producer",   value:"producer"   },
  { label:"Actor",      value:"actor"      },
];

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee-ticker">
      <div className="marquee-track">
        {items.map((t, i) => <div key={i} className="marquee-item">{t}</div>)}
      </div>
    </div>
  );
}

export default function Filmography() {
  const [filter, setFilter] = useState("all");

  const list = (filter === "all" ? [...FILMS] : FILMS.filter(f => f.type === filter))
    .sort((a, b) => b.year - a.year);

  return (
    <>
      <Marquee />
      <section id="filmography" className="filmography">
        <div className="container">
          <div className="section-badge">04 / Full Filmography</div>
          <h2 className="section-title">A Career<br /><em>In Frames</em></h2>
          <div className="film-filters">
            {FILTERS.map(f => (
              <button key={f.value}
                      className={`ff-btn${filter === f.value ? " active" : ""}`}
                      onClick={() => setFilter(f.value)}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="film-table" id="filmTable">
            {list.map((f, i) => (
              <div key={i} className="film-row" style={{ animationDelay: (i * 0.022) + "s" }}>
                <span className="fr-year">{f.year}</span>
                <span className="fr-title">{f.title}</span>
                <span className="fr-role">{f.role}</span>
                {f.imdb
                  ? <a className="fr-imdb" href={`https://www.imdb.com/title/${f.imdb}/`}
                       target="_blank" rel="noopener noreferrer">IMDb ↗</a>
                  : <span className="fr-empty" />}
              </div>
            ))}
          </div>
          <div className="film-count-bar">
            <span>{list.length} title{list.length !== 1 ? "s" : ""}</span>
          </div>
        </div>
      </section>
    </>
  );
}
