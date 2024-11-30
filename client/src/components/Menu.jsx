import React from "react";
import { Link } from "react-router-dom";

//styles y animations
import { motion } from 'framer-motion';

// Componente para renderizar menús secundarios
// Recibe un tipo de menú (menuType), las rutas (routes) y una clase CSS opcional (classMenu)
const Menu = ({ menuType, routes, classMenu = "", onClose }) => {
  const menuItems = routes[menuType];

  if (!menuItems) {
    return <p>El menú especificado no existe</p>;
  }

  return (
    <nav className="nav-menu">
      <ul className={classMenu}>
        {menuItems.map(({ path, label }, index) => (
          <li key={index}>
            <motion.div
              className="item-menu-container"
              initial={{
                y: -200,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                delay: 0.4 + 0.1 * (menuItems.length - index - 1.2),
              }}
            >
              {/* Llamamos a onClose cuando se hace clic en una opción */}
              <Link to={path} onClick={onClose}>
                {label}
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
