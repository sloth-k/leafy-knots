import { imageMap } from "@/lib/imageMap";
import { formatIndex } from "@/lib/utils";
import type { CollectionItem } from "@/types";

const namePrefixes = [
  "Leafy Knots Creation",
  "Handmade Piece",
  "Crochet Creation",
  "Knitted Treasure",
];

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

const tagSets = [
  ["handmade", "crochet", "gift-ready", "hyderabad"],
  ["artisan-made", "knitwear", "cozy", "leafy-knots"],
  ["custom-friendly", "soft-yarn", "premium-handmade", "india"],
  ["slow-made", "craft", "thoughtful-gifting", "warm-textures"],
];

const materialSets = [
  ["Soft yarn", "Hand-finished detailing"],
  ["Comfort-first fibers", "Careful edge finishing"],
  ["Crochet or knitting yarn blend", "Slow handmade construction"],
];

const careNotes = [
  "Gentle hand wash recommended",
  "Dry flat in shade",
  "Store folded to preserve shape",
];

const featuredIndices = new Set([0, 2, 5, 8, 14, 20, 27, 33]);

export const collection: CollectionItem[] = imageMap.map((image, index) => {
  const itemNumber = formatIndex(index);
  const prefix = namePrefixes[index % namePrefixes.length];
  const name = `${prefix} ${itemNumber}`;

  return {
    id: `leafy-knots-${itemNumber}`,
    slug: `leafy-knots-creation-${itemNumber}`,
    name,
    shortDescription: shortDescriptions[index % shortDescriptions.length],
    description: descriptionLines.join(" "),
    featured: featuredIndices.has(index),
    primaryImage: image,
    images: [image],
    tags: tagSets[index % tagSets.length],
    optionalCategory: undefined,
    inquiryLabel: name,
    priceLabel: "Price on inquiry",
    materials: materialSets[index % materialSets.length],
    care: careNotes,
    alt: `${name} by Leafy Knots, handmade in Hyderabad`,
  };
});

export const featuredCollection = collection.filter((item) => item.featured).slice(0, 6);
export const galleryCollection = collection.slice(0, 12);

export function getCollectionItemBySlug(slug: string) {
  return collection.find((item) => item.slug === slug);
}
