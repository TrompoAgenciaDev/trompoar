import Raul from "../../assets/mkt/raul.png";

//styles and animations
import "@as/slider-mkt.css";
import {motion, useScroll, useSpring} from 'framer-motion'

const clientes = {
  raul: Raul,
};


const ToolsSlider = () => {
  
  return (
    <motion.section 
      className="mkt-container"
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
      <div className="slider-mkt">
        {[...Array(8)].map((_, index) =>
          Object.entries(clientes).map(([key, src]) => (
            <div className="card-wrapper">
              <div className="client-container">                  
                <img key={`${key}-${index}`} src={src} alt={key} />
                <span className="color trompo-title">Trompo</span>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.section>
  );
};

export default ToolsSlider;
