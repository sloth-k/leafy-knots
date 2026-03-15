import Link from "next/link";

import { BrandMark } from "@/components/common/BrandMark";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navigationLinks } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-cream/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-full bg-sage/15 p-2 text-sage">
            <BrandMark className="h-9 w-9" />
          </div>
          <div>
            <p className="font-heading text-2xl leading-none text-brown">Leafy Knots</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-brown/55">
              Crafted with Care
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brown/75 transition hover:text-brown"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={buildWhatsAppUrl("Hi, I'd like to know more about Leafy Knots.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-sage px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            WhatsApp Inquiry
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
