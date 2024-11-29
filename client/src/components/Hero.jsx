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
      <p> 
          <motion.div
            initial={{
              y: 200,
            }}
            animate={{
              y:0
            }}
            transition={{
              delay: .6,
              type: 'spring',
              damping: 28,
              stiffness: 350,
            }}
          >
            <span>SOMOS</span> <span><b>TROMPO</b></span> <span>UNA</span>
          </motion.div>
      </p>
      <p> 
          <motion.div
            initial={{
              y: 200,
            }}
            animate={{
              y:0
            }}
            transition={{
              delay: .8,
              type: 'spring',
              damping: 28,
              stiffness: 350,
            }}
          >
            <span>AGENCIA</span> <span>DE</span><span>MKT</span><span>DGTL</span>
          </motion.div>
      </p>
      <p> 
          <motion.div
            initial={{
              y: 200,
            }}
            animate={{
              y:0
            }}
            transition={{
              delay: 1,
              type: 'spring',
              damping: 28,
              stiffness: 350,
            }}
          >
            <span>SOCIAL</span><span>MEDIA</span><span>&</span>
          </motion.div>
      </p>
      <p> 
          <motion.div
            initial={{
              y: 200,
            }}
            animate={{
              y:0
            }}
            transition={{
              delay: 1.2,
              type: 'spring',
              damping: 28,
              stiffness: 350,
            }}
          >
            <span>AUDIOVISUAL</span>
          </motion.div>
      </p>
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