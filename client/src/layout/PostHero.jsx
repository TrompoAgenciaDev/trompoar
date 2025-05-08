import SimpleSlider from "../components/slides/SimpleSlider";
import MktSlider from "../components/slides/MktSlider";
import MarqueeText from "../components/slides/MarqueeText.jsx";

//styles
import "@as/post-hero.css";
import EstrategiesText from "../components/EstrategiesText";

const PostHeroSection = () => {
  return (
    <section className="container post-hero-container">      
      <MarqueeText />
      <MarqueeText reverse />      
    </section>
  );
}


export default PostHeroSection;