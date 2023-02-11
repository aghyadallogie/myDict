import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { LanguagePicker } from "../../components/LanguagePicker/LanguagePicker";
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

export const Home: FC = () => {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector(
    (state: RootState) => state.authenticatedUser
  );

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
