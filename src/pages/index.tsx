/* eslint-disable @next/next/no-img-element */
import { MainLayout } from '@/layouts';
import { type ReactElement } from 'react';

import {
  FaqSection,
  FeaturesSection,
  HeroSection,
  PricingSection,
  TestimonialSection,
} from '@/features/home-page';

const HomePage = () => {
  return (
    <>
      {/* Hero section */}
      <HeroSection />
      {/* Features section */}
      <FeaturesSection />
      {/* Testimonial section */}
      <TestimonialSection />
      {/* Pricing section */}
      <PricingSection />
      {/* FAQ section */}
      <FaqSection />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  const title = 'Se connecter';
  const description = 'Connectez-vous sur Finexs Tombola';
  return (
    <MainLayout title={title} description={description}>
      {page}
    </MainLayout>
  );
};

export default HomePage;
