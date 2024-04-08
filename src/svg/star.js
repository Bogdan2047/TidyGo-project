import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgStar = (props) => {
  const { size } = props;
  return (
    <Svg
      width={size ? size : "16"}
      height={size ? size : "15"}
      viewBox="0 0 16 15"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"
        fill="#C2C1BA"
      />
    </Svg>
  );
};

export default SvgStar;
