import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgHome = () => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M5 15.6931L12.9093 6.51832C13.4838 5.85196 14.5162 5.85196 15.0907 6.51832L23 15.6931"
        stroke="#202020"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.76923 12.4882L12.9073 6.50211C13.482 5.83263 14.518 5.83263 15.0927 6.50211L20.2308 12.4882L20.5243 14.5819C20.7887 16.4686 20.7757 18.3838 20.4858 20.2667C20.3391 21.2194 19.5192 21.9229 18.5551 21.9229H9.44487C8.48082 21.9229 7.66093 21.2194 7.51419 20.2667C7.22425 18.3838 7.21129 16.4686 7.47574 14.5819L7.76923 12.4882Z"
        fill="white"
        stroke="#202020"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <Path
        d="M14 15.144C15.3262 15.144 16.4013 16.2192 16.4013 17.5454V21.9229H11.5986V17.5454C11.5986 16.2192 12.6738 15.144 14 15.144Z"
        fill="white"
        stroke="#202020"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgHome;
