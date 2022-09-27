import React from "react";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    primaryGreen: "rgba(16, 58, 50, 1)",
    secondaryGreen: "rgba(5,150,105,1)",
    darkerGreen: "#028a5f",
    white: "#fff",
    lightRed: "#fc4d4d",
    darkRed: "#fc2626",
    //grays
    lightestGray: "#f0f0f0",
    lightGray: "rgba(231,229,228,1)",
    darkerGray: "#979797",
    mediumGray: "#525252",
    darkGray: "#141414",
  },
  fonts: ["Roboto Mono", "Courier Prime", "Averia Libre", "Inter"],
  fontSizes: {
    xxsmall: "0.7rem",
    xsmall: "0.85rem",
    small: "1rem",
    xmedium: "1.25rem",
    xxmedium: "1.5rem",
    medium: "2rem",
    xbig: "2.5rem",
    xxbig: "3rem",
    big: "3.5rem",
    large: "4rem",
    xlarge: "4.5rem",
    xxlarge: "5rem",
    xxxlarge: "6rem",
  },
  mediaScreen: {
    lgLaptop: "1024px",
    xlgLaptop: "1280px",
    tablet640: "640px",
    laptop768: "768px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
