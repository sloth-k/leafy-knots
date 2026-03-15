"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/common/BrandMark";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-cream/95 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >
          <div className="relative flex flex-col items-center gap-5">
            <motion.div
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="text-sage"
            >
              <BrandMark className="h-20 w-20" />
            </motion.div>
            <motion.div
              className="relative h-8 w-32 overflow-hidden rounded-full bg-white/70"
              initial={{ width: 72 }}
              animate={{ width: 128 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-rose via-sunflower to-sage"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.15, ease: "easeInOut" }}
              />
            </motion.div>
            <p className="font-heading text-2xl text-brown">Leafy Knots</p>
            <p className="text-sm tracking-[0.28em] text-brown/60 uppercase">
              Crafted with Care
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
