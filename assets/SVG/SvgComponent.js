import * as React from "react";
import Svg, { Circle, Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <G id="SVGRepo_iconCarrier">
      <Defs></Defs>
      <Path
        d="M16.535 24a7.43 7.43 0 0 0 7.293-7.518 7.43 7.43 0 0 0-7.293-7.518M16.535 39.037a7.521 7.521 0 0 0 0-15.036M4.5 36.405c2.188 1.88 4.011 2.631 9.117 2.631h2.918M4.5 11.596c2.188-1.88 4.376-2.631 9.117-2.631h2.918"
        className="a"
      />
      <Path
        d="M43.5 29.075a9.851 9.851 0 1 1-19.693 0v-10.15a9.96 9.96 0 0 1 9.846-10.15c5.47 0 9.482 4.512 9.482 10.15"
        className="a"
      />
      <Path
        d="M27.364 25.496a6.604 6.604 0 0 1 13.207 0v3.116a.691.691 0 0 1-.679.688H28.06a.692.692 0 0 1-.696-.688Z"
        className="a"
      />
      <Path
        d="m38.694 20.885 1.773-1.772M29.24 20.885l-1.773-1.772"
        className="b"
      />
      <Path d="M9.241 24h7.294" className="a" />
      <Circle cx={31.111} cy={24.451} r={0.75} className="c" />
      <Circle cx={36.835} cy={24.451} r={0.75} className="c" />
    </G>
  </Svg>
);
export default SvgComponent;
