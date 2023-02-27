import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { TargetWord } from "../../components/TargetWord/TargetWord";
import { TranslateBox } from "../../components/TranslateBox/TranslateBox";
import { userActions } from "../../store/actions";
import { RootState } from "../../store/reducers";

// user auth
// &source_lang=${srcLang}
// todo / notes
// fetch and load user settings

export const Home: FC = () => {
  const dispatch = useDispatch();
  const { loadUserAction } = bindActionCreators(userActions, dispatch);
  
  const authenticatedUser = useSelector((state: RootState) => state.authenticatedUser);
  
  const userId = "50f223ea-6fe8-4984-bd0d-16e1f66ec8b8"


  useEffect(() => {
    loadUserAction(userId);
  }, []);

  return (
    <div className="page home">
      <TranslateBox />
      <TargetWord />
    </div>
  );
};
