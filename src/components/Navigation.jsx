import { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import imageLogo from "../images/logo_gray.png";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <div className="main-container">
        <img
          className="main-header-logo flex-start"
          src={imageLogo}
          alt="logo in gray"
        />

        <div className="main-header-dropdown-button flex-end">
          <Hamburger
            onToggle={(toggled) => setOpen(!isOpen)}
            label="Show menu"
            color="gray"
          />
        </div>
      </div>
      {isOpen ? (
        <div className="dropdown-menu">
          <a href="index.html" className="dropdown-menu-main">
            <h1>Home</h1>
          </a>
          <a href="#me" className="dropdown-menu-me">
            <h1>About</h1>
          </a>
          <a href="#portfolio" className="dropdown-menu-portfolio">
            <h1>Portfolio</h1>
          </a>
          <a href="#contact" className="dropdown-menu-contact">
            <h1>Contact</h1>
          </a>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navigation;
