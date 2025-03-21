import { useEffect, useState } from "react";
import { useHover } from "../context/HoverContext";
import Icons from "./Icons"; 

import '../assets/styles/custom-cursor.css';
import { motion } from "framer-motion";



const CustomCursor = ({ icon }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY + window.scrollY,
        });
      });
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  //handle hover
  const { hoverComponent } = useHover();


  // Hacer el hover en el portfolio, con fondo blur para el trompo

  return (
    <motion.div
      style={{
        position: "absolute",
        pointerEvents: "none",
        transform: "translate(20%, 20%)",
        zIndex: 99999,
      }}
      animate={{
        top: mousePosition.y,
        left: mousePosition.x,
      }}
      transition={{
        type: "tween",
        stiffness: 200,
        damping: 15,
      }}
      className=
                { hoverComponent ? 
                  'custom-cursor blur-bg' 
                  : 
                  'custom-cursor'  
                } 
    >
      { hoverComponent ? 
        <span className="custom-cursor-text">
          Ver
          <Icons iconName='arrowTr'/>
        </span> 
        : 
        <img src={icon} alt="custom-cursor" /> 
      } 
    </motion.div>
  );
};

export default CustomCursor;