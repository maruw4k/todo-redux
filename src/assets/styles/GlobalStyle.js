import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";

const GlobalStyle = createGlobalStyle`
 
*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: ${theme.font.family.main};
  font-weight: 300;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
    
background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%230c1122' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23182244' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23253366' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23314488' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%233d55aa' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

a {
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
`;

export default GlobalStyle;
