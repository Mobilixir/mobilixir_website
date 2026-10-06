import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SERVICES, SITE } from "@/data/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Mobilixir Technologies about your mobile or web project. You will get a reply within two business days.",
  keywords: ["hire mobile app developer", "request a project quote", "mobile app development quote India"],
  alternates: { canonical: "/contact" },
};

type Props = { searchParams: Promise<{ service?: string | string[] }> };

export default async function ContactPage({ searchParams }: Props) {
  const { service } = await searchParams;
  const requested = Array.isArray(service) ? service[0] : service;
  const defaultService = SERVICES.some((s) => s.slug === requested) ? requested : "";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Tell us what you are building, your timeline and budget. You will get a reply within two business days."
      />
      <section className="py-16 bg-base-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 relative rounded-2xl bg-base-200 border border-base-300 p-6 sm:p-8">
            <ContactForm defaultService={defaultService} />
          </div>
          <aside className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-semibold mb-2">Prefer email?</h2>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-primary link">
                <Mail size={16} aria-hidden="true" /> {SITE.email}
              </a>
            </div>
            <div>
              <h2 className="font-semibold mb-2">What happens next</h2>
              <ol className="list-decimal list-inside space-y-1 text-sm text-base-content/70">
                <li>We read your message and reply within two business days.</li>
                <li>A short discovery call to understand the goals.</li>
                <li>A written proposal with scope, timeline and price.</li>
              </ol>
            </div>
            <p className="text-sm text-base-content/50">
              Your details are used only to reply to your enquiry. See the <a className="link" href="/privacy">privacy policy</a>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
