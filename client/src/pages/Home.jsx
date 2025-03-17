import Hero from "../components/Hero";

import PostHeroSection from "../components/PostHeroSection.jsx";
import PortfolioCarruselSection from "../components/PortfolioCarruselSection.jsx";
import News from "../components/News.jsx";
import StackedScroll from "../components/StackedScroll.jsx";

const Home = () => {
  return (
    <main>
      <Hero/>
      <PostHeroSection/>
      <StackedScroll/>
      <PortfolioCarruselSection/>
      <News/>
    </main>
  );
};

export default Home;