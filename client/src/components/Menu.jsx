import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Componente Menu
const Menu = ({ 
  menuType = "",
  routes = {},
  classMenu = "", 
  onClose = () => {}
}) => {
  const menuItems = routes[menuType];

  // Si el menú no existe o `menuType` no es válido
  if (!menuItems || menuItems.length === 0) {
    return <p>No se encontró el menú</p>;
  }

  return (
    <nav className="nav-menu">
      <ul className={classMenu}>
        {menuItems.map(({ path, label }, index) => (
          <li key={index}>
            <motion.div
              className="item-menu-container"
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.4 + 0.1 * (menuItems.length - index - 1.2),
              }}
            >
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