import '../styles/hero.css';
import Icon from './Icon';
import '../styles/hero.css';
import '../styles/social-icons.css';
import {motion} from 'framer-motion';

const Hero = () => {
 return (
  <motion.div className="container hero-container"

    initial={{
      opacity: .5,
      y: 0
    }}
    whileInView={{
      scale: 1,
      opacity: 1,
    }}

  >
    <div className="hero-text">
      <motion.p       
       initial={{
        opacity: 0,
        y: 400      
       }}
       animate={{
        opacity: 1,
        y: 0
       }}
      >
          SOMOS <span>TROMPO</span> UNA
          AGENCIA DE MKT DGTL
          SOCIAL MEDIA &
          AUDIOVISUAL
      </motion.p>
    </div>
    <div className="social-icons">
      <Icon iconName='facebook'/>
      <Icon iconName='instagram'/>
      <Icon iconName='googleplus'/>
    </div>
  </motion.div>
 );
}


export default Hero;