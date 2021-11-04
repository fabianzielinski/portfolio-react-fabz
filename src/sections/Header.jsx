import photoMe from "../images/Photo_me2.jpg";

const Header = () => {
  return (
    <header>
      <div className="welcome container flex-center">
        <img src={photoMe} alt="MeOnPhoto" />
        <h1>Fabian Zieliński</h1>
        <h2>Web Developer</h2>
      </div>
    </header>
  );
};

export default Header;
