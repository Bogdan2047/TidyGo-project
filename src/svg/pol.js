import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPol = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 20C15.5333 20 20 15.5333 20 10H0C0 15.5333 4.46667 20 10 20Z"
        fill="#ED4C5C"
      />
      <Path
        d="M10 0C4.46667 0 0 4.46667 0 10H20C20 4.46667 15.5333 0 10 0Z"
        fill="#F2F2F2"
      />
    </Svg>
  );
};

export default SvgPol;
