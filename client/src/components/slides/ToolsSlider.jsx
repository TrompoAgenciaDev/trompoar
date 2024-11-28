import Facebook from '../../../public/toolsImg/facebook-ads.png';
import Google from '../../../public/toolsImg/google-ads.png';
import Ganalytics from '../../../public/toolsImg/google-a.png';
import GdataStudio from '../../../public/toolsImg/google-data-studio.png';
import GsearchConsole from '../../../public/toolsImg/google-search-console.png';
import Instagram from '../../../public/toolsImg/instagram-ads.png';
import Linkedin from '../../../public/toolsImg/linkedin-ads.png';
import Semrush from '../../../public/toolsImg/semrush.png';
import Supermetrics from '../../../public/toolsImg/supermetrics.png';
import Woocommerce from '../../../public/toolsImg/woocommerce.png';
import Wordpress from '../../../public/toolsImg/wordpress.png';
import Zapier from '../../../public/toolsImg/zapier.png';

//styles
import '../../styles/slider-tool.css';

const marcas = {
  facebook: Facebook,
  google: Google,
  ganalytics: Ganalytics,
  gdatastudio: GdataStudio,
  gsearchconsole: GsearchConsole,
  instagram: Instagram,
  linkedin: Linkedin,
  semrush: Semrush,
  supermetrics: Supermetrics,
  woocommerce: Woocommerce,
  wordpress: Wordpress,
  zapier: Zapier,
};

const ToolsSlider = () => {
  return (
    <div className="slider-tool">
      <div className="slider-inner">
        {Object.entries(marcas).map(([key, src]) => (
          <img key={key} src={src} alt={key} />
        ))}
      </div>
    </div>
  );
};

export default ToolsSlider;
