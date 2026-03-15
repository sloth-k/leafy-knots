import { LoadingScreen } from "@/components/common/LoadingScreen";
import { ContactBand } from "@/components/home/ContactBand";
import { CustomOrderCTA } from "@/components/home/CustomOrderCTA";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
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
      <CustomOrderCTA />
      <ContactBand />
    </>
  );
}
