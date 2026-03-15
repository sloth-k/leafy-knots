import Link from "next/link";

import { BrandMark } from "@/components/common/BrandMark";
import { navigationLinks, siteConfig } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-brown/10 bg-[#EFE8DC]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-sage/15 p-2 text-sage">
              <BrandMark className="h-9 w-9" />
            </div>
            <div>
              <p className="font-heading text-2xl text-brown">Leafy Knots</p>
              <p className="text-sm text-brown/65">Handmade crochet and knitting with heart.</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-brown/70">
            Built for family referrals, local communities, and custom conversations that start with
            trust. Crafted in Hyderabad and shared with warmth.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brown/55">
            Quick navigation
          </p>
          <div className="mt-4 grid gap-3">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-brown/80">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brown/55">
            Connect
          </p>
          <div className="mt-4 grid gap-3 text-sm text-brown/80">
            <a href={buildWhatsAppUrl("Hi, I'd like to know more about Leafy Knots.")} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <p>{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
