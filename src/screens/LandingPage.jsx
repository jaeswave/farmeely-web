import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Faq from "../components/Faq";
import Subscribe from "../components/Subscribe";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Features />
      <HowItWorks />
      <Faq />
      <Subscribe />
    </>
  );
};

export default LandingPage;
