import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgPoint = () => (
  <Svg width="24" height="44" viewBox="0 0 24 44" fill="none">
    <Circle cx="12" cy="12" r="12" fill="#1E2022" />
    <Path
      d="M12 24V42.5"
      stroke="#1E2022"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgPoint;
