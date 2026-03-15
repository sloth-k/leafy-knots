import { imageMap } from "@/lib/imageMap";
import { formatIndex } from "@/lib/utils";
import type { CollectionItem } from "@/types";

const shortDescriptions = [
  "Soft textures, careful finishing, and a warm handmade feel.",
  "A cozy handcrafted piece designed to look thoughtful and giftable.",
  "Made slowly with yarn, patience, and polished presentation in mind.",
  "An everyday heirloom-style creation for homes, gifting, or little moments.",
];

const descriptionLines = [
  "This Leafy Knots original is photographed from the real local collection and presented as a one-of-a-kind handmade piece.",
  "Each stitch is shaped by hand, making every item feel personal, warm, and naturally unique.",
  "If you would like a similar look in another color or size, a custom order conversation can start directly on WhatsApp.",
];

const categoryTags: Record<string, string[]> = {
  Covers: ["handmade", "crochet", "feature-piece", "hyderabad"],
  "Dream Catchers": ["dream-catcher", "decor", "handmade", "gift-ready"],
  "Earrings, Charms & Keyrings": ["accessories", "charms", "keyrings", "small-gifts"],
  Flowers: ["flowers", "decor", "soft-yarn", "gift-ready"],
  Gajra: ["gajra", "traditional", "festive", "handmade"],
  "Mats & Blankets": ["mats", "blankets", "home", "cozy"],
  Misc: ["handmade", "craft", "leafy-knots", "custom-friendly"],
};

const categoryMaterials: Record<string, string[]> = {
  Covers: ["Soft yarn", "Hand-finished detailing"],
  "Dream Catchers": ["Yarn work", "Decorative handmade finishing"],
  "Earrings, Charms & Keyrings": ["Lightweight craft materials", "Handmade detailing"],
  Flowers: ["Soft yarn", "Careful shaping by hand"],
  Gajra: ["Yarn work", "Handcrafted festive styling"],
  "Mats & Blankets": ["Comfort-first fibers", "Slow handmade construction"],
  Misc: ["Mixed handmade materials", "Careful finishing"],
};

const careNotes = [
  "Gentle hand wash recommended",
  "Dry flat in shade",
  "Store folded or safely placed to preserve shape",
];

const featuredIndices = new Set([0, 1, 4, 9, 17, 28, 40, 48]);

function getName(category: string, index: number) {
  const itemNumber = formatIndex(index);

  switch (category) {
    case "Covers":
      return `Cover Creation ${itemNumber}`;
    case "Dream Catchers":
      return `Dream Catcher ${itemNumber}`;
    case "Earrings, Charms & Keyrings":
      return `Handmade Accessory ${itemNumber}`;
    case "Flowers":
      return `Floral Creation ${itemNumber}`;
    case "Gajra":
      return `Gajra Piece ${itemNumber}`;
    case "Mats & Blankets":
      return `Mat or Blanket ${itemNumber}`;
    default:
      return `Leafy Knots Creation ${itemNumber}`;
  }
}

export const collection: CollectionItem[] = imageMap.map((entry, index) => {
  const itemNumber = formatIndex(index);
  const name = getName(entry.category, index);

  return {
    id: `leafy-knots-${itemNumber}`,
    slug: `leafy-knots-creation-${itemNumber}`,
    name,
    shortDescription: shortDescriptions[index % shortDescriptions.length],
    description: descriptionLines.join(" "),
    featured: featuredIndices.has(index),
    primaryImage: entry.image,
    images: [entry.image],
    tags: categoryTags[entry.category] ?? ["handmade", "leafy-knots"],
    optionalCategory: entry.category,
    inquiryLabel: name,
    priceLabel: "Price on inquiry",
    materials: categoryMaterials[entry.category] ?? ["Handmade materials", "Careful finishing"],
    care: careNotes,
    alt: `${name} in ${entry.category} by Leafy Knots, handmade in Hyderabad`,
  };
});

export const featuredCollection = collection.filter((item) => item.featured).slice(0, 6);
export const galleryCollection = collection.slice(0, 12);

export function getCategorySlug(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const collectionCategories = Array.from(
  collection.reduce((map, item) => {
    if (!item.optionalCategory) {
      return map;
    }

    const existing = map.get(item.optionalCategory);

    if (existing) {
      existing.count += 1;
      return map;
    }

    map.set(item.optionalCategory, {
      name: item.optionalCategory,
      slug: getCategorySlug(item.optionalCategory),
      image: item.primaryImage,
      count: 1,
    });

    return map;
  }, new Map<string, { name: string; slug: string; image: string; count: number }>())
).map(([, value]) => value);

export function getCollectionItemBySlug(slug: string) {
  return collection.find((item) => item.slug === slug);
}

export function getCollectionCategoryBySlug(slug: string) {
  return collectionCategories.find((category) => category.slug === slug);
}

export function getItemsByCategorySlug(slug: string) {
  const category = getCollectionCategoryBySlug(slug);

  if (!category) {
    return [];
  }

  return collection.filter((item) => item.optionalCategory === category.name);
}
