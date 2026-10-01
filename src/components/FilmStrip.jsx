export default function FilmStrip() {
  const holes = Array.from({ length: 60 });
  return (
    <div className="film-strip">
      <div className="film-strip-holes">
        {[...holes, ...holes].map((_, i) => (
          <div key={i} className="film-strip-hole" />
        ))}
      </div>
    </div>
  );
}
