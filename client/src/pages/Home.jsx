import Hero from "../components/Hero";

import PostHeroSection from "../components/PostHeroSection.jsx";
import VideoSection from "../components/VideoSection";
import PortfolioSection from "../components/PortfolioSection";
import PreFooter from "../components/PreFooter";
import PostsList from "../components/posts/PostList";
import StackedScroll from "../components/StackedScroll.jsx";

const Home = () => {
  return (
    <main>
      <Hero />
      <PostHeroSection />
      <StackedScroll/>
      <VideoSection />
      <PortfolioSection />
      <PreFooter />
      <PostsList />
    </main>
  );
};

export default Home;
