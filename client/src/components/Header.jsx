import { useState } from "react";
import MenuPopup from "./popups/MenuPopup";
import '../styles/menuPopup.css'

//styles & animations
import { motion } from "framer-motion";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <header className="header">
      <div className="medium-container header-container">
        <motion.a
          className="logo-img"
          href="/"
          initial={{
            y: -250,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 350,
          }}
        >
          <img src="./public/logo.png" alt="" />
        </motion.a>
        <motion.button
          className="nav-button"
          initial={{
            y: -250,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            type: "spring",
            damping: 28,
            stiffness: 350,
          }}
        >
          <img
            src="./public/menuIcons/burguer.svg"
            alt="menu"
            className="open-popup"
          />
        </motion.button>
        <MenuPopup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </header>
  );
};

export default Header;
