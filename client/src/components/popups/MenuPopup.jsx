import React from "react";
import Menu from "@/components/Menu";
import routesConfig from "@/config/routesConfig";

import Icons from "../Icons";

//styles and animations
import "@as/menuPopup.css";
import { motion, AnimatePresence } from "framer-motion";

const MenuPopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popup-menu"
          initial={{
            y: -1140,
            scale: 0.25,
          }}
          animate={{
            y: 0,
            scale: 1,
          }}
          exit={{
            y: -1140,
            scale: 0.25,
          }}
          transition={{
            delay: 0.1,
            duration: 0.3,
            type: "tween",
            damping: 26,
            stiffness: 250,
          }}
        >
          <div className="medium-container popup-content">
            <Menu
              menuType="main"
              routes={routesConfig}
              classMenu="main-menu"
              onClose={onClose} // Pasando la función onClose aquí
            />
            <motion.button
              className="close-button"
              onClick={onClose}
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              <Icons 
                iconName="close"
              />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuPopup;
