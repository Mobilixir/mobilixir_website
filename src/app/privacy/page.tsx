import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Mobilixir Technologies handles information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy policy" description="Last updated: October 2026" />
      <section className="py-16 bg-base-100">
        <div className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 sm:px-6">
          <h2>Who we are</h2>
          <p>{SITE.name} is an independent software studio based in India. You can reach us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>

          <h2>What we collect</h2>
          <p>When you use the contact form we receive the name, email address, selected service, budget range and message you submit. Our hosting provider also keeps standard server logs (such as IP address and user agent) for security and reliability.</p>

          <h2>How we use it</h2>
          <p>We use your details only to reply to your enquiry and to prepare a proposal. We do not sell your information or use it for unrelated marketing.</p>

          <h2>Who sees it</h2>
          <p>Enquiries are delivered by email. Service providers that host this website and deliver email process data on our behalf. The blog is loaded from dev.to; following links to dev.to, GitHub, npm or the VS Code Marketplace is governed by their own policies.</p>

          <h2>Cookies and analytics</h2>
          <p>This site does not set tracking cookies. Your colour-theme choice is stored in your browser&apos;s local storage and never sent to us.</p>

          <h2>Retention</h2>
          <p>We keep enquiry emails for as long as needed to respond and for a reasonable period afterwards, then delete them. Ask us to delete yours at any time.</p>

          <h2>Your rights</h2>
          <p>You can ask to access, correct or delete the personal data we hold about you by emailing {SITE.email}.</p>
        </div>
      </section>
    </>
  );
}
