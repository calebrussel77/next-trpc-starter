/* eslint-disable @next/next/no-img-element */
import { MainLayout } from '@/layouts';
import { type ReactElement } from 'react';

import {
  FeaturesSection,
  HeroSection,
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

      {/* FAQ section */}
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
