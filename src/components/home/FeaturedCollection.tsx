import Link from "next/link";

import { SectionHeading } from "@/components/common/SectionHeading";
import { CollectionGrid } from "@/components/item/CollectionGrid";
import { featuredCollection } from "@/lib/collection";

export function FeaturedCollection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Featured collection"
          title="A warm preview of the handmade collection"
          description="Real work from the Leafy Knots archive, shown without forcing categories so browsing feels easy from the first tap."
        />
        <Link
          href="/collection"
          className="inline-flex h-fit items-center rounded-full border border-brown/10 bg-white/80 px-5 py-3 text-sm font-semibold text-brown"
        >
          View full collection
        </Link>
      </div>

      <div className="mt-10">
        <CollectionGrid items={featuredCollection} />
      </div>
    </section>
  );
}
