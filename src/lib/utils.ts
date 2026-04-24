import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names intelligently.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Standard Framer Motion fade-up variant used across sections.
 * ease-out-quart — fast start, smooth landing.
 */
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay,
      ease: [0.165, 0.84, 0.44, 1] as [number, number, number, number], // ease-out-quart
    },
  }),
};

/**
 * Stagger container variant — children animate in sequence.
 */
export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/**
 * Scale-up variant for cards entering viewport.
 * Starts from scale(0.95) + opacity 0 — never from scale(0).
 */
export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      delay,
      ease: [0.165, 0.84, 0.44, 1] as [number, number, number, number],
    },
  }),
};

/**
 * Slide-in from left variant.
 */
export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.165, 0.84, 0.44, 1] as [number, number, number, number],
    },
  },
};

/**
 * Returns the correct `initial` prop for a Framer Motion element.
 *
 * On the server and first paint, `mounted` is false, so we return `false`
 * as `initial` — Framer Motion skips the hidden state and renders the
 * element fully visible. This eliminates the flash caused by opacity: 0
 * rendering before hydration completes.
 *
 * Once mounted, elements that scroll into view will animate normally
 * from "hidden" → "visible".
 */
export function getInitial(mounted: boolean): "hidden" | false {
  return mounted ? "hidden" : false;
}
