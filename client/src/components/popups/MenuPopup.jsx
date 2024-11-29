import React from "react";
import Menu from "../Menu";
import routesConfig from "../../config/routesConfig";
import "../../styles/menuPopup.css";

const MenuPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // No renderizar el popup si isOpen es falso

  const handleLinkClick = () => {
    onClose(); // Cerrar el popup al hacer clic en un enlace
  };

  return (
    <div className="container popup-menu">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <Menu
          menuType="main"
          routes={routesConfig}
          classMenu="main-menu"
          onLinkClick={handleLinkClick}
        />
      </div>
    </div>
  );
};

export default MenuPopup;
