# Leafy Knots

Warm, premium, mobile-first website for a handmade crochet and knitting brand based in Hyderabad, India. The site uses the real local image set already present in `public/images` and keeps version 1 browsing category-free on purpose.

## Repo plan summary

1. Inspect the existing `public/images` folder and treat it as the source of truth.
2. Build a unified collection model that does not require categories.
3. Generate a Next.js App Router site with reusable components, SEO, and WhatsApp-first conversion paths.
4. Keep the owner workflow simple so more images and renamed items can be added later without refactoring the UI.

## Final folder structure

```text
/
  public/
    images/
      ...existing local image assets
  src/
    app/
      about/
        page.tsx
      collection/
        page.tsx
      contact/
        page.tsx
      custom-orders/
        page.tsx
      item/
        [slug]/
          page.tsx
      globals.css
      layout.tsx
      page.tsx
      sitemap.ts
    components/
      about/
        FounderStory.tsx
      common/
        BrandMark.tsx
        CustomOrderForm.tsx
        LoadingScreen.tsx
        SectionHeading.tsx
        WhatsAppFloatingButton.tsx
      home/
        CustomOrderCTA.tsx
        FeaturedCollection.tsx
        GallerySection.tsx
        HeroSection.tsx
        StorySection.tsx
        TestimonialsSection.tsx
        WhyChooseUs.tsx
      item/
        CollectionGrid.tsx
        ItemCard.tsx
        ItemDetailContent.tsx
        ItemGallery.tsx
      layout/
        Footer.tsx
        MobileMenu.tsx
        Navbar.tsx
    lib/
      collection.ts
      imageMap.ts
      site.ts
      utils.ts
    types/
      index.ts
  .env.example
  next.config.ts
  package.json
  postcss.config.js
  tailwind.config.ts
  tsconfig.json
  next-env.d.ts
  README.md
```

## Setup

### Run locally

1. Install dependencies:

```bash
npm install
```

2. Create local environment variables:

```bash
copy .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Maintenance guide

### Replace images later

- Put new local images into `public/images`.
- Update the ordered list in `src/lib/imageMap.ts`.
- The site will automatically generate unified collection items from that list.

### Add more collection items

- Add the image path to `src/lib/imageMap.ts`.
- The item will appear automatically in `/collection` and get a detail page via `src/lib/collection.ts`.
- If you want some items featured on the homepage, add their indexes to `featuredIndices` in `src/lib/collection.ts`.

### Rename displayed items

- The current version uses a safe generic naming strategy in `src/lib/collection.ts`.
- To manually rename an item, change the generated `name` logic to use a per-image override map or edit the returned `name` for specific indexes.

### Change the WhatsApp number

- Update `NEXT_PUBLIC_WHATSAPP_PHONE` in `.env.local`.
- The WhatsApp CTA links are generated centrally through `src/lib/utils.ts`.

### Edit testimonials

- Update the `testimonials` array in `src/lib/site.ts`.
- These are placeholder-friendly and ready to replace with real customer quotes.

### Change contact or social details

- Update `siteConfig` in `src/lib/site.ts`.
- This updates metadata, footer links, contact page details, and structured data.

### Introduce categories later

- The collection type already includes `optionalCategory`.
- Add categories in `src/lib/collection.ts` without changing existing pages.
- When you are ready, add optional filters to `/collection` and category chips on item cards. The current UI does not depend on categories, so no major refactor is required.

## Deployment

### Deploy to Vercel

1. Push the repo to GitHub.
2. Import the repo into Vercel.
3. Add these environment variables in Vercel:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_WHATSAPP_PHONE`
   - `NEXT_PUBLIC_INSTAGRAM_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
4. Deploy.

The app is already structured for Vercel and uses only local assets.

## Notes on image quality

- The design uses aspect-ratio wrappers, warm backgrounds, rounded corners, shadows, and lightbox zoom to present WhatsApp-compressed images as cleanly as possible.
- The site does not claim to recover lost image detail. It focuses on stronger presentation and cleaner framing.

## Optional Supabase schema notes

The current site is static-plus-client-side and does not require Supabase. If you want to add inquiry capture later, a simple starting point is:

```sql
create table inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  request text not null,
  occasion text not null,
  budget text,
  reference_image_url text,
  created_at timestamptz not null default now()
);
```

You can later add a server action or API route to store form submissions before redirecting users to WhatsApp.
