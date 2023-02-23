import { useState, FormEvent, ChangeEvent } from "react";
import { styles } from "../../components/TranslateBox/TranslateBox.styles";
import supabase from "../../config/supabaseClient";

export const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login action creator and reducer

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    console.log('a) ', email, password);
    const { error, data } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.log("Registration error: ", error);
    }

    console.log('b) ', data);
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
