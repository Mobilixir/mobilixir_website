import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center max-w-2xl mx-auto mb-12" : "max-w-3xl mb-12"}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">{title}</h2>
      {description && <p className="mt-5 text-lg text-base-content/65 leading-relaxed">{description}</p>}
    </Reveal>
  );
}
