import Link from "next/link";
import { Mail, Rss } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { NAV_ITEMS, SERVICES, SITE, SOCIALS } from "@/data/site";

const ICONS: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  devto: <Rss size={18} />,
  email: <Mail size={18} />,
};

const linkClass = "text-sm text-base-content/60 hover:text-primary transition-colors";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-bold text-2xl tracking-tight">
              mobilixir<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 text-sm text-base-content/60 leading-relaxed max-w-xs">
              {SITE.tagline}. React Native, iOS, Next.js and Elixir, with a focus on security.
            </p>
            <div className="flex items-center gap-2 mt-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.icon !== "email" && { target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={s.label}
                  className="touch-hitbox btn btn-ghost btn-sm btn-circle text-base-content/60 hover:text-primary hover:bg-primary/10"
                >
                  {ICONS[s.icon]}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Services">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-base-content/40 mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={linkClass}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-base-content/40 mb-4">Company</h3>
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>{item.label}</Link>
                </li>
              ))}
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
              <li><Link href="/privacy" className={linkClass}>Privacy</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-base-content/40 mb-4">Get in touch</h3>
            <a href={`mailto:${SITE.email}`} className={linkClass}>{SITE.email}</a>
            <p className="text-sm text-base-content/60 mt-3">Based in {SITE.location}. Working remotely with clients worldwide.</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-base-300">
          <p className="text-xs text-base-content/40">© {year} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
