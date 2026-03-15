import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "@/lib/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export function buildItemInquiryMessage(itemName: string) {
  return `Hi, I'm interested in ${itemName} from Leafy Knots. Please share more details.`;
}

export function buildItemInquiryUrl(itemName: string) {
  return buildWhatsAppUrl(buildItemInquiryMessage(itemName));
}

export function buildCustomOrderMessage(fields: {
  name: string;
  phone: string;
  email?: string;
  request: string;
  occasion: string;
  budget?: string;
  hasReferenceImage?: boolean;
}) {
  const lines = [
    "Hi, I'd like to place a custom order with Leafy Knots.",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    fields.email ? `Email: ${fields.email}` : "",
    `What I would like made: ${fields.request}`,
    `Occasion: ${fields.occasion}`,
    fields.budget ? `Budget: ${fields.budget}` : "",
    fields.hasReferenceImage
      ? "I have a reference image ready to share on WhatsApp."
      : "",
  ].filter(Boolean);

  return lines.join("\n");
}
