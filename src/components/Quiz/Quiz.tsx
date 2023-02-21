import { useState } from "react";
import { useSelector } from "react-redux";
import { Word } from "../../pages/History/History";
import { RootState } from "../../store/reducers";
import { Translation } from "../TargetWord/TargetWord";

export const Quiz = () => {
  const [correct, setCorrect] = useState(false);

  const allWords = useSelector(
    (state: RootState) => state.authenticatedUser.words
  );

  const rnd = Math.floor(Math.random() * allWords.length);
  const randomEnWord = allWords[rnd]?.translations;

  const randomOptions = [
    allWords[rnd - 3],
    allWords[rnd - 2],
    allWords[rnd - 1],
    allWords[rnd],
    allWords[rnd + 1],
    allWords[rnd + 2],
    allWords[rnd + 3],
  ];

  const options = randomOptions.map((option: Word) =>
    option?.translations.filter(
      (translation: Translation) => translation.lang === "de"
    )
  );

  const handleAnswer = (answer: string) => {
    let condition =
      answer === randomEnWord?.filter((rw: any) => rw.lang === "de")[0].lingo;
    if (condition) setCorrect(!correct);
  };

  const renderOptions = () => {
    return options.map((opt) => {
      if (opt)
        return (
          <li key={opt[0].lingo} onClick={() => handleAnswer(opt[0].lingo)}>
            {opt[0].lingo}
          </li>
        );
    });
  };

  const renderQuiz = () => {
    if (allWords.length > 10) {
      return (
        <>
          <h3>
            Which of the following is{" "}
            <span style={{ color: "silver" }}>{randomEnWord[0]?.lingo}</span> in
            german ?
          </h3>
          <br />
          <ul>{renderOptions()}</ul>
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
