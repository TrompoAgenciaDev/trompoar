import { useState } from "react";
import usePortfolioItems from "../hooks/usePortfolioItems";

const PortfolioItems = ({ handleMouseEnter, handleMouseLeave }) => {
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
    <div className="grid-portfolio">
      {items.map((item, index) => {
        const backgroundImage = item.featured_image || "";

        return (
          <div
            key={index}
            className="portfolio-item"
            onMouseEnter={() => handleMouseEnter(backgroundImage)}
            onMouseLeave={handleMouseLeave}
          >
            <h2>{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioItems;