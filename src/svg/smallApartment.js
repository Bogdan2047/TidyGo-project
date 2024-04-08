import React from "react";
import Svg, { Path, Defs, ClipPath, Rect, G } from "react-native-svg";

const SvgSmallApartment = (props) => {
  return (
    <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" {...props}>
      <Defs>
        <ClipPath id="clip0_474_51980">
          <Rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_474_51980)">
        <Path
          d="M8.00003 13.6426C11.2915 13.6426 13.1429 11.7912 13.1429 8.49979C13.1429 5.20836 11.2915 3.35693 8.00003 3.35693C4.70861 3.35693 2.85718 5.20836 2.85718 8.49979C2.85718 11.7912 4.70861 13.6426 8.00003 13.6426Z"
          fill="white"
        />
        <Path
          d="M13.1429 8.49979C13.1429 5.20836 11.2915 3.35693 8.00003 3.35693C4.70861 3.35693 2.85718 5.20836 2.85718 8.49979"
          stroke="#1E2022"
          strokeWidth="1.14286"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.1429 8.5C13.1429 11.7914 11.2915 13.6429 8.00003 13.6429C4.70861 13.6429 2.85718 11.7914 2.85718 8.5"
          stroke="#1E2022"
          strokeWidth="1.14286"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2.41 2.41"
        />
        <Path
          d="M10.0217 9.26762C10.0217 7.30289 8.00011 6.00586 8.00011 6.00586C8.00011 6.00586 5.97852 7.30289 5.97852 9.26762C5.97852 9.72559 6.1915 10.1648 6.57063 10.4887C6.94975 10.8125 7.46395 10.9945 8.00011 10.9945C8.53627 10.9945 9.05047 10.8125 9.42959 10.4887C9.80871 10.1648 10.0217 9.72559 10.0217 9.26762Z"
          fill="white"
          stroke="#1E2022"
          strokeWidth="1.14286"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export default SvgSmallApartment;
