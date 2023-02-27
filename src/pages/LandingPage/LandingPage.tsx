import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { styles } from "../../components/TranslateBox/TranslateBox.styles";
import { userActions } from "../../store/actions";

export const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loginUserAction, registerUserAction } = bindActionCreators(userActions, dispatch);

  // userId = c41bfbc3-292e-4b6b-877c-1a0959730403
  // login action creator and reducer

  // on update settings save in supabse
  // for that we need userId
  // for that we need to Authenticate:
  // a) no account? show settings -> set settings in localStorage and supabase
  // b) exists -> load settings along with the rest of data

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    loginUserAction({ email, password });
    // registerUserAction({ email, password });
  };

  return (
    <div
      className="page"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Sign Up</h2>
      <div style={{ width: "80%", height: "100%", margin: "2rem auto 6rem" }}>
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
          <styles.Button style={{ margin: "0" }}>Register</styles.Button>
        </styles.StyledForm>
      </div>
      <span style={{ borderTop: "1px solid silver", paddingTop: "0.5rem" }}>
        You have an account already ? Just Login
      </span>
    </div>
  );
};
