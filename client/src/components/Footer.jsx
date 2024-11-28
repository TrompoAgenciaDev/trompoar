const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-footer-container">
          <section className="footer-section">
            <a className="logo-img" href="/">
              <img src="./public/logo.png" alt="" />
            </a>
          </section>
          <section className="footer-section">
            <div className="footer-menu">
              <h3>Marketing Digital</h3>
              {/* <MenuDigital/> */}
            </div>
            <div className="footer-menu">
              <h3>Desarrollo y Marca</h3>
              {/* <MenuDesarrollo/> */}
            </div>
            <div className="footer-menu">
              <h3>Contenidos</h3>
              {/* <MenuContenidos/> */}
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
