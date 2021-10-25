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
        <div className="container dropdown-menu">
          <div className="col-sm-6 col-md-6">
            <div className="row row-main">
              <a href="index.html" className="dropdown-menu-item">
                Home
              </a>
            </div>
            <div className="row row-me">
              <a href="#me" className="dropdown-menu-item">
                About
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="row row-portfolio">
              <a href="#portfolio" className="dropdown-menu-item">
                Portfolio
              </a>
            </div>
            <div className="row row-contact">
              <a href="#contact" className="dropdown-menu-item">
                Contact
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navigation;
