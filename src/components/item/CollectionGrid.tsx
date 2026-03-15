import { ItemCard } from "@/components/item/ItemCard";
import type { CollectionItem } from "@/types";

type CollectionGridProps = {
  items: CollectionItem[];
};

export function CollectionGrid({ items }: CollectionGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
