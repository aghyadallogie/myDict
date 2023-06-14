import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { TargetWord } from "../../components/TargetWord/TargetWord";
import { TranslateBox } from "../../components/TranslateBox/TranslateBox";
import { userActions } from "../../store/actions";
import { RootState } from "../../store/reducers";
import { Navbar } from "../../components/Navbar/Navbar";

// &source_lang=${srcLang}
// todo / notes
// active tab
// fetch and load user settings
// history based on user ?
// settings coming from supabase ?
// isolate translate logic
// use valid langs

export const Home: FC = () => {
  const dispatch = useDispatch();
  const { loadUserAction } = bindActionCreators(userActions, dispatch);

  const user = useSelector((state: RootState) => state.authenticatedUser.user);

  useEffect(() => {
    loadUserAction(user.id);
  }, []);

  if (!user.id) return <Navigate to="/" />;

  return (
    <>
      <TranslateBox />
      <TargetWord />
    </>
  );
};
