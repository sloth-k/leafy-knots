import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/common/SectionHeading";
import { CollectionGrid } from "@/components/item/CollectionGrid";
import { ItemDetailContent } from "@/components/item/ItemDetailContent";
import { ItemGallery } from "@/components/item/ItemGallery";
import { collection, getCollectionItemBySlug } from "@/lib/collection";

type ItemPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return collection.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ItemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCollectionItemBySlug(slug);

  if (!item) {
    return {
      title: "Item not found",
    };
  }

  return {
    title: item.name,
    description: item.shortDescription,
    openGraph: {
      images: [
        {
          url: item.primaryImage,
          width: 900,
          height: 1600,
          alt: item.alt,
        },
      ],
    },
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { slug } = await params;
  const item = getCollectionItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const relatedItems = collection.filter((entry) => entry.slug !== item.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <ItemGallery images={item.images} alt={item.alt} />
        <ItemDetailContent item={item} />
      </div>

      <div className="mt-20">
        <SectionHeading
          eyebrow="More handmade pieces"
          title="Continue browsing the collection"
          description="A few more items from the same unified image-backed archive."
        />
        <div className="mt-8">
          <CollectionGrid items={relatedItems} />
        </div>
      </div>
    </div>
  );
}
