"use client";

import { MotionConfig } from "framer-motion";

/** Makes every Framer Motion animation honour the OS reduced-motion setting. */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
