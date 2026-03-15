import { HeartHandshake, Leaf, MapPinHouse, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/common/SectionHeading";
import { whyChooseUsPoints } from "@/lib/site";

const icons = [HeartHandshake, Sparkles, Leaf, MapPinHouse];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why choose Leafy Knots"
        title="Made for trust-first shopping and thoughtful gifting"
        description="The experience is designed to feel warm, reliable, and easy to share inside family groups, gated communities, and personal referrals."
        align="center"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {whyChooseUsPoints.map((point, index) => {
          const Icon = icons[index];

          return (
            <div
              key={point.title}
              className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-card"
            >
              <div className="inline-flex rounded-2xl bg-sage/12 p-3 text-sage">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-2xl text-brown">{point.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brown/75">{point.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
