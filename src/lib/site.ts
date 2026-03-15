import { founderImage, heroImage } from "@/lib/imageMap";
import type { NavigationLink, Testimonial, WhyChooseUsPoint } from "@/types";

export const siteConfig = {
  name: "Leafy Knots",
  description:
    "Warm, premium crochet and knitting creations handmade in Hyderabad for babies, homes, gifting, and custom moments that deserve extra care.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://leafy-knots.vercel.app",
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "919999999999",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/leafyknots",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@leafyknots.in",
  location: "Hyderabad, India",
  responseTime: "Usually replies within a few hours on WhatsApp.",
  heroImage,
  founderImage,
};

export const navigationLinks: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/custom-orders", label: "Custom Orders" },
];

export const whyChooseUsPoints: WhyChooseUsPoint[] = [
  {
    title: "Handmade with care",
    description:
      "Every Leafy Knots piece is patiently crafted by hand, with thoughtful finishing and a personal touch you can feel.",
  },
  {
    title: "Custom-friendly",
    description:
      "Colors, gifting requests, baby-friendly pieces, and one-off ideas are always welcome for discussion.",
  },
  {
    title: "Thoughtful gifting",
    description:
      "The collection is designed to feel meaningful, cozy, and memorable for families, little ones, and celebrations.",
  },
  {
    title: "Local authenticity",
    description:
      "Rooted in Hyderabad and built through word of mouth, Leafy Knots is made for trust-first community discovery.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The finishing felt so neat and personal. It looked even better in person than it did on WhatsApp.",
    name: "Aparna S.",
    context: "Early customer from Hyderabad",
  },
  {
    quote:
      "The handmade feel is exactly what we wanted for gifting. It felt warm, special, and made with real care.",
    name: "Ritika M.",
    context: "Beta testimonial placeholder",
  },
  {
    quote:
      "Leafy Knots made the process easy over chat, and the final piece felt thoughtful from the first look.",
    name: "Neha P.",
    context: "Community referral order",
  },
];

export const quickFacts = [
  "Handmade in Hyderabad",
  "Custom orders welcome",
  "WhatsApp-first inquiries",
  "Pan-India friendly delivery flow",
];
