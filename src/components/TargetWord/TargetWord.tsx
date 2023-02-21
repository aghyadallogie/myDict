import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { styles } from "./TargetWord.styles";

export type Styles = {
  Wrapper: any;
  Table: any;
  Row: any;
};

export type Translation = {
  lang: string;
  lingo: string;
};

export const TargetWord: FC = () => {
  const targetWord = useSelector(
    (state: RootState) => state.authenticatedUser.targetWord
  );

  return (
    <styles.Wrapper>
      {targetWord?.created_at && (
        <styles.Table>
          {targetWord.translations.map((translation: Translation) => (
            <styles.Row key={translation.lang}>
              <span
                className={`fi fi-${
                  translation.lang === "en" ? "gb" : translation.lang
                }`}
              ></span>
              <span>{translation.lingo}</span>
            </styles.Row>
          ))}
        </styles.Table>
      )}
    </styles.Wrapper>
  );
};
