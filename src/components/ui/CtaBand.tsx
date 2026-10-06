import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";
import { Reveal } from "./Reveal";

interface CtaBandProps {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}

/** Inverted closing band: a big email link, in the manner of studio sites. */
export function CtaBand({
  title = "Have a project in mind?",
  text = "Tell us what you are building. You will get a reply within two business days.",
  href = "/contact",
  label = "Start a project",
}: CtaBandProps) {
  return (
    <section className="bg-neutral text-neutral-content py-24 sm:py-32">
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="eyebrow !text-accent mb-5">Let&apos;s talk</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl text-balance">{title}</h2>
        <p className="mt-6 text-lg text-neutral-content/70 max-w-xl">{text}</p>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
          <Link href={href} className="btn btn-primary btn-lg rounded-lg gap-2 active:scale-[0.97] transition-transform">
            {label} <ArrowUpRight size={18} />
          </Link>
          <a href={`mailto:${SITE.email}`} className="text-xl sm:text-2xl font-medium underline decoration-neutral-content/30 underline-offset-8 hover:decoration-accent transition-colors">
            {SITE.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
