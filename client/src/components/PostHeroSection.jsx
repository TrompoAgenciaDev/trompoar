import ToolsSlider from "./slides/ToolsSlider";
import MktSlider from "./slides/MktSlider";

//styles
import "@as/post-hero.css";
import EstrategiesText from "./EstrategiesText";

const PostHeroSection = () => {
  return (
    <section className="container post-hero-container noise-bg">

      <ToolsSlider/>
      <MktSlider/>
      <EstrategiesText/>

    </section>
  );
}


export default PostHeroSection;