import { MessageCircle } from "lucide-react";

import { buildItemInquiryUrl } from "@/lib/utils";
import type { CollectionItem } from "@/types";

type ItemDetailContentProps = {
  item: CollectionItem;
};

export function ItemDetailContent({ item }: ItemDetailContentProps) {
  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-soft md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sage">Leafy Knots piece</p>
      <h1 className="mt-3 font-heading text-4xl text-brown md:text-5xl">{item.name}</h1>
      <p className="mt-4 text-lg leading-8 text-brown/75">{item.description}</p>

      <div className="mt-8 grid gap-6 rounded-[1.75rem] bg-cream p-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown/55">Handmade note</p>
          <p className="mt-2 text-sm leading-7 text-brown/75">
            Because every piece is made by hand, slight variations are part of the charm and make each item feel individual.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown/55">Materials</p>
            <ul className="mt-2 grid gap-2 text-sm text-brown/75">
              {item.materials?.map((material) => <li key={material}>{material}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown/55">Care</p>
            <ul className="mt-2 grid gap-2 text-sm text-brown/75">
              {item.care?.map((note) => <li key={note}>{note}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-sage/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-sage">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={buildItemInquiryUrl(item.inquiryLabel)}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp about this piece
      </a>
    </div>
  );
}
