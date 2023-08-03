import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { TargetWord } from "../../components/TargetWord/TargetWord";
import { TranslateBox } from "../../components/TranslateBox/TranslateBox";
import { userActions } from "../../store/actions";
import { RootState } from "../../store/reducers";

// sticky navbar
// more messages 'tooltip'
// unionize theme
// fix reverse history flickering
// settings coming from supabase ?
// isolate translate logic
// dbl click for delete
// &source_lang=${srcLang}
// todo / notes

// align towards flags

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
