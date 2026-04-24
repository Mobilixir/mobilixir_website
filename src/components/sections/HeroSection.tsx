"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { HERO } from "@/data/site";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";
import { useState } from "react";
import CountUp from "../layout/CountUp";

export function HeroSection() {
  const [countTrigger, setCountTrigger] = useState(false);
  return (
		<section
			id="home"
			className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden mesh-bg pt-16"
		>
			{/* Decorative blobs */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary/8 blur-3xl"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/6 blur-3xl"
			/>

			<motion.div
				variants={staggerContainerVariants}
				initial="hidden"
				animate="visible"
				className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
			>
				{/* Eyebrow badge */}
				<motion.div
					variants={fadeUpVariants}
					custom={0}
					className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8 text-primary text-sm font-medium mb-6"
				>
					<span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
					{HERO.eyebrow}
				</motion.div>

				{/* Headline */}
				<motion.h1
					variants={fadeUpVariants}
					custom={0.05}
					className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-base-content leading-tight mb-6"
				>
					{HERO.headline}
				</motion.h1>

				{/* Subheadline */}
				<motion.p
					variants={fadeUpVariants}
					custom={0.1}
					className="text-lg sm:text-xl text-base-content/55 max-w-2xl mx-auto mb-10 leading-relaxed"
				>
					{HERO.subheadline}
				</motion.p>

				{/* CTAs */}
				<motion.div
					variants={fadeUpVariants}
					custom={0.15}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<Link
						href={HERO.primaryCta.href}
						className="btn btn-primary rounded-full px-8 py-3 text-base font-semibold gap-2 will-change-transform active:scale-[0.97] transition-transform duration-150"
					>
						{HERO.primaryCta.label}
						<ArrowRight size={17} />
					</Link>
					<Link
						href={HERO.secondaryCta.href}
						className="btn btn-ghost rounded-full px-8 py-3 text-base font-semibold text-base-content/60 hover:text-base-content active:scale-[0.97] transition-transform duration-150"
					>
						{HERO.secondaryCta.label}
					</Link>
				</motion.div>

				{/* Stats — get the 3D card lift too */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
					onAnimationComplete={() => setCountTrigger(true)}
					variants={fadeUpVariants}
					custom={0.2}
					className="cards-perspective mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
				>
					{HERO.stats.map((stat) => (
						<div
							key={stat.label}
							className="card-elevated text-center px-4 py-5 rounded-2xl bg-base-100/70 border border-base-300/60 backdrop-blur-sm"
						>
							<div className="text-3xl sm:text-4xl font-bold text-primary">
								<CountUp
									target={stat.target}
									suffix={stat.suffix}
									duration={1800}
									trigger={countTrigger}
								/>
							</div>
							<div className="text-xs sm:text-sm text-base-content/50 mt-1">
								{stat.label}
							</div>
						</div>
					))}
				</motion.div>
			</motion.div>

			{/* Scroll hint */}
			<motion.div
				initial={{ opacity: 0, y: -8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.2, duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-base-content/25"
			>
				<span className="text-xs tracking-widest uppercase">Scroll</span>
				<ChevronDown size={16} className="animate-bounce" />
			</motion.div>
		</section>
	);
}
