import React from "react";
import { Link } from "react-router-dom";

//Secondary menus. I separate it as a component, to reuse later in any section of the website
//It recieves a type of menu (see AppRoutes.jsx) and brings it.

const Menu = ({ menuType, routes, classMenu }) => {

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
