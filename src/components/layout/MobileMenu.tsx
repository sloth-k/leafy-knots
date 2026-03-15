"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { BrandMark } from "@/components/common/BrandMark";
import { navigationLinks } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open navigation menu"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brown/10 bg-white/80 text-brown shadow-sm"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[70] bg-brown/25 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-cream p-6 shadow-soft"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-sage/15 p-2 text-sage">
                    <BrandMark className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-heading text-xl text-brown">Leafy Knots</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-brown/55">
                      Crafted with Care
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brown/10 bg-white text-brown"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-10 grid gap-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-white/60 bg-white/70 px-4 py-4 text-lg text-brown"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <a
                href={buildWhatsAppUrl("Hi, I'd like to know more about Leafy Knots.")}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-full bg-sage px-5 py-3 text-sm font-semibold text-white"
              >
                WhatsApp Inquiry
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
