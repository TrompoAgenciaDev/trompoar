import { useState } from "react";

const useHoverBackground = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [opacity, setOpacity] = useState(1);

  const handleMouseEnter = (image) => {
    setOpacity(0); // Ocultar la imagen actual
    setTimeout(() => {
      setBackgroundImage(image);
      setOpacity(1); // Mostrar la nueva imagen
    },150); // Tiempo de espera para la transición
  };

  const handleMouseLeave = () => {
    setOpacity(1); // Restablecer opacidad al salir
  };

  return {
    backgroundImage,
    opacity,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useHoverBackground;