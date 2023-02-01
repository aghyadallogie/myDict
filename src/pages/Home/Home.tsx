import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { LanguagePicker } from "../../components/LanguagePicker/LanguagePicker";
import { loadUserAction, userActions } from "../../store/actions";
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

export const Home = () => {
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
      <LanguagePicker />
    </div>
  );
};
