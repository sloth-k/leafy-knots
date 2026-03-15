import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/common/SectionHeading";
import { collectionCategories } from "@/lib/collection";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Browse the full Leafy Knots collection of handmade crochet and knitting creations from Hyderabad.",
};

export default function CollectionPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Collection"
        title="Browse by handmade category first"
        description="Start with a category tile, then open a dedicated page for the handmade pieces inside it."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {collectionCategories.map((entry) => (
          <Link
            key={entry.name}
            href={`/collection/${entry.slug}`}
            className="group block overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#F2E8DA]">
              <Image
                src={entry.image}
                alt={`${entry.name} category preview`}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-2 p-5">
              <h2 className="font-heading text-3xl text-brown">{entry.name}</h2>
              <p className="text-sm text-brown/70">
                {entry.count} piece{entry.count === 1 ? "" : "s"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
