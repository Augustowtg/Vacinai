import React from "react";

// MotherBoard
import { ThemeProvider } from 'styled-components';
import theme from "./styled/MotherBoardStyled";

// Router
import Router from "./router";

function App() {
  return (
    <section>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </section>
  );
}

export default App;
