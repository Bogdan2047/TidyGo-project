import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSmallDescription = (props) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M3.57228 12.8024C3.60387 13.251 3.95673 13.6099 4.40489 13.6475C6.87194 13.8543 9.12785 13.8543 11.5949 13.6475C12.0431 13.6099 12.3959 13.251 12.4275 12.8024C12.6193 10.0785 12.6193 7.50516 12.4275 4.78132C12.3959 4.33269 12.0432 3.97488 11.5968 3.92004C10.4439 3.77841 9.23927 3.59619 7.9999 3.59619C6.76052 3.59619 5.55592 3.77841 4.40301 3.92004C3.95662 3.97488 3.60386 4.33269 3.57228 4.78132C3.38053 7.50516 3.38053 10.0785 3.57228 12.8024Z"
        fill="white"
        stroke="#1E2022"
        strokeWidth="1.14286"
      />
      <Path
        d="M6.22388 7.65771H9.7762"
        stroke="#1E2022"
        strokeWidth="1.14286"
        strokeLinecap="round"
      />
      <Path
        d="M6.22388 10.3657H8.36752"
        stroke="#1E2022"
        strokeWidth="1.14286"
        strokeLinecap="round"
      />
      <Path
        d="M9.25216 2.28564H6.74807C5.98422 2.28564 5.36499 2.90487 5.36499 3.66872C5.36499 4.43257 5.98422 5.0518 6.74807 5.0518H9.25216C10.016 5.0518 10.6352 4.43257 10.6352 3.66872C10.6352 2.90487 10.016 2.28564 9.25216 2.28564Z"
        fill="white"
        stroke="#1E2022"
        strokeWidth="1.14286"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgSmallDescription;
