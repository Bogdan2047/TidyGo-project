import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPlus = () => (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <Path
      d="M14 6V22"
      stroke="#1E2022"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 14H22"
      stroke="#1E2022"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgPlus;
