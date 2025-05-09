import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import MarketingDigital from "../pages/MarketingDigital";
import DesarrolloWebYBranding from "../pages/DesarrolloWebYBranding";
import MarketingDeContenidos from "../pages/MarketingDeContenidos";

import AnaliticaWeb from "../pages/AnaliticaWeb";
import GoogleAds from "../pages/GoogleAds";
import MetaAds from "../pages/MetaAds";

import DesarrolloWeb from "../pages/DesarrolloWeb";
import Branding from "../pages/Branding";

import InboundMarketing from "../pages/InboundMarketing";
import SocialMedia from "../pages/SocialMedia";

import News from '../pages/News.jsx';

//Movimiento
import Creatividad from "../pages/movement/Creatividad";
import Desarrollo from "../pages/movement/Desarrollo";
import Estrategias from "../pages/movement/Estrategias";
import Interaccion from "../pages/movement/Interaccion";

//templates
import SinglePost from '../templates/singlePost';
import SinglePortfolio from '../templates/singlePortfolio';



const routesConfig = {
  main: [
    { path: "/", label: "Home", Component: Home },
    // { path: "#", label: "Nosotros", Component: About },
    { path: "/movement/desarrollo", label: "Desarrollo en movimiento", Component: Desarrollo },
    { path: "#", label: "Creatividad en movimiento", Component: Creatividad },
    { path: "#", label: "Estrategias en movimiento", Component: Estrategias },
    { path: "#", label: "Interacción en movimiento", Component: Interaccion },
    { path: "#", label: "Noticias", Component: News},
    { path: "#", label: "Contacto", Component: Contact },
  ],
  movement: [
    { path: "/movement/desarrollo", label: "Desarrollo en movimiento", Component: Desarrollo },
    { path: "#", label: "Creatividad en movimiento", Component: Creatividad },
    { path: "#", label: "Estrategias en movimiento", Component: Estrategias },
    { path: "#", label: "Interacción en movimiento", Component: Interaccion },
  ],
  estrategias: [
    { path: "#", label: "Outsourcing", Component: AnaliticaWeb },
    { path: "#", label: "Google Ads", Component: GoogleAds },
    { path: "#", label: "Meta Ads", Component: MetaAds },
    { path: "#", label: "Analitica Digital", Component: MetaAds },
  ],
  creatividad: [
    { path: "#", label: "Diseño", Component: Desarrollo },
    { path: "#", label: "Multimedia", Component: Desarrollo },
  ],
  interaccion: [
    { path: "#", label: "Social Media", Component: Desarrollo },
    { path: "#", label: "Inbound Marketing", Component: Desarrollo },
  ],
  desarrollo: [
    { path: "#", label: "Wordpress", Component: Desarrollo },
    { path: "#", label: "Personalizado", Component: Desarrollo }, 
  ],
  posts:[
    { path: "/post/:slug", Component: SinglePost }
  ],
};

export default routesConfig;
