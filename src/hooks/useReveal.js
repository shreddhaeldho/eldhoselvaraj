import { useEffect, useRef } from "react";

export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already visible
    if (el.classList.contains("visible")) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const parent = entry.target.parentElement;
        const siblings = parent
          ? [...parent.children].filter((c) => c.classList.contains("reveal-up"))
          : [entry.target];
        const idx = Math.max(0, siblings.indexOf(entry.target));
        entry.target.style.transitionDelay = idx * 0.085 + "s";
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
