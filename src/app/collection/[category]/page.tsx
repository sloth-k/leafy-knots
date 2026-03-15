import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/common/SectionHeading";
import { CollectionGrid } from "@/components/item/CollectionGrid";
import {
  collectionCategories,
  getCollectionCategoryBySlug,
  getItemsByCategorySlug,
} from "@/lib/collection";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return collectionCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryEntry = getCollectionCategoryBySlug(category);

  if (!categoryEntry) {
    return {
      title: "Category not found",
    };
  }

  return {
    title: categoryEntry.name,
    description: `Browse ${categoryEntry.name} handmade pieces from Leafy Knots.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryEntry = getCollectionCategoryBySlug(category);

  if (!categoryEntry) {
    notFound();
  }

  const items = getItemsByCategorySlug(category);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <SectionHeading
          eyebrow="Category"
          title={categoryEntry.name}
          description={`Browse ${categoryEntry.count} handmade piece${
            categoryEntry.count === 1 ? "" : "s"
          } in this category.`}
        />
        <Link
          href="/collection"
          className="inline-flex rounded-full border border-brown/10 bg-white/80 px-5 py-3 text-sm font-semibold text-brown"
        >
          Back to categories
        </Link>
      </div>

      <CollectionGrid items={items} />
    </div>
  );
}
