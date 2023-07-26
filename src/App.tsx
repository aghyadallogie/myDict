import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home/Home";
import { Settings } from "./pages/Settings/Settings";
import { History } from "./pages/History/History";
import { theme } from "./styles";
import { Quiz } from "./components/Quiz/Quiz";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { useSelector } from "react-redux";
import { RootState } from "./store/reducers";
import { Navbar } from "./components/Navbar/Navbar";
import { Quotes } from "./components/Quotes/Quotes";

function App() {
  const user = useSelector((state: RootState) => state.authenticatedUser.user);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="page home">
          {user.id && <Navbar />}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/history" element={<History />} />
            <Route path="/home" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
