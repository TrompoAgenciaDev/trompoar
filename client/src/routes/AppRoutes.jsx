import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Main Pages
import Home from "../pages/Home";
import About from '../pages/About';
import Contact from '../pages/Contact';

//Parent Page
import MarketingDigital from '../pages/MarketingDigital';
//children
import AnaliticaWeb from '../pages/AnaliticaWeb';
import GoogleAds from '../pages/GoogleAds';
import MetaAds from '../pages/MetaAds';
ParentPage
import DesarrolloWebYBranding from '../pages/DesarrolloWebYBranding'
//children
import DesarrolloWeb from '../pages/DesarrolloWeb';
import Branding from '../pages/Branding';
//Parent Page
import MarketingDeContenidos from '../pages/MarketingDeContenidos';
//children
import InboundMarketing from '../pages/InboundMarketing';
import SocialMedia from '../pages/SocialMedia';

//Search Results (to the furute)
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/marketing-digital" element={<MarketingDigital/>}/>
        <Route path="/desarrollo-web-y-branding" element={<DesarrolloWebYBranding/>}/>
        <Route path="/marketing-de-contenidos" element={<MarketingDeContenidos/>}/>

        {/* Ruta para páginas secundarias */}
        <Route path="/marketing-digital/analitica-web" element={<AnaliticaWeb/>}/>
        <Route path="/marketing-digital/google-ads" element={<GoogleAds/>}/>
        <Route path="/marketing-digital/meta-ads" element={<MetaAds/>}/>

        <Route path="/desarrollo-web-y-branding/desarrollo-web" element={<DesarrolloWeb/>}/>
        <Route path="/desarrollo-web-y-branding/branding" element={<Branding/>}/>

        <Route path="/marketing-de-contenidos/inbound-marketing" element={<InboundMarketing/>}/>
        <Route path="/marketing-de-contenidos/social-media" element={<SocialMedia/>}/>




        {/* Ruta para página de busqueda */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;