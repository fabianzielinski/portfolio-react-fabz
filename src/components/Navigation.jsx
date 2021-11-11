import { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { Gallery, Home, DocumentText, DirectboxNotif } from "iconsax-react";
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
            <div>
              <Home size="80" color="#fff" variant="Broken" />
              <h1>Home</h1>
            </div>
          </a>
          <a href="#me" className="dropdown-menu-me">
            <div>
              <DocumentText size="60" color="#fff" variant="Broken" />
              <h1>About</h1>
            </div>
          </a>
          <a href="#portfolio" className="dropdown-menu-portfolio">
            <div>
              <Gallery size="60" color="#fff" variant="Broken" />
              <h1>Portfolio</h1>
            </div>
          </a>
          <a href="#contact" className="dropdown-menu-contact">
            <div>
              <DirectboxNotif size="80" color="#fff" variant="Broken" />
              <h1>Contact</h1>
            </div>
          </a>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navigation;
