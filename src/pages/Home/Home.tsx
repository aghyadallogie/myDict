import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { TargetWord } from "../../components/TargetWord/TargetWord";
import { TranslateBox } from "../../components/TranslateBox/TranslateBox";
import { userActions } from "../../store/actions";
import { RootState } from "../../store/reducers";

type User = {
  userId: number;
  username: string;
  languages: string[];
};

type Lingo = {
  userWords: any[];
  targetWord: any;
};

// change targetWord type to {}
// minimal localstorage
// user auth
// &source_lang=${srcLang}

export const Home: FC = () => {
  const dispatch = useDispatch();
  const { loadUserAction } = bindActionCreators(userActions, dispatch);

  const authenticatedUser = useSelector(
    // needed ?
    (state: RootState) => state.authenticatedUser
  );

  console.log(authenticatedUser.words[authenticatedUser.words.length - 1]);

  useEffect(() => {
    loadUserAction();
  }, []);

  return (
    <div className="page home">
      <TranslateBox />
      <TargetWord />
    </div>
  );
};
