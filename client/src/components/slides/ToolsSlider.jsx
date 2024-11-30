import Facebook from "@at/facebook-ads.png";
import Google from "@at/google-ads.png";
import Ganalytics from "@at/google-a.png";
import GdataStudio from "@at/google-data-studio.png";
import GsearchConsole from "@at/google-search-console.png";
import Instagram from "@at/instagram-ads.png";
import Linkedin from "@at/linkedin-ads.png";
import Semrush from "@at/semrush.png";
import Supermetrics from "@at/supermetrics.png";
import Woocommerce from "@at/woocommerce.png";
import Wordpress from "@at/wordpress.png";
import Zapier from "@at/zapier.png";

//styles
import "@as/slider-tool.css";

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
        {[...Array(3)].map((_, index) =>
          Object.entries(marcas).map(([key, src]) => (
            <img key={`${key}-${index}`} src={src} alt={key} />
          ))
        )}
      </div>
    </div>
  );
};

export default ToolsSlider;
