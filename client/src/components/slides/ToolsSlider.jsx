import Meta from "/assets/toolsImg/meta-ads.webp";
import Google from "/assets/toolsImg/google-ads.webp";
import Meta1 from "/assets/toolsImg/meta-ads.webp";
import Google1 from "/assets/toolsImg/google-ads.webp";
import Meta2 from "/assets/toolsImg/meta-ads.webp";
import Google2 from "/assets/toolsImg/google-ads.webp";
import Meta3 from "/assets/toolsImg/meta-ads.webp";
import Google3 from "/assets/toolsImg/google-ads.webp";

//styles and animations
import "@as/slider-tool.css";
import {motion, useScroll, useSpring} from 'framer-motion'

const marcas = {
  meta: Meta,
  google: Google,
  meta1: Meta1,
  google1: Google1,
  meta2: Meta2,
  google2: Google2,
  meta3: Meta3,
  google3: Google3,
};


const ToolsSlider = () => {
  
  return (
    <motion.section 
      className="slider-container"
      initial={{
        opacity: 0,
        scale: .5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: .5,
        type:'tween',
      }}
    >
        <div className="slider-tool">
          <div className="slider-inner">
            {[...Array(3)].map((_, index) =>
              Object.entries(marcas).map(([key, src]) => (
                <img key={`${key}-${index}`} src={src} alt={key} />
              ))
            )}
          </div>
        </div>
    </motion.section>
  );
};

export default ToolsSlider;
