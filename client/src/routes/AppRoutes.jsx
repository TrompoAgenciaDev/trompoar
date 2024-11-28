import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

// Parent Pages
import MarketingDigital from "../pages/MarketingDigital";
import DesarrolloWebYBranding from "../pages/DesarrolloWebYBranding";
import MarketingDeContenidos from "../pages/MarketingDeContenidos";

// Children Pages
import AnaliticaWeb from "../pages/AnaliticaWeb";
import GoogleAds from "../pages/GoogleAds";
import MetaAds from "../pages/MetaAds";

import DesarrolloWeb from "../pages/DesarrolloWeb";
import Branding from "../pages/Branding";

import InboundMarketing from "../pages/InboundMarketing";
import SocialMedia from "../pages/SocialMedia";

// Exporting routes for reuse
const routesConfig = {
  main: [
    { path: "/", label: "Home", Component: Home },
    { path: "/about", label: "About", Component: About },
    { path: "/contact", label: "Contact", Component: Contact },
    { path: "/marketing-digital", label: "Marketing Digital", Component: MarketingDigital },
    { path: "/desarrollo-web-y-branding", label: "Desarrollo Web y Branding", Component: DesarrolloWebYBranding },
    { path: "/marketing-de-contenidos", label: "Marketing de Contenidos", Component: MarketingDeContenidos },
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
};

// Main routing component
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {Object.values(routesConfig).flat().map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
};

export { routesConfig };
export default AppRoutes;