import React from "react";
import { Svg, Path } from "react-native-svg";

const SvgMainNav = ({ color }) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill={color}>
      <Path
        d="M6.25168 22.4038C6.30696 23.1889 6.92445 23.817 7.70874 23.8827C12.0261 24.2447 15.9739 24.2447 20.2912 23.8827C21.0755 23.817 21.693 23.1889 21.7483 22.4038C22.0839 17.6371 22.0839 13.1337 21.7483 8.36694C21.693 7.58184 21.0757 6.95568 20.2945 6.85971C18.277 6.61184 16.1689 6.29297 14 6.29297C11.8311 6.29297 9.72304 6.61184 7.70545 6.85971C6.92427 6.95568 6.30694 7.58184 6.25168 8.36694C5.91611 13.1337 5.91611 17.6371 6.25168 22.4038Z"
        fill="white"
        stroke={color}
        strokeWidth="2"
      />
      <Path
        d="M10.8918 13.4014H17.1084"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M10.8918 18.1401H14.6432"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M16.1912 4H11.8091C10.4723 4 9.38867 5.08364 9.38867 6.42038C9.38867 7.75712 10.4723 8.84076 11.8091 8.84076H16.1912C17.528 8.84076 18.6116 7.75712 18.6116 6.42038C18.6116 5.08364 17.528 4 16.1912 4Z"
        fill="white"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgMainNav;
