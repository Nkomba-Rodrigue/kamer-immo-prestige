
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import PropertyTypes from '../components/PropertyTypes';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <PropertyTypes />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
