import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { styles } from "../../components/TargetWord/TargetWord.styles";

export const History: FC = () => {
  const allWords = useSelector(
    (state: RootState) => state.authenticatedUser.words
  );

  const renderWords = () => {
    if (allWords.length > 0) {
      return allWords.map((word: any) => {
        return (
          <styles.Table onClick={() => alert(word.id)}>
            {word.translations.map((trans: any) => (
              <styles.Row>
                <span className={`fi fi-${trans.lang}`}></span>
                <span>{trans.lingo}</span>
              </styles.Row>
            ))}
          </styles.Table>
        );
      });
    } else {
      return <h1>cant get words</h1>;
    }
  };

  return <div className="page history">{renderWords()}</div>;
};
