import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home/Home";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <nav>
          <h1>Dictionary Nav</h1>
          <Link to="/">Home</Link>
          <Link to="/settings">Settings</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
