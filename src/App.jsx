import { useEffect, useState } from "react";
import Loader       from "./components/Loader";
import Cursor       from "./components/Cursor";
import Nav          from "./components/Nav";
import Hero         from "./components/Hero";
import FilmStrip    from "./components/FilmStrip";
import About        from "./components/About";
import FeaturedFilms from "./components/FeaturedFilms";
import Expertise    from "./components/Expertise";
import Filmography  from "./components/Filmography";
import Writing      from "./components/Writing";
import Industry     from "./components/Industry";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

function BackTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button className={`back-top${show ? " show" : ""}`} id="backTop"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  );
}

export default function App() {
  return (
    <>
      <Loader />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <FilmStrip />
        <About />
        <FeaturedFilms />
        <Expertise />
        <Filmography />
        <Writing />
        <Industry />
        <Contact />
      </main>
      <Footer />
      <BackTop />
    </>
  );
}
