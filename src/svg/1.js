import React from "react";
import Svg, { Path } from "react-native-svg";

const Svg1 = ({ color }) => {
  return (
    <Svg width="15" height="16" viewBox="0 0 15 16" fill="none">
      <Path
        d="M7.5 15.5C3.3675 15.5 0 12.1325 0 8C0 3.8675 3.3675 0.5 7.5 0.5C11.6325 0.5 15 3.8675 15 8C15 12.1325 11.6325 15.5 7.5 15.5ZM6.9375 11C6.9375 11.3075 7.1925 11.5625 7.5 11.5625C7.8075 11.5625 8.0625 11.3075 8.0625 11V7.25C8.0625 6.9425 7.8075 6.6875 7.5 6.6875C7.1925 6.6875 6.9375 6.9425 6.9375 7.25V11ZM8.19 4.715C8.1525 4.6175 8.1 4.5425 8.0325 4.4675C7.9575 4.4 7.875 4.3475 7.785 4.31C7.695 4.2725 7.5975 4.25 7.5 4.25C7.4025 4.25 7.305 4.2725 7.215 4.31C7.125 4.3475 7.0425 4.4 6.9675 4.4675C6.9 4.5425 6.8475 4.6175 6.81 4.715C6.7725 4.805 6.75 4.9025 6.75 5C6.75 5.0975 6.7725 5.195 6.81 5.285C6.8475 5.375 6.9 5.4575 6.9675 5.5325C7.0425 5.6 7.125 5.6525 7.215 5.69C7.395 5.765 7.605 5.765 7.785 5.69C7.875 5.6525 7.9575 5.6 8.0325 5.5325C8.1 5.4575 8.1525 5.375 8.19 5.285C8.2275 5.195 8.25 5.0975 8.25 5C8.25 4.9025 8.2275 4.805 8.19 4.715Z"
        fill={color}
      />
    </Svg>
  );
};

export default Svg1;
