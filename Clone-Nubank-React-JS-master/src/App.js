import React from "react";

import { Home } from "./screens/Home";
import theme from "./theme";

import {ThemeProvider} from 'styled-components'



export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <Home/>
    </ThemeProvider>
    
  );
}


