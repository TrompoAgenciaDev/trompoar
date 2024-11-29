import React from "react";
import { Link } from "react-router-dom";

// Componente para renderizar menús secundarios
// Recibe un tipo de menú (menuType), las rutas (routes) y una clase CSS opcional (classMenu)

const Menu = ({ menuType, routes, classMenu = "" }) => {
  const menuItems = routes[menuType];

  if (!menuItems) {
    return <p>El menú especificado no existe</p>;
  }

  return (
    <nav className="nav-menu">
      <ul className={classMenu}>
        {menuItems.map(({ path, label }, index) => (
          <li key={index}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
