import Burguer from '../../public/socialIcons/burguer.svg'
import Facebook from '../../public/socialIcons/facebook.svg'
import Instagram from '../../public/socialIcons/instagram.svg'
import GooglePlus from '../../public/socialIcons/googleplus.svg'

const icons = {
  burguer: Burguer,
  facebook: Facebook,
  instagram: Instagram,
  googleplus: GooglePlus,
};

function Icon({iconName}){
  const iconSrc = icons[iconName];
  if (!iconSrc) return null;

  return (
    <>
      <img src={iconSrc} alt={iconName} />
    </>
  );
}


export default Icon;