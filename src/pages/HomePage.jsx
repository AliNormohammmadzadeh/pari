import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductFeatures from '../components/ProductFeatures';
import NewArrivals from '../components/NewArrivals';
import Header from '../components/Header';
import SecondaryHeader from '../components/SecondaryHeader';
import SustainabilitySection from '../components/SustainabilitySection';
import Footer from '../components/Footer';
import Carusel from '../components/Carusel';
import ReviewCarousel from '../components/ReviewCarousel';
import ImageGridWithDialog from '../components/ImageGridWithDialog';
import StickyButtonWithDialog from '../components/StickyButtonWithDialog';
import FullWidthHero from '../components/FullWidthHero';

const HomePage = () => {
  return (
    <div>
      <Header/>
      <SecondaryHeader/>
      <HeroSection />
      <ProductFeatures />
      <ImageGridWithDialog />
      <NewArrivals />
      <FullWidthHero />
      <Carusel />
      <ReviewCarousel />
      <SustainabilitySection />
      <StickyButtonWithDialog />
      <Footer />
    </div>
  );
};

export default HomePage;
