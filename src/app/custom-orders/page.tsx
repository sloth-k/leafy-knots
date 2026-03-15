import type { Metadata } from "next";

import { CustomOrderForm } from "@/components/common/CustomOrderForm";
import { SectionHeading } from "@/components/common/SectionHeading";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Custom Orders",
  description:
    "Plan a custom crochet or knitting request with Leafy Knots through a WhatsApp-friendly custom order flow.",
};

export default function CustomOrdersPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <div className="flex flex-col justify-center">
        <SectionHeading
          eyebrow="Custom requests"
          title="Tell us what you'd love to have made"
          description="Custom handmade requests are welcome. Share the piece, color mood, gifting context, or a rough idea, and Leafy Knots can take it forward on WhatsApp."
        />

        <div className="mt-8 rounded-[2rem] bg-white/85 p-6 shadow-card">
          <h2 className="font-heading text-2xl text-brown">How it works</h2>
          <ol className="mt-4 grid gap-3 text-sm leading-7 text-brown/75">
            <li>1. Submit the form with your idea and any useful context.</li>
            <li>2. Continue the conversation on WhatsApp for colors, timing, and pricing.</li>
            <li>3. Share any reference image directly in chat if you have one.</li>
          </ol>
          <a
            href={buildWhatsAppUrl("Hi, I'd like to discuss a custom handmade order with Leafy Knots.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
          >
            WhatsApp directly
          </a>
        </div>
      </div>

      <CustomOrderForm />
    </div>
  );
}
