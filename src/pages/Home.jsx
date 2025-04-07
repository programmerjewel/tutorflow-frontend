
import HeroSection from '../components/HeroSection/HeroSection';
import StatSection from '../components/StatSection/StatSection';
import LanguageCategory from '../components/LanguageCatergory/LanguageCategory';
import FAQSection from '../components/FAQSection/FAQSection';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <StatSection/>
      <LanguageCategory/>
      <FAQSection/>
      <TestimonialSection/>
    </div>
  );
};

export default Home;