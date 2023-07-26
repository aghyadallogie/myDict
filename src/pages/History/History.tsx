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
import { MdOutlineTranslate, MdDelete } from "react-icons/md";

export const History: FC = () => {
  const dispatch = useDispatch();
  const { loadUserAction, deleteTranslationAction } = bindActionCreators(
    userActions,
    dispatch
  );

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
      return allWords.map((word: Word) => (
        <styles.Table key={word.id}>
          <styles.DeleteTranslation
            onClick={() => deleteTranslationAction(word.id)}
          >
            <MdDelete />
          </styles.DeleteTranslation>
          {word.translations.map((trans: Translation) => (
            <styles.Row key={trans.lang}>
              <span className={`fi fi-${renderCorrectFlag(trans.lang)}`}></span>
              <span>{trans.lingo}</span>
            </styles.Row>
          ))}
        </styles.Table>
      ));
    } else {
      return (
        <MdOutlineTranslate
          style={{ color: "#aaa3", width: "100%", margin: "40px 0" }}
          size={"20rem"}
        />
      );
    }
  };

  return <>{renderWords()}</>;
};
