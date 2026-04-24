import Link from "next/link";
import { Github, Linkedin, Phone, Mail, MessageCircle } from "lucide-react";
import { NAV_ITEMS, SOCIALS } from "@/data/site";

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  phone: <Phone size={18} />,
  email: <Mail size={18} />,
  whatsapp: <MessageCircle size={18} />,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-bold text-2xl tracking-tight">
              mobilixir<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 text-sm text-base-content/60 leading-relaxed max-w-xs">
              Boutique mobile &amp; web consultancy. We ship production-grade
              software that clients actually use.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === "whatsapp" || s.icon === "github" || s.icon === "linkedin" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="touch-hitbox btn btn-ghost btn-sm btn-circle text-base-content/60 hover:text-primary hover:bg-primary/10 transition-colors duration-150"
                >
                  {ICON_MAP[s.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-base-content/40 mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-base-content/60 hover:text-primary transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-base-content/40 mb-4">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:rushikesh@mobilixir.in"
                className="text-sm text-base-content/60 hover:text-primary transition-colors duration-150"
              >
                rushikesh@mobilixir.in
              </a>
              <a
                href="tel:+917588945789"
                className="text-sm text-base-content/60 hover:text-primary transition-colors duration-150"
              >
                +91 75889 45789
              </a>
              <a
                href="https://wa.me/917588945789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn btn-sm btn-outline border-primary text-primary hover:bg-primary hover:text-primary-content rounded-full mt-2 transition-all duration-150 active:scale-[0.97]"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-base-300 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-base-content/40">
            © {year} Mobilixir Technologies. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
