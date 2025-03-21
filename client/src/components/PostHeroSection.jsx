import SimpleSlider from "./slides/SimpleSlider";
import MktSlider from "./slides/MktSlider";

//styles
import "@as/post-hero.css";
import EstrategiesText from "./EstrategiesText";

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