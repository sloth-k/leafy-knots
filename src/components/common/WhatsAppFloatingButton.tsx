import { MessageCircle } from "lucide-react";

import { buildWhatsAppUrl } from "@/lib/utils";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppUrl("Hi, I'd like to know more about Leafy Knots.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Leafy Knots on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-1"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  );
}
