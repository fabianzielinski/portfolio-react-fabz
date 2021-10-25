import { Rotate as Hamburger } from "hamburger-react";

const Navigation = () => {
  return (
    <nav>
      <img
        // class="main-header-logo"
        src="/images/logo_gray.png"
        alt="logo in gray"
      />
      <Hamburger direction="right" />
    </nav>
  );
};

export default Navigation;
