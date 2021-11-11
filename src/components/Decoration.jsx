import hex_blue from "../images/hex_blue.svg";
import hex_more_mix from "../images/hex_more_mix.svg";
import hex_green from "../images/hex_green.svg";
import hex_duble_mix from "../images/hex_duble_mix.svg";

const DecorationHexBlue = (props) => {
  return <img className={props.localiztion} src={hex_blue} alt="hex_blue" />;
};

const DecorationHexGreen = (props) => {
  return <img className={props.localiztion} src={hex_green} alt="hex_green" />;
};

const DecorationHexDubleMix = (props) => {
  return (
    <img
      className={props.localiztion}
      src={hex_duble_mix}
      alt="hex_duble_mix"
    />
  );
};
const DecorationHexMoreMix = (props) => {
  return (
    <img className={props.localiztion} src={hex_more_mix} alt="hex_more_mix" />
  );
};

export {
  DecorationHexBlue,
  DecorationHexGreen,
  DecorationHexDubleMix,
  DecorationHexMoreMix,
};
