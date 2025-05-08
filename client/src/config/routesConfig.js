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
    { path: "/about", label: "About", Component: About },
    { path: "/marketing-digital", label: "Marketing Digital", Component: MarketingDigital },
    { path: "/desarrollo-web-y-branding", label: "Desarrollo Web y Branding", Component: DesarrolloWebYBranding },
    { path: "/marketing-de-contenidos", label: "Marketing de Contenidos", Component: MarketingDeContenidos },
    { path: "/news", label: "News", Component: News},
    { path: "/contact", label: "Contact", Component: Contact },
  ],
  movement: [
    { path: "/movement/creatividad", label: "Creatividad en movimiento", Component: Creatividad },
    { path: "/movement/desarrollo", label: "Desarrollo en movimiento", Component: Desarrollo },
    { path: "/movement/estrategias", label: "Estrategias en movimiento", Component: Estrategias },
    { path: "/movement/interaccion", label: "Interacción en movimiento", Component: Interaccion },
  ],
  marketingDigital: [
    { path: "/marketing-digital/analitica-web", label: "Analítica Web", Component: AnaliticaWeb },
    { path: "/marketing-digital/google-ads", label: "Google Ads", Component: GoogleAds },
    { path: "/marketing-digital/meta-ads", label: "Meta Ads", Component: MetaAds },
  ],
  desarrolloWebYBranding: [
    { path: "/desarrollo-web-y-branding/desarrollo-web", label: "Desarrollo Web", Component: DesarrolloWeb },
    { path: "/desarrollo-web-y-branding/branding", label: "Branding", Component: Branding },
  ],
  marketingDeContenidos: [
    { path: "/marketing-de-contenidos/inbound-marketing", label: "Inbound Marketing", Component: InboundMarketing },
    { path: "/marketing-de-contenidos/social-media", label: "Social Media", Component: SocialMedia },
  ],
  posts:[
    { path: "/post/:slug", Component: SinglePost }
  ],
  outsourcing: [
    { path: "/marketing-digital", label: "Marketing Digital", Component: MarketingDigital },
    { path: "/desarrollo-web-y-branding", label: "Desarrollo Web y Branding", Component: DesarrolloWebYBranding },
    { path: "/marketing-de-contenidos", label: "Marketing de Contenidos", Component: MarketingDeContenidos },    
  ]
};

export default routesConfig;
