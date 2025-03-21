import "@as/slider-tool.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// brands
import Meta from "/assets/toolsImg/meta-ads.webp";
import Google from "/assets/toolsImg/google-ads.webp";
import Meta1 from "/assets/toolsImg/meta-ads.webp";
import Google1 from "/assets/toolsImg/google-ads.webp";
import Meta2 from "/assets/toolsImg/meta-ads.webp";
import Google2 from "/assets/toolsImg/google-ads.webp";
import Meta3 from "/assets/toolsImg/meta-ads.webp";
import Google3 from "/assets/toolsImg/google-ads.webp";

// customers
const brands = {
  meta: Meta,
  google: Google,
  meta1: Meta1,
  google1: Google1,
  meta2: Meta2,
  google2: Google2,
  meta3: Meta3,
  google3: Google3,
};

const customers = {
  Cannon: "/assets/customerImg/cannon.webp",
  Cerroplast: "/assets/customerImg/cerroplast.webp",
  Craverolanis: "/assets/customerImg/craverolanis.webp",
  Denso: "/assets/customerImg/denso.webp",
  Femesa: "/assets/customerImg/femesa.webp",
  GrupoAntun: "/assets/customerImg/grupo-antun.webp",
  Kindom: "/assets/customerImg/kindom.webp",
  Matriceria: "/assets/customerImg/matriceria.webp",
  Menta: "/assets/customerImg/menta.webp",
  Mercantil: "/assets/customerImg/mercantil.webp",
  PagoFacil: "/assets/customerImg/pago-facil.webp",
  ParqueAventura: "/assets/customerImg/parque-aventura.webp",
  Piccadely: "/assets/customerImg/piccadely.webp",
  Ranko: "/assets/customerImg/ranko.webp",
  Sony: "/assets/customerImg/sony.webp",
  Volvo: "/assets/customerImg/volvo.webp",
  VozDigital: "/assets/customerImg/vozdigital.webp",
  WesternUnion: "/assets/customerImg/western-union.webp",
};

const dataCollection = {
  brands: brands,
  customers: customers,
};

const SimpleSlider = ({ slide = "brands" }) => {
  const data = dataCollection[slide];
  const [generatedNumbers, setGeneratedNumbers] = useState(new Set());
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const newKeys = Object.entries(data).map(([key, src]) => {
      let number;
      do {
        number = Math.floor(100000 + Math.random() * 900000); // Genera un número de 6 dígitos
      } while (generatedNumbers.has(number));

      setGeneratedNumbers((prev) => new Set(prev).add(number)); // Agrega el número al conjunto de números generados
      return `${key}-${number}`;
    });
    setKeys(newKeys);
  }, [data]); // Dependemos de "data", asegurándonos de que solo se ejecute cuando "data" cambie

  return (
    <motion.section
      className="slider-container"
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
      }}
    >
      <div className="slider-tool">
        <div className="slider-inner">
          {[...Array(3)].map((_, index) =>
            Object.entries(data).map(([key, src], idx) => (
              <img key={keys[idx]} src={src} alt={key} />
            ))
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default SimpleSlider;
