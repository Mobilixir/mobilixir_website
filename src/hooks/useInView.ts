"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  once?: boolean;
}

export function useInView<T extends Element = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const { threshold = 0.1, once = true } = options;
  const ref = useRef<T>(null);

  // Start as true — elements render fully visible on SSR and first paint.
  // The observer will keep them visible if already on screen, or transition
  // them in when they scroll into view. This eliminates the flash caused by
  // an initial hidden → visible jump on mount.
  const [inView, setInView] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    // Small delay so the observer fires AFTER the first paint,
    // preventing the hidden flash on elements already in the viewport.
    const timer = setTimeout(() => {
      observer.observe(el);
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [threshold, once]);

  return { ref, inView, mounted };
}
