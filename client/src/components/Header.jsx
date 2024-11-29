import React from 'react';
import {motion} from 'framer-motion';
import Icon from './Icon';


const Header = () => {
  return(
    <header className="header">
      <div className="container header-container">
          <motion.a className="logo-img"
             href="/"
             initial={{
              y: -250,
              opacity: 0,
             }}
             animate={{
              y: 0,
              opacity: 1,
             }}
          >
                <img src="./public/logo.png" alt="" />
          </motion.a >
          <motion.div className="nav-button"
             initial={{
              y: -250,
              opacity: 0,
             }}
             animate={{
              y: 0,
              opacity: 1,
             }}
          >
            <img src="./public/menuIcons/burguer.svg" alt="menu" />
          </motion.div>
      </div>
    </header>
  );
};

export default Header;
