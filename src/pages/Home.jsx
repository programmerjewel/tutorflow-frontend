import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import StatSection from '../components/StatSection/StatSection';
import LanguageCategory from '../components/LanguageCatergory/LanguageCategory';
import FAQSection from '../components/FAQSection/FAQSection';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <StatSection/>
      <LanguageCategory/>
      <FAQSection/>
      <TestimonialSection/>
      <Footer/>
    </div>
  );
};

export default Home;