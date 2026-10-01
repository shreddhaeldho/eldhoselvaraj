import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx:0, my:0, rx:0, ry:0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      dot.style.left = e.clientX + "px";
      dot.style.top  = e.clientY + "px";
    };

    const animate = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      ring.style.left = p.rx + "px";
      ring.style.top  = p.ry + "px";
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const HOVER_SEL = "a, button, .exp-card, .feat-card, .film-row, .contact-card, .lead-card, .writing-card";
    const onOver = (e) => { if (e.target.closest(HOVER_SEL)) ring.classList.add("hovered"); };
    const onOut  = (e) => { if (e.target.closest(HOVER_SEL)) ring.classList.remove("hovered"); };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout",  onOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout",  onOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
