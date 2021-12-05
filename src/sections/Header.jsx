import photoMe from "../images/Photo_me2.jpg";
import // DecorationHexBlue,
// DecorationHexGreen,
// DecorationHexDubleMix,
// DecorationHexMoreMix,
"../components/Decoration";

const Header = () => {
  return (
    <header className="container flex-center" id="header">
      {/* <div className="row" flex-center>
        <div className="col-sm-12 col-md-4">
          <div className="decorator">
            <DecorationHexMoreMix localization={"decoration_hex-center"} />
          </div>
        </div> */}
      <div className="col-sm-12 col-md-12">
        <div className="welcome container flex-center">
          <img
            src={photoMe}
            alt="MeOnPhoto"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
          <h1>Fabian Zieliński</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
      {/* <div className="col-sm-12 col-md-4">
          <div className="decorator">
            <DecorationHexMoreMix localization={"decoration_hex-mid-bottom"} />
          </div>
        </div> */}
      {/* </div> */}
    </header>
  );
};

export default Header;
