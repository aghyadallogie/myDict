import { useRef, FormEvent } from "react";
import { styles } from "../../components/TranslateBox/TranslateBox.styles";
import supabase from "../../config/supabaseClient";

export const LandingPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const email = emailRef?.current?.value || "";
  const password = passwordRef?.current?.value || "";

  // login action creator and reducer

  const handleLogin = async (event: FormEvent) => {
      event.preventDefault();
      console.log(password);
      const { error, data } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.log("Registration error: ", error);
    }

    console.log(data);
  };

  return (
    <div className="page" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2>Sign Up</h2>
      <div style={{ width: "80%", height: "100%", margin: "2rem auto 6rem" }}>
        <styles.StyledForm
          style={{ flexDirection: "column" }}
          onSubmit={handleLogin}
        >
          <styles.Input type="email" ref={emailRef} placeholder="Enter Email" />
          <styles.Input
            type="password"
            ref={passwordRef}
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
