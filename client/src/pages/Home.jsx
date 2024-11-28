import Hero from '../components/Hero';
import ScrollingContainer from '../components/motions/ScrollingContainer';
import ToolsSlider from '../components/slides/ToolsSlider';
import VideoSection from '../components/VideoSection';
import PortfolioSection from '../components/PortfolioSection';

const Home = () => {
  return (
    <main>
        <Hero />
        <section className="slider-container">
          <ToolsSlider/>
        </section>
        <VideoSection/>
        <PortfolioSection/>
    </main>
  );
};

export default Home;
