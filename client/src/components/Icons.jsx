import Facebook from '/assets/icons/facebook.svg';
import Instagram from '/assets/icons/instagram.svg';
import GooglePlus from '/assets/icons/googleplus.svg';
import Close from '/assets/icons/close.svg';
import Logo from '@a/logo.png';

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  googleplus: GooglePlus,
  close: Close,
  logo: Logo,
};

function Icons({ iconName }) {
  if (iconName === 'burguer') {
    return (
      <div className="menu-icon-container">
        <svg height="18px" viewBox="0 9 24 18" width="24px" xmlns="http://www.w3.org/2000/svg">
          <path fill='currentColor' d="m23.25 16h-22.5c-.414 0-.75.336-.75.75s.336.75.75.75h22.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"/>
          <path fill='currentColor' d="m23.25 13h-22.5c-.414 0-.75.336-.75.75s.336.75.75.75h22.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"/>
          <path fill='currentColor' d="m23.25 19h-22.5c-.414 0-.75.336-.75.75s.336.75.75.75h22.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"/>
          <path fill='currentColor' d="m23.25 22h-22.5c-.414 0-.75.336-.75.75s.336.75.75.75h22.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"/>
        </svg>
      </div>
    );
  }

  const iconSrc = icons[iconName];
  if (!iconSrc) return null;

  return <img src={iconSrc} alt={iconName} />;
}

export default Icons;