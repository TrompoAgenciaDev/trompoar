import Burguer from '@ai/burguer.svg';
import Facebook from '@ai/facebook.svg';
import Instagram from '@ai/instagram.svg';
import GooglePlus from '@ai/googleplus.svg';
import Close from '@ai/close.svg';
import Logo from '@a/logo.png';

const icons = {
  burguer: Burguer,
  facebook: Facebook,
  instagram: Instagram,
  googleplus: GooglePlus,
  close: Close,
  logo: Logo,
};

function Icons({iconName}){
  const iconSrc = icons[iconName];
  if (!iconSrc) return null;

  return (
    <>
      <img src={iconSrc} alt={iconName} />
    </>
  );
}


export default Icons;