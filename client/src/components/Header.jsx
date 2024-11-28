

const Header = () => {
  return(
    <header className="header">
      <div className="container header-container">
          <a className="logo-img" href="/">
            <img src="./public/logo.png" alt="" />
          </a>
          <div className="nav-button">
            <img src="./public/icons/burguer.png" alt="" />
          </div>
      </div>
    </header>
  );
};

export default Header;
