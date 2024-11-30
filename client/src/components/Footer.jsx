import Menu from './Menu';
import routesConfig from "../routes/AppRoutes";

import Icons from './Icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-footer-container">
          <section className="footer-section">
            <a className="logo-img" href="/">
              <Icons iconName="logo"/>
            </a>
          </section>
          <section className="footer-section">
            <div className="footer-menu">
              <h3>Marketing Digital</h3>
              <Menu menuType="marketingDigital" routes={routesConfig} classMenu="footer-menu-items"/>
            </div>
            <div className="footer-menu">
              <h3>Desarrollo y Marca</h3>
              <Menu menuType="desarrolloWebYBranding" routes={routesConfig} classMenu="footer-menu-items"/>
            </div>
            <div className="footer-menu">
              <h3>Contenidos</h3>
              <Menu menuType="marketingDeContenidos" routes={routesConfig} classMenu="footer-menu-items"/>
            </div>
          </section>
          <section className="footer-section">
            <div className="footer-tags">
              <p>#Marketing Digital Aplicado</p>
              <p>#Reportes en tiempo real</p>
              <p>#Procesos de mejora continua</p>
              <p>#Especialistas en performance</p>
            </div>
            <div className="social-icons">
              
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
