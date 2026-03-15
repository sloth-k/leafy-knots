"use client";

import { FormEvent, useState } from "react";

import { buildCustomOrderMessage, buildWhatsAppUrl } from "@/lib/utils";

const initialState = {
  name: "",
  phone: "",
  email: "",
  request: "",
  occasion: "",
  budget: "",
};

export function CustomOrderForm() {
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [referenceImage, setReferenceImage] = useState<File | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = buildCustomOrderMessage({
      ...formState,
      hasReferenceImage: Boolean(referenceImage),
    });

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setFormState(initialState);
    setReferenceImage(null);
  }

  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-soft md:p-8">
      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-brown/80">
            Name
            <input
              required
              value={formState.name}
              onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
              className="rounded-2xl border border-brown/10 bg-cream px-4 py-3 outline-none ring-0 transition focus:border-sage"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2 text-sm text-brown/80">
            Phone
            <input
              required
              value={formState.phone}
              onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))}
              className="rounded-2xl border border-brown/10 bg-cream px-4 py-3 outline-none ring-0 transition focus:border-sage"
              placeholder="WhatsApp number"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm text-brown/80">
          Email (optional)
          <input
            type="email"
            value={formState.email}
            onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
            className="rounded-2xl border border-brown/10 bg-cream px-4 py-3 outline-none ring-0 transition focus:border-sage"
            placeholder="name@example.com"
          />
        </label>

        <label className="grid gap-2 text-sm text-brown/80">
          What would you like made?
          <textarea
            required
            value={formState.request}
            onChange={(event) => setFormState((current) => ({ ...current, request: event.target.value }))}
            className="min-h-32 rounded-2xl border border-brown/10 bg-cream px-4 py-3 outline-none ring-0 transition focus:border-sage"
            placeholder="Tell us about the handmade piece you have in mind."
          />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-brown/80">
            Occasion
            <input
              required
              value={formState.occasion}
              onChange={(event) => setFormState((current) => ({ ...current, occasion: event.target.value }))}
              className="rounded-2xl border border-brown/10 bg-cream px-4 py-3 outline-none ring-0 transition focus:border-sage"
              placeholder="Baby gift, home decor, return gift..."
            />
          </label>
          <label className="grid gap-2 text-sm text-brown/80">
            Budget (optional)
            <input
              value={formState.budget}
              onChange={(event) => setFormState((current) => ({ ...current, budget: event.target.value }))}
              className="rounded-2xl border border-brown/10 bg-cream px-4 py-3 outline-none ring-0 transition focus:border-sage"
              placeholder="A budget range if you have one"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm text-brown/80">
          Reference image upload (optional)
          <input
            type="file"
            accept="image/*"
            onChange={(event) => setReferenceImage(event.target.files?.[0] || null)}
            className="rounded-2xl border border-dashed border-brown/20 bg-cream px-4 py-3 text-sm"
          />
          <span className="text-xs text-brown/60">
            Files are not uploaded anywhere in version 1. If you attach one here, we will note that
            you have a reference image ready to share on WhatsApp.
          </span>
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-sage px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
          Send Custom Request on WhatsApp
        </button>
      </form>

      {submitted ? (
        <p className="mt-4 rounded-2xl bg-sage/10 px-4 py-3 text-sm text-brown">
          Your message draft has been opened in WhatsApp. Share the reference image there if needed.
        </p>
      ) : null}
    </div>
  );
}
