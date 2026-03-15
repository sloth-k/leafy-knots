import type { Metadata } from "next";
import Link from "next/link";

import { FounderStory } from "@/components/about/FounderStory";
import { SectionHeading } from "@/components/common/SectionHeading";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Read the founder story behind Leafy Knots, a handmade crochet and knitting brand rooted in Hyderabad.",
};

export default function AboutPage() {
  return (
    <>
      <FounderStory />

      <section className="bg-[#FFF8F0]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Values"
            title="Small-batch, handmade, and growing with intention"
            description="Leafy Knots is designed for people who want the warmth of handmade work without sacrificing polish, trust, or convenience."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white/90 p-6 shadow-card">
              <h3 className="font-heading text-2xl text-brown">Made at home</h3>
              <p className="mt-3 text-sm leading-7 text-brown/75">
                Each piece begins in a home studio environment where time, care, and quality matter more than volume.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white/90 p-6 shadow-card">
              <h3 className="font-heading text-2xl text-brown">Hyderabad roots</h3>
              <p className="mt-3 text-sm leading-7 text-brown/75">
                The brand is proudly local-first and built to serve community referrals while staying open to wider orders across India.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white/90 p-6 shadow-card">
              <h3 className="font-heading text-2xl text-brown">National aspiration</h3>
              <p className="mt-3 text-sm leading-7 text-brown/75">
                The long-term goal is simple: grow slowly, stay personal, and let handmade quality travel further through trust.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/collection" className="rounded-full bg-sage px-6 py-3 text-sm font-semibold text-white">
              Explore collection
            </Link>
            <a
              href={buildWhatsAppUrl("Hi, I'd love to know more about Leafy Knots and your handmade work.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
