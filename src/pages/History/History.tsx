import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { styles } from "../../components/TargetWord/TargetWord.styles";
import { bindActionCreators } from "redux";
import { userActions } from "../../store/actions";
import { useDispatch } from "react-redux";
import { Translation } from "../../components/TargetWord/TargetWord";
import { Navigate } from "react-router-dom";
import { Word } from "../../types";
import { renderCorrectFlag } from "../../helpers";

export const History: FC = () => {
  const dispatch = useDispatch();
  const { loadUserAction } = bindActionCreators(userActions, dispatch);

  const allWords = useSelector(
    (state: RootState) => state.authenticatedUser.words.words
  );

  const user = useSelector((state: RootState) => state.authenticatedUser.user);

  useEffect(() => {
    loadUserAction(user.id);
  }, []);

  if (!user.id) return <Navigate to="/" />;

  const renderWords = () => {
    if (allWords?.length > 0) {
      return allWords.reverse().map((word: Word) => (
        <styles.Table key={word.id} onClick={() => alert(word.id)}>
          {word.translations.map((trans: Translation) => (
            <styles.Row key={trans.lang}>
              <span className={`fi fi-${renderCorrectFlag(trans.lang)}`}></span>
              <span>{trans.lingo}</span>
            </styles.Row>
          ))}
        </styles.Table>
      ));
    } else {
      return <h2 style={{ textAlign: "center" }}>L o a d i n g . . .</h2>;
    }
  };

  return <>{renderWords()}</>;
};
