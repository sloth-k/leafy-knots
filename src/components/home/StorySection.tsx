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
            title="A COVID-era hobby rediscovered by a stay-at-home mom and her sister-in-law"
            description="Leafy Knots began when a stay-at-home mom in Hyderabad and her sister-in-law picked up crochet and knitting again during the COVID years. What started as a return to an old hobby slowly became something others noticed, appreciated, and began requesting for themselves."
          />
          <p className="mt-6 text-base leading-8 text-brown/75">
            Friends, family, and community circles encouraged them to keep going, and that steady appreciation
            is what shaped Leafy Knots into a growing handmade brand for gifting, decor, and special requests.
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
