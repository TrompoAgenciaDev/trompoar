import { useState } from "react";
import PortfolioItems from "./PortfolioItems";

//styles
import "../styles/portfolio-section.css";

const PortfolioSection = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (image) => {
    setBackgroundImage(image);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container portfolio-section">
      {/* Acá se muestra la imagen de fondo de cada portfolio */}
      <div
        className={`bg-section ${isHovered ? "fade-in" : "fade-out"}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="portfolio-header">
        <h2 className="portfolio-title">Portfolio</h2>
        <p className="portfolio-excerpt">
          <br />
          SOMO UN EQUIPO INTERDISCIPLINARIO CON MAS DE 10 AÑOS
          <br />
          DE EXPERIENCIA, BRINDAMOS RESPUESTAS A TRAVES DE LAS
          <br />
          MEJORES HERRAMIENTAS PARA GESTIONAR LA PRESENCIA DE
          <br />
          TU MARCA EN EL MUNDO ONLINE. NOS ENFOCAMOS EN EN-TENDER
          <br />
          LOS OBJETOS DE TUS NEGOCIOS Y CREAMOS ESTRATEGIAS
          <br />
          PERSONALIZADAS QUE CONECTEN MARCAS CON AUDIENCIAS
          <br />
          ESTRATEGICAS
        </p>
      </div>

      {/* Portfolio con todos los proyectos. */}
      <PortfolioItems
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default PortfolioSection;
