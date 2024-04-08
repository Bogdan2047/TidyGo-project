import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgClock = () => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M14.0001 22.9998C18.2059 22.9998 21.6155 19.5902 21.6155 15.3844C21.6155 11.1786 18.2059 7.76904 14.0001 7.76904C9.79428 7.76904 6.38477 11.1786 6.38477 15.3844C6.38477 19.5902 9.79428 22.9998 14.0001 22.9998Z"
        fill="white"
        stroke="#1E2022"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 7.76921C5.97237 6.63972 7.14613 5.70072 8.46152 5"
        stroke="#1E2022"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.9998 7.76921C22.0273 6.63972 20.8536 5.70072 19.5381 5"
        stroke="#1E2022"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 11.231V15.3848H17.4615"
        stroke="#1E2022"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgClock;
