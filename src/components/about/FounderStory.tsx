import Image from "next/image";

import { founderImage } from "@/lib/imageMap";

export function FounderStory() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-soft">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F2E8DA]">
          <Image
            src={founderImage}
            alt="Leafy Knots founder portrait"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sage">About the maker</p>
        <h1 className="mt-4 font-heading text-5xl text-brown md:text-6xl">
          Handmade values, rooted in home
        </h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-brown/75">
          <p>
            Leafy Knots is the work of a stay-at-home mom in Hyderabad who turned a love for crochet
            and knitting into a small handmade brand built on care, patience, and meaningful detail.
          </p>
          <p>
            The brand grew naturally through referrals, family circles, and community groups where
            trust matters as much as the final piece. Every item reflects the pace of real handmade work
            rather than factory repetition.
          </p>
          <p>
            From local gifting to wider orders across India, the goal is simple: grow slowly, stay
            personal, and let handmade quality travel further through trust.
          </p>
        </div>
      </div>
    </section>
  );
}
