import type { Metadata } from "next";

import { SectionHeading } from "@/components/common/SectionHeading";
import { CollectionGrid } from "@/components/item/CollectionGrid";
import { collection } from "@/lib/collection";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Browse the full Leafy Knots collection of handmade crochet and knitting creations from Hyderabad.",
};

export default function CollectionPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Unified collection"
        title="Browse the full handmade collection"
        description="Version 1 keeps browsing simple and visual. Every item is powered by the local image-based collection model, without forcing categories."
      />

      <div className="mt-10">
        <CollectionGrid items={collection} />
      </div>
    </div>
  );
}
