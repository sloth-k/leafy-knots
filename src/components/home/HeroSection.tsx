"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { heroImage } from "@/lib/imageMap";
import { quickFacts } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-paper-wash" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <motion.div
          className="relative z-10 flex flex-col justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="inline-flex w-fit rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sage shadow-sm">
            Leafy Knots
          </span>
          <h1 className="mt-6 max-w-xl font-heading text-5xl leading-tight text-brown md:text-6xl">
            Crafted with Care
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-brown/75">
            Handmade crochet and knitted creations for gifting, decor, keepsakes, and the kind of
            everyday moments that deserve something more personal than off-the-shelf.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-brown/68">
            Start with the collection categories, explore the pieces inside each one, and reach out on
            WhatsApp for custom orders or quick questions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/collection"
              className="inline-flex items-center rounded-full bg-sage px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Explore Collection
            </Link>
            <Link
              href="/custom-orders"
              className="inline-flex items-center rounded-full border border-brown/10 bg-white/80 px-6 py-3 text-sm font-semibold text-brown transition hover:-translate-y-0.5"
            >
              Custom Order
            </Link>
            <a
              href={buildWhatsAppUrl("Hi, I'm interested in Leafy Knots. Please share more details.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              WhatsApp Inquiry
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {quickFacts.map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-brown/10 bg-white/70 px-4 py-2 text-sm text-brown/70"
              >
                {fact}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
        >
          <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-sunflower/30 blur-3xl" />
          <div className="absolute -right-3 bottom-16 h-28 w-28 rounded-full bg-rose/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/70 p-3 shadow-soft">
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem] bg-[#F2E8DA]">
              <Image
                src={heroImage}
                alt="Featured Leafy Knots handmade creation"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
