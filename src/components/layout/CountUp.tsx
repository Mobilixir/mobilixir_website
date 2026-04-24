"use client";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
	target: number;
	suffix?: string;
	duration?: number;
	/** Animation only starts when this flips to true */
	trigger: boolean;
}

/**
 * Counts from 0 → target using ease-out-quart once `trigger` becomes true.
 * Parent controls the trigger so it can sync with entrance animations.
 * Respects prefers-reduced-motion.
 */
export default function CountUp({
	target,
	suffix = "",
	duration = 1800,
	trigger,
}: CountUpProps) {
	const [count, setCount] = useState(0);
	const [done, setDone] = useState(false);
	const rafRef = useRef<number | null>(null);
	const startedRef = useRef(false);

	useEffect(() => {
		// Don't start until parent says so, and only run once
		if (!trigger || startedRef.current) return;
		startedRef.current = true;

		// Respect prefers-reduced-motion — snap to final immediately
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setCount(target);
			setDone(true);
			return;
		}

		const startTime = performance.now();

		const tick = (now: number) => {
			const elapsed = now - startTime;
			const progress = Math.min(elapsed / duration, 1);
			// ease-out-quart
			const eased = 1 - Math.pow(1 - progress, 4);
			setCount(Math.round(eased * target));

			if (progress < 1) {
				rafRef.current = requestAnimationFrame(tick);
			} else {
				setCount(target);
				setDone(true);
			}
		};

		rafRef.current = requestAnimationFrame(tick);

		return () => {
			if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
		};
	}, [trigger, target, duration]);

	return (
		<span>
			{count}
			{done ? suffix : ""}
		</span>
	);
}
