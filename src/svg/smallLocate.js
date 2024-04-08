import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSmallLocate({ height, width }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 17" fill="none">
      <Path
        d="M8.55045 14.2463C9.76578 13.1931 12.5714 10.4292 12.5714 7.3571C12.5714 4.83236 10.5248 2.78564 8.00001 2.78564C5.47527 2.78564 3.42856 4.83236 3.42856 7.3571C3.42856 10.4292 6.23423 13.1931 7.44956 14.2463C7.76896 14.523 8.23106 14.523 8.55045 14.2463Z"
        fill="white"
        stroke="#1E2022"
        strokeWidth="1.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99989 8.96108C9.03398 8.96108 9.87227 8.12278 9.87227 7.08869C9.87227 6.0546 9.03398 5.21631 7.99989 5.21631C6.96579 5.21631 6.1275 6.0546 6.1275 7.08869C6.1275 8.12278 6.96579 8.96108 7.99989 8.96108Z"
        fill="white"
        stroke="#1E2022"
        strokeWidth="1.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgSmallLocate;
