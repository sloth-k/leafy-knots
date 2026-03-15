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
          A COVID-era hobby brought back to life
        </h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-brown/75">
          <p>
            Leafy Knots began with a stay-at-home mom in Hyderabad and her sister-in-law, who returned
            to crochet and knitting during the COVID years and revisited an old hobby that had been
            sitting quietly in the background for a long time.
          </p>
          <p>
            As they began making again, the pieces drew appreciation from friends, family, and people in
            their community. What began as something personal slowly turned into requests, gifting orders,
            and referrals that gave the hobby a new life.
          </p>
          <p>
            That is how Leafy Knots grew: not from mass production, but from people noticing the care in
            the work and wanting something similar for themselves. The goal now is to keep growing in a
            way that stays personal, thoughtful, and rooted in trust.
          </p>
        </div>
      </div>
    </section>
  );
}
