import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { buildItemInquiryUrl } from "@/lib/utils";
import type { CollectionItem } from "@/types";

type ItemCardProps = {
  item: CollectionItem;
};

export function ItemCard({ item }: ItemCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-card">
      <Link href={`/item/${item.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#F2E8DA]">
          <Image
            src={item.primaryImage}
            alt={item.alt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-heading text-2xl text-brown">{item.name}</h3>
            <span className="rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Handmade
            </span>
          </div>
          <p className="text-sm leading-6 text-brown/75">{item.shortDescription}</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold text-brown">{item.priceLabel}</span>
          <div className="flex flex-wrap gap-2">
            <a
              href={buildItemInquiryUrl(item.inquiryLabel)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Inquire
            </a>
            <Link
              href={`/item/${item.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-brown/10 px-4 py-2 text-xs font-semibold text-brown"
            >
              View
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
