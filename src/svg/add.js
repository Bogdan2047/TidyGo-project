import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgAdd(props) {
  return (
    <Svg width="38" height="38" viewBox="0 0 28 28" fill="none" {...props}>
      <Rect
        x="1.08889"
        y="1.08889"
        width="25.8222"
        height="25.8222"
        rx="12.9111"
        fill="#4C5EFF"
      />
      <Rect
        x="1.08889"
        y="1.08889"
        width="25.8222"
        height="25.8222"
        rx="12.9111"
        stroke="#4C5EFF"
        strokeWidth="2.17777"
      />
      <Path
        d="M13.9995 8.66675V19.3334"
        stroke="white"
        strokeWidth="1.55555"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.6665 14H19.3332"
        stroke="white"
        strokeWidth="1.55555"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgAdd;
