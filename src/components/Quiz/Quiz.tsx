import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Word } from "../../types";
import { RootState } from "../../store/reducers";
import { Translation } from "../TargetWord/TargetWord";
import { styles } from "../TargetWord/TargetWord.styles";
import { Navigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { userActions } from "../../store/actions";
import { renderCorrectFlag } from "../../helpers";

export const Quiz = () => {
  const dispatch = useDispatch();
  const [correct, setCorrect] = useState(false);
  const { loadUserAction } = bindActionCreators(userActions, dispatch);

  const user = useSelector((state: RootState) => state.authenticatedUser.user);

  useEffect(() => {
    loadUserAction(user.id);
  }, []);

  const userLangs = useSelector(
    (state: RootState) => state.authenticatedUser.user.languages
  );

  const streak = useSelector(
    (state: RootState) => state.authenticatedUser.user.streak
  );

  const allWords = useSelector(
    (state: RootState) => state.authenticatedUser.words.words
  );

  let rnd = Math.floor(Math.random() * allWords?.length);

  if (!user.id) return <Navigate to="/" />;

  const randomEnWord = allWords?.length
    ? allWords[rnd]?.translations
    : [{ id: 0, translations: [] }];
  const randomLang = userLangs[Math.floor(Math.random() * userLangs?.length)];

  if (isNaN(rnd)) {
    // Handle the error here, e.g. by setting rnd to a default value
    rnd = 3;
  }

  let randomOptions;

  if (allWords?.length > 0) {
    randomOptions = [
      allWords[rnd - 3],
      allWords[rnd - 2],
      allWords[rnd - 1],
      allWords[rnd],
      allWords[rnd + 1],
      allWords[rnd + 2],
      allWords[rnd + 3],
    ].filter((val) => val !== undefined);
  } else {
    randomOptions = [];
  }

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
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleAnswer(opt[0].lingo);
            }}
          >
            {opt[0].lingo}
          </styles.Row>
        );
    });
  };

  const renderQuiz = () => {
    if (allWords?.length > 10) {
      return (
        <div style={{ marginTop: "40px" }}>
          <h4 style={{ fontWeight: "400", textAlign: "center" }}>
            What is{" "}
            <span style={{ color: "orange" }}>{randomEnWord[0]?.lingo}</span> in{" "}
            <span className={`fi fi-${renderCorrectFlag(randomLang)}`} /> ?
          </h4>
          <br />
          <styles.Table>{renderOptions()}</styles.Table>
          <h3 style={{ textAlign: "center", fontWeight: "400" }}>
            You are on a streak of{" "}
            <span style={{ color: "orange" }}>{streak}</span> correct answers!
          </h3>
        </div>
      );
    } else {
      return (
        <h5 style={{ marginTop: "5rem", padding: "3rem", textAlign: "center" }}>
          You do not have enough translations in order to play the quiz!
        </h5>
      );
    }
  };

  return <>{renderQuiz()}</>;
};
