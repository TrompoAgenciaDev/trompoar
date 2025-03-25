import SimpleSlider from "../components/slides/SimpleSlider";
import MktSlider from "../components/slides/MktSlider";

//styles
import "@as/post-hero.css";
import EstrategiesText from "../components/EstrategiesText";

const PostHeroSection = () => {
  return (
    <section className="container post-hero-container noise-bg">

      <SimpleSlider
        slide="brands"
      />
      <MktSlider/>
      <EstrategiesText/>
    </section>
  );
}


export default PostHeroSection;