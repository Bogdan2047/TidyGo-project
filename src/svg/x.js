import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgX({ height, width }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 29" fill="none">
      <Rect width="28" height="28" rx="14" fill="#4C5EFF" />
      <Path
        d="M9.95935 9.95898L18.0406 18.0402"
        stroke="white"
        strokeWidth="1.77778"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.95935 18.041L18.0406 9.9598"
        stroke="white"
        strokeWidth="1.77778"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgX;
