import { useState, useEffect } from "react";

export default function useCountUp(target, ref) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true;
        const duration = 1800;
        const steps = 60;
        const inc = target / steps;
        let cur = 0;
        const id = setInterval(() => {
          cur += inc;
          if (cur >= target) { setCount(target); clearInterval(id); }
          else setCount(Math.floor(cur));
        }, duration / steps);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, ref]);

  return count;
}
