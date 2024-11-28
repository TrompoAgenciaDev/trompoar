import React, { useState } from 'react';
import PortfolioItems from './PortfolioItems';
import '../styles/portfolio-section.css';

const PortfolioSection = () => {
  const [backgroundImage, setBackgroundImage] = useState(""); // Estado para la imagen de fondo

  return(
    <div className="container portfolio-section">
      <div 
        className={`bg-section ${backgroundImage ? '' : 'fade-out'}`} 
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: backgroundImage ? 1 : 0 }}
      >

      </div>
      <div className="portfolio-header">
        <h2 className="portfolio-title">
          Portfolio
        </h2>
        <p className="portfolio-excerpt">
          SOMO UN EQUIPO INTERDISCIPLINARIO CON MAS DE 10 AÑOS
          DE EXPERIENCIA, BRINDAMOS RESPUESTAS A TRAVES DE LAS
          MEJORES HERRAMIENTAS PARA GESTIONAR LA PRESENCIA DE
          TU MARCA EN EL MUNDO ONLINE. NOS ENFOCAMOS EN EN-
          TENDER LOS OBJETOS DE TUS NEGOCIOS Y CREAMOS ESTRA-
          TEGIAS PERSONALIZADAS QUE CONECTEN MARCAS CON AU-
          DIENCIAS ESTRATEGICAS
        </p>
      </div>
      {/* Pasamos la función setBackgroundImage como prop a PortfolioItems */}
      <PortfolioItems setBackgroundImage={setBackgroundImage} />
    </div>
  );
}

export default PortfolioSection;