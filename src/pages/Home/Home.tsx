import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { TargetWord } from "../../components/TargetWord/TargetWord";
import { TranslateBox } from "../../components/TranslateBox/TranslateBox";
import { userActions } from "../../store/actions";

type User = {
  userId: number;
  username: string;
  languages: string[];
};

type Lingo = {
  userWords: any[];
  targetWord: any;
};

// user auth
// &source_lang=${srcLang}
// todo / notes

export const Home: FC = () => {
  const dispatch = useDispatch();
  const { loadUserAction } = bindActionCreators(userActions, dispatch);

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
