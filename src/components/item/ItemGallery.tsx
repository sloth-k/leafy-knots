"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

type ItemGalleryProps = {
  images: string[];
  alt: string;
};

export function ItemGallery({ images, alt }: ItemGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeImage = images[activeIndex];

  return (
    <>
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="relative block aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#F2E8DA] shadow-soft"
        >
          <Image src={activeImage} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-brown">
            Tap to zoom
          </span>
        </button>

        {images.length > 1 ? (
          <div className="grid grid-cols-4 gap-3">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative aspect-square overflow-hidden rounded-2xl border ${
                  activeIndex === index ? "border-sage" : "border-transparent"
                }`}
              >
                <Image src={image} alt={alt} fill className="object-cover" sizes="120px" />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {lightboxOpen ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-brown/85 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-brown"
              aria-label="Close image preview"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative h-[82vh] w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white"
            >
              <Image src={activeImage} alt={alt} fill className="object-contain" sizes="100vw" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
