import {useState} from "react";
import { useHover } from "../context/HoverContext";
import usePortfolioItems from "../hooks/usePortfolioItems";
import PortfolioCarruselItems from "./carrusels/PortfolioCarruselItems";


//styles
import '../assets/styles/PortfolioCarruselSection.css';


function PortfolioCarrusel () {
  //custom cursor change
  const { handleHover, handleLeave } = useHover();


  const [quantity, setQuantity] = useState(12);
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");

  const { items, loading, error } = usePortfolioItems({
    quantity,
    category,
    tag,
  });

  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;


 return (
  <div className="portfolio-section noise-bg">
    <div className="title-section">
      <h2 className="title">
        Proyectos que <span>Conectan</span>, <br/>
        Ideas que <span>Impactan</span>
      </h2>
    </div>

    <div className="portfolio-carrusel">
      {[...Array(3)].flatMap((_, repeatIndex) =>
        items.map((item, index) => (
          <PortfolioCarruselItems
            key={`${item.id}-${repeatIndex}-${index}`}
            id={item.id}
            title={item.title}
            backgroundImage={item.featured_image}
            enlacePortfolio={item.enlacePortfolio}
            onMouseEnter={() => handleHover(item.id)}
            onMouseLeave={handleLeave}
          />
        ))
      )}
    </div>
  </div>
 )
}

export default PortfolioCarrusel;