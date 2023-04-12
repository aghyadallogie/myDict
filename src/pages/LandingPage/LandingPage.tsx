import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { styles } from "../../components/TranslateBox/TranslateBox.styles";
import { userActions } from "../../store/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

export const LandingPage = () => {
  const [slide, setSlide] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const { loginUserAction, registerUserAction } = bindActionCreators(
    userActions,
    dispatch
  );

  const user = useSelector((state: RootState) => state.authenticatedUser.user);
  const errorMessage = useSelector(
    (state: RootState) => state.authenticatedUser.errorMessage
  );

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    if (slide === "login") loginUserAction({ email, password });
    else if (password === repeatedPassword)
      registerUserAction({ email, password });
    else setPasswordError("Passwords do not match!");
  };

  if (user.id) return <Navigate to="/home" />;

  return (
    <div
      className="page"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Personalized Dictionary</h2>
      <div style={{ width: "80%", height: "100%", margin: "0 auto 6rem" }}>
        <styles.ErrorMessage>{errorMessage}</styles.ErrorMessage>
        <styles.ErrorMessage>{passwordError}</styles.ErrorMessage>
        <styles.StyledForm
          style={{ flexDirection: "column" }}
          onSubmit={handleLogin}
        >
          <styles.Input
            type="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="Enter Email"
          />

          <styles.Input
            type="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Enter Password"
          />

          {slide === "register" && (
            <styles.Input
              type="password"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRepeatedPassword(e.target.value)
              }
              placeholder="Repeat Password"
            />
          )}

          {slide === "login" && (
            <styles.Button style={{ margin: "0" }}>Login</styles.Button>
          )}
          {slide === "register" && (
            <styles.Button style={{ margin: "0" }}>Register</styles.Button>
          )}
        </styles.StyledForm>
      </div>
      <div>
        {slide === "login" && (
          <span style={{ borderTop: "1px solid silver", paddingTop: "0.5rem" }}>
            If you do not have an account already ?{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setSlide("register")}
            >
              Register
            </span>
          </span>
        )}
        {slide === "register" && (
          <span style={{ borderTop: "1px solid silver", paddingTop: "0.5rem" }}>
            Do you have an account already ?{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setSlide("login")}
            >
              Login
            </span>
          </span>
        )}
      </div>
    </div>
  );
};
