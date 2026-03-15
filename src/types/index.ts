export type CollectionItem = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  featured: boolean;
  primaryImage: string;
  images: string[];
  tags: string[];
  optionalCategory?: string;
  inquiryLabel: string;
  priceLabel?: string;
  materials?: string[];
  care?: string[];
  alt: string;
};

export type NavigationLink = {
  href: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export type WhyChooseUsPoint = {
  title: string;
  description: string;
};
