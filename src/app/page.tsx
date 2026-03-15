import { LoadingScreen } from "@/components/common/LoadingScreen";
import { CustomOrderCTA } from "@/components/home/CustomOrderCTA";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { GallerySection } from "@/components/home/GallerySection";
import { HeroSection } from "@/components/home/HeroSection";
import { StorySection } from "@/components/home/StorySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <HeroSection />
      <FeaturedCollection />
      <StorySection />
      <WhyChooseUs />
      <TestimonialsSection />
      <GallerySection />
      <CustomOrderCTA />
    </>
  );
}
