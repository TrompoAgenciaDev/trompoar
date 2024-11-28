import '../styles/hero.css';
import Icon from './Icon';
import '../styles/hero.css';
import '../styles/social-icons.css';

const Hero = () => {
 return (
  <div className="container hero-container">
    <div className="hero-text">
      <p>SOMOS <span>TROMPO</span> UNA
      AGENCIA DE MKT DGTL
      SOCIAL MEDIA &
      AUDIOVISUAL</p>
    </div>
    <div className="social-icons">
      <Icon iconName='facebook'/>
      <Icon iconName='instagram'/>
      <Icon iconName='googleplus'/>
    </div>
  </div>
 );
}


export default Hero;