import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/common/SectionHeading";
import { founderImage } from "@/lib/imageMap";

export function StorySection() {
  return (
    <section className="bg-[#FFF8F0]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-soft">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F2E8DA]">
            <Image
              src={founderImage}
              alt="Leafy Knots founder at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Founder story"
            title="A stay-at-home mom turning quiet yarn hours into meaningful pieces"
            description="Leafy Knots began in Hyderabad with a simple idea: make handmade work feel as thoughtful and polished as the care that goes into it. What started at home has grown through family circles, community referrals, and custom requests shared over WhatsApp."
          />
          <p className="mt-6 text-base leading-8 text-brown/75">
            The brand is built on patience, warmth, and the joy of creating something personal for babies,
            gifting, homes, and milestone moments. It is local at heart, but ready to grow across India one
            trusted order at a time.
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center rounded-full bg-brown px-6 py-3 text-sm font-semibold text-white"
            >
              Read the maker story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
