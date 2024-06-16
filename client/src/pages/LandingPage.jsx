import { Footer } from "../components";
import { LandingPageLayout } from "../components/layouts";
import {
  BlogIntro,
  CTA,
  FAQ,
  HeroSection,
  NewArrivals,
  ProductCategory,
} from "../features";

const LandingPage = () => {
  return (
    <LandingPageLayout>
      <HeroSection />
      <ProductCategory />
      <NewArrivals />
      <BlogIntro />
      <FAQ />
      <CTA />
    </LandingPageLayout>
  );
};

export default LandingPage;
