import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { styles } from "../../components/TargetWord/TargetWord.styles";

export const History: FC = () => {
  //   allWords.map((word: any) => {
  //     word.translations.map((trans: any) => console.log('=>',trans));
  //   });

  const allWords = useSelector(
    (state: RootState) => state.authenticatedUser.words
  );

  const renderWords = () => {
    if (allWords.length > 0) {
      return allWords.map((word: any) => {
        return (
          <div
            style={{
              padding: ".1rem",
              backgroundColor: "#d8d8d877",
              marginTop: "1rem",
            }}
            onClick={() => alert(word.id)}
          >
            {word.translations.map((trans: any) => (
              <styles.Row>
                <span>{trans.lang}</span>
                <span>{trans.lingo}</span>
              </styles.Row>
            ))}
          </div>
        );
      });
    } else {
      return <h1>cant get words</h1>;
    }
  };

  return <div className="page history">{renderWords()}</div>;
};
