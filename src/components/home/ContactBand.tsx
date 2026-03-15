import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function ContactBand() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/90 p-6 shadow-soft md:p-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sage">Let's connect</p>
          <h2 className="mt-3 font-heading text-4xl text-brown md:text-5xl">
            Reach Leafy Knots in the way that feels easiest
          </h2>
          <p className="mt-4 text-base leading-8 text-brown/75">
            For beta conversations, quick questions, gifting ideas, and custom requests, WhatsApp is the
            fastest option. Instagram, email, and Hyderabad location details stay visible here too.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <a
            href={buildWhatsAppUrl("Hi, I'd like to know more about Leafy Knots.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-[2rem] bg-cream p-5"
          >
            <MessageCircle className="h-6 w-6 text-[#25D366]" />
            <p className="mt-4 font-heading text-2xl text-brown">WhatsApp</p>
            <p className="mt-2 text-sm leading-7 text-brown/75">{siteConfig.responseTime}</p>
          </a>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-[2rem] bg-cream p-5"
          >
            <Instagram className="h-6 w-6 text-rose" />
            <p className="mt-4 font-heading text-2xl text-brown">Instagram</p>
            <p className="mt-2 text-sm leading-7 text-brown/75">Follow the latest handmade pieces and updates.</p>
          </a>

          <a href={`mailto:${siteConfig.email}`} className="rounded-[2rem] bg-cream p-5">
            <Mail className="h-6 w-6 text-sage" />
            <p className="mt-4 font-heading text-2xl text-brown">Email</p>
            <p className="mt-2 break-all text-sm leading-7 text-brown/75">{siteConfig.email}</p>
          </a>

          <div className="rounded-[2rem] bg-cream p-5">
            <MapPin className="h-6 w-6 text-brown" />
            <p className="mt-4 font-heading text-2xl text-brown">Location</p>
            <p className="mt-2 text-sm leading-7 text-brown/75">{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
