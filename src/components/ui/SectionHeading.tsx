import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center max-w-2xl mx-auto mb-14" : "max-w-2xl mb-14"}>
      <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-base-content leading-tight">{title}</h2>
      {description && <p className="mt-4 text-base-content/60 leading-relaxed">{description}</p>}
    </Reveal>
  );
}
