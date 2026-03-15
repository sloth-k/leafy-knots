import type { Metadata } from "next";

import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Leafy Knots for handmade inquiries, custom requests, and Hyderabad-first gifting conversations.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's continue the conversation"
        description="WhatsApp is the fastest way to reach Leafy Knots, especially for custom ideas and quick collection questions."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <a
          href={buildWhatsAppUrl("Hi, I'd like to know more about Leafy Knots.")}
          target="_blank"
          rel="noreferrer"
          className="rounded-[2rem] bg-white/90 p-6 shadow-card"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sage">WhatsApp</p>
          <p className="mt-4 font-heading text-2xl text-brown">Primary inquiry channel</p>
          <p className="mt-3 text-sm leading-7 text-brown/75">{siteConfig.responseTime}</p>
        </a>

        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-[2rem] bg-white/90 p-6 shadow-card"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sage">Instagram</p>
          <p className="mt-4 font-heading text-2xl text-brown">Placeholder social handle</p>
          <p className="mt-3 text-sm leading-7 text-brown/75">Update the URL later in one place when the handle is finalized.</p>
        </a>

        <a href={`mailto:${siteConfig.email}`} className="rounded-[2rem] bg-white/90 p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sage">Email</p>
          <p className="mt-4 font-heading text-2xl text-brown">{siteConfig.email}</p>
          <p className="mt-3 text-sm leading-7 text-brown/75">Useful for longer planning notes or non-urgent follow-up.</p>
        </a>

        <div className="rounded-[2rem] bg-white/90 p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sage">Location</p>
          <p className="mt-4 font-heading text-2xl text-brown">{siteConfig.location}</p>
          <p className="mt-3 text-sm leading-7 text-brown/75">Hyderabad-first, but the brand is structured to serve wider India orders too.</p>
        </div>
      </div>
    </div>
  );
}
