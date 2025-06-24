import Hero from '../../layout/Hero';
import '../../assets/styles/desarrollo.css';
import Portfolio from '../../layout/Portfolio.jsx';
<<<<<<< HEAD
import RedButton from '../../components/buttons/redBtton.jsx';
=======
import Contact from "../../layout/Contact.jsx";
>>>>>>> d779322c9c1bb5a057eec493ba86b064e92e9df2

const Desarrollo = () => {

  return (
    <>
      <Hero
        location='web'
      />
      <section className="web">
        <div className="web-container">
          <div className="img-container">
            <img src="/assets/webImg/web-bg.png" alt="Desarrollo Web" />
          </div>
          <div className="title-container">
            <h2>
              servicios <span className="text-y">web</span>
            </h2>
          </div>
        </div>
      </section>
      <section className="servicios-web">
        <div className="landing-container servicios-grid-container">
          <div className="img-container">
            <img src="/assets/webImg/cartas.png" alt="Landing Page" />
          </div>
          <div className="text-container">
            <h3 className="servicios-title">One Page y Landing Page</h3>
            <h4 className="servicios-subtitle">Soluciones Web de Impacto</h4>

            <p>Tanto las <span className="bold-text">One Page</span> como las <span className="bold-text">Landing Pages</span> ofrecen soluciones web diseñadas para maximizar la experiencia del usuario y potenciar tus objetivos de negocio.</p>
            <RedButton />
          </div>
        </div>
        <div className="institucional-container servicios-grid-container">
          <div className="img-container">
          </div>
          <div className="text-container">
            <h3 className="servicios-title">Web Institucional</h3>

            <p>Potenciamos tu negocio con webs institucionales de alto impacto, nuestro equipo de desarrolladores expertos en <span className="bold-text">WordPress</span> realiza integraciones con diferentes aplicaciones, administra y crea plugins, y personaliza templates para adaptarse a las necesidades de tu negocio.</p>
            <RedButton />
          </div>
        </div>
        <div className="landing-container ecommerce-container servicios-grid-container">
          <div className="text-container">
            <h3 className="servicios-title">Tienda Online</h3>

            <p>Estas páginas están diseñadas para ofrecer una experiencia de compra en línea fácil y atractiva, permitiendo que los visitantes naveguen por los productos, realicen compras, realicen pagos en línea y reciban los productos o servicios solicitados</p>
            <RedButton />
          </div>
          <div className="img-container">
            <img src="/assets/webImg/globo.png" alt="Landing Page" />
          </div>
        </div>
        <div className="catalogo-container servicios-grid-container">
          <div className="img-container">
            <img src="/assets/webImg/bg-3.png" alt="Landing Page" />
          </div>
          <div className="text-container">
            <h3 className="servicios-title">Web con Catálogo</h3>

<<<<<<< HEAD
            <p>Tanto las <span className="bold-text">One Page</span> como las <span className="bold-text">Landing Pages</span> ofrecen soluciones web diseñadas para maximizar la experiencia del usuario y potenciar tus objetivos de negocio.</p>
            <RedButton />
=======
            <p>Diseñamos entornos digitales que ofrecen una exploración fácil y atractiva, permitiendo a tus visitantes navegar por tus productos o servicios de manera intuitiva y descubrir lo que tu negocio tiene para ofrecer.</p>
>>>>>>> d779322c9c1bb5a057eec493ba86b064e92e9df2
          </div>
        </div>

        <Portfolio/>
      </section>      
      <Contact/>
    </>
  );
}

export default Desarrollo;