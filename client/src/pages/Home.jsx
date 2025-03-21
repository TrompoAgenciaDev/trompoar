import Hero from "../components/Hero";
import PostHeroSection from "../components/PostHeroSection.jsx";
import StackedScroll from "../components/StackedScroll.jsx";
import PortfolioCarruselSection from "../components/PortfolioCarruselSection.jsx";
import News from "../components/News.jsx";
import ContactSection from "../components/ContactSection.jsx";
import PreFooter from "../components/PreFooter.jsx";

const Home = () => {
  return (
    <main>
      <Hero/>
      <PostHeroSection/>
      <StackedScroll/>
      <PortfolioCarruselSection/>
      <News/>
      <PreFooter/>
      <ContactSection/>
    </main>
  );
};

export default Home;