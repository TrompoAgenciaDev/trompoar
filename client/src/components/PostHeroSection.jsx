import ToolsSlider from "./slides/ToolsSlider";
import MktSlider from "./slides/MktSlider";

//styles
import "@as/post-hero.css";

const PostHeroSection = () => {
  return (
    <section className="container post-hero-container">

      <ToolsSlider/>
      <MktSlider/>


    </section>
  );
}


export default PostHeroSection;