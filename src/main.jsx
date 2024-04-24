import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import { extendTheme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  base: "0px",
  sm: "320px",
  smd: "520px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  xxl: "1536px",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

