import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home/Home";
import { Settings } from "./pages/Settings/Settings";
import { History } from "./pages/History/History";
import { theme } from "./styles";
import { Quiz } from "./components/Quiz/Quiz";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "./store/reducers";
import { ActionTypes } from "./store/actions/types";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.authenticatedUser.user);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {user.id && (
          <nav>
            <h1>Dictionary Nav</h1>
            <Link to="/home">Home</Link>
            <Link to="/history">History</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/settings">Settings</Link>
            <button onClick={() => dispatch({ type: ActionTypes.LOGOUT_USER })}>
              Logout
            </button>
          </nav>
        )}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
