import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader${hidden ? " hidden" : ""}`} id="loader">
      <div className="loader-inner">
        <div className="loader-film">
          <span /><span /><span /><span /><span />
        </div>
        <p className="loader-name">ELDHO SELVARAJ</p>
      </div>
    </div>
  );
}
