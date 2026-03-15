import Image from "next/image";

import { SectionHeading } from "@/components/common/SectionHeading";
import { galleryCollection } from "@/lib/collection";

export function GallerySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Gallery"
        title="A social-style grid that keeps the real work front and center"
        description="Built for shareability across WhatsApp, Instagram DMs, and community groups without needing any social API."
      />

      <div className="mt-10 columns-2 gap-4 space-y-4 md:columns-3">
        {galleryCollection.map((item, index) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-card ${
              index % 5 === 0 ? "animate-float" : ""
            }`}
          >
            <div className="relative overflow-hidden rounded-[1.35rem] bg-[#F2E8DA]">
              <div className={index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/4.8]"}>
                <Image
                  src={item.primaryImage}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
