import { useState } from "react";
import usePortfolioItems from "../hooks/usePortfolioItems";

const PortfolioItems = ({ handleMouseEnter, handleMouseLeave }) => {
  // Estado para los filtros
  const [quantity, setQuantity] = useState(12);
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");

  // Usamos el hook con los filtros dinámicos
  const { items, loading, error } = usePortfolioItems({
    quantity,
    category,
    tag,
  });

  // Si está cargando, mostramos un mensaje de carga
  if (loading) return <p>Cargando...</p>;

  // Si hay un error, mostramos el mensaje de error
  if (error) return <p>{error}</p>;

  // Si todo está bien, mostramos los items
  return (
    <div className="grid-portfolio">
      {items.map((item, index) => {
        const backgroundImage = item.featured_image || ""; // Obtener la imagen del ítem

        return (
          <div
            key={index}
            className="portfolio-item"
            onMouseEnter={() => handleMouseEnter(backgroundImage)} // Actualizamos el fondo en hover
            onMouseLeave={handleMouseLeave} // Limpiamos el fondo cuando se sale del hover
          >
            <h2>{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioItems;
