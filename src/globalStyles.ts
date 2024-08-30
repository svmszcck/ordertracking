import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        width: 100%;
        height: 100%;
    }
    
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: rgb(229,240,253);
        background: linear-gradient(180deg, rgba(229,240,253,1) 0%, rgba(237,245,254,1) 35%, rgba(252,253,255,1) 100%);
        background-attachment: fixed;
    }
    
    .clickable {
      cursor: pointer;
    }
`;

export const subInfo = css`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export const size: Size = {
  xs: "400px", // for small screen mobile
  sm: "600px", // for mobile screen
  md: "900px", // for tablets
  lg: "1280px", // for laptops
  xl: "1440px", // for desktop / monitors
  xxl: "1920px", // for big screens
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
};
