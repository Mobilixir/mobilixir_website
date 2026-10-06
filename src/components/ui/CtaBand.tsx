import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface CtaBandProps {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}

export function CtaBand({
  title = "Have a project in mind?",
  text = "Tell us what you are building. You will get a reply within two business days.",
  href = "/contact",
  label = "Start a project",
}: CtaBandProps) {
  return (
    <section className="py-20 bg-base-200">
      <Reveal className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-base-content/60">{text}</p>
        <Link href={href} className="btn btn-primary rounded-full px-8 mt-8 gap-2">
          {label} <ArrowRight size={17} />
        </Link>
      </Reveal>
    </section>
  );
}
