import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgSmallLattice({ height, width }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 17" fill="none">
      <Rect x="6.28571" y="6.21436" width="3.42857" height="4" fill="white" />
      <Path
        d="M3.42856 6.78551H12.5714M3.42856 10.2141H12.5714M6.85713 3.35693L5.14284 13.6426M10.8571 3.35693L9.14284 13.6426"
        stroke="#1E2022"
        strokeWidth="1.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgSmallLattice;
