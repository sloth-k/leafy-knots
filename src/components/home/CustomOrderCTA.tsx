import Link from "next/link";

import { buildWhatsAppUrl } from "@/lib/utils";

export function CustomOrderCTA() {
  return (
    <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-brown px-6 py-10 text-white shadow-soft md:px-12 md:py-14">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Custom orders
            </p>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl">
              Need something special? Let's create it together.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
              Share a color preference, a gifting plan, or a handmade idea you want brought to life.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/custom-orders"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brown"
            >
              Start a custom order
            </Link>
            <a
              href={buildWhatsAppUrl("Hi, I'd like to discuss a custom order with Leafy Knots.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
