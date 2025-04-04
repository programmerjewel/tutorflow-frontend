import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
  );
};

export default Home;