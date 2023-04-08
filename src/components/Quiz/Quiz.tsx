import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Word } from "../../types";
import { RootState } from "../../store/reducers";
import { Translation } from "../TargetWord/TargetWord";
import { styles } from "../TargetWord/TargetWord.styles";
import { Navigate } from "react-router-dom";

export const Quiz = () => {
  const dispatch = useDispatch();
  const [correct, setCorrect] = useState(false);

  const user = useSelector((state: RootState) => state.authenticatedUser.user);

  const userLangs = useSelector(
    (state: RootState) => state.authenticatedUser.user.languages
  );

  const streak = useSelector(
    (state: RootState) => state.authenticatedUser.user.streak
  );

  const allWords = useSelector(
    (state: RootState) => state.authenticatedUser.words.words
  );

  const rnd = Math.floor(Math.random() * allWords.length);

  if (!user.id) return <Navigate to="/" />;

  const randomEnWord = allWords[rnd]?.translations;
  const randomLang = userLangs[Math.floor(Math.random() * userLangs.length)];

  const randomOptions = [
    allWords[rnd - 3],
    allWords[rnd - 2],
    allWords[rnd - 1],
    allWords[rnd],
    allWords[rnd + 1],
    allWords[rnd + 2],
    allWords[rnd + 3],
  ].filter((val) => val !== undefined);

  // if a translation doesnt exist in a certain language it shouldnt ask it in that language

  const options = randomOptions.map((option: Word) =>
    option?.translations.filter(
      (translation: Translation) => translation.lang === randomLang
    )
  );

  const handleAnswer = (answer: string) => {

    if (
      answer ===
      randomEnWord?.filter((rw: any) => rw.lang === randomLang)[0]?.lingo
    ) {
      setCorrect(!correct);
      dispatch({ type: "UP_STREAK" });
    } else {
      dispatch({ type: "RESET_STREAK" });
    }
  };

  const renderOptions = () => {
    return options.map((opt) => {
      if (opt && opt[0] && opt[0].lingo)
        return (
          <styles.Row
            key={opt[0].lingo}
            onClick={() => {
              handleAnswer(opt[0].lingo);
              console.log(opt[0].lingo);
            }}
          >
            {opt[0].lingo}
          </styles.Row>
        );
    });
  };

  const renderQuiz = () => {
    if (allWords.length > 10) {
      return (
        <>
          <h3>
            Which of the following is{" "}
            <span style={{ color: "orange" }}>{randomEnWord[0]?.lingo}</span> in{" "}
            <span
              className={`fi fi-${randomLang === "en" ? "gb" : randomLang}`}
            />{" "}
            ?
          </h3>
          <br />
          <styles.Table>{renderOptions()}</styles.Table>
          <h3 style={{ textAlign: "center" }}>
            You are on a streak of{" "}
            <span style={{ color: "orange" }}>{streak}</span> correct answers!
          </h3>
        </>
      );
    } else {
      return (
        <h2>You do not have enough translations in order to play the quiz!</h2>
      );
    }
  };

  return <div className="page">{renderQuiz()}</div>;
};
