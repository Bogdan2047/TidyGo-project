import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgApartment = (props) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...props}>
      <G>
        <Path
          d="M14 23C19.76 23 23 19.76 23 14C23 8.24 19.76 5 14 5C8.24 5 5 8.24 5 14C5 19.76 8.24 23 14 23Z"
          fill="white"
        />
        <Path
          d="M23 14C23 8.24 19.76 5 14 5C8.24 5 5 8.24 5 14"
          stroke="#1E2022"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M23 14C23 19.76 19.76 23 14 23C8.24 23 5 19.76 5 14"
          stroke="#1E2022"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4.22 4.22"
        />
        <Path
          d="M17.538 15.3433C17.538 11.9051 14.0002 9.63525 14.0002 9.63525C14.0002 9.63525 10.4624 11.9051 10.4624 15.3433C10.4624 16.1448 10.8351 16.9134 11.4986 17.4802C12.1621 18.0469 13.0619 18.3653 14.0002 18.3653C14.9385 18.3653 15.8383 18.0469 16.5018 17.4802C17.1652 16.9134 17.538 16.1448 17.538 15.3433Z"
          fill="white"
          stroke="#1E2022"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export default SvgApartment;
