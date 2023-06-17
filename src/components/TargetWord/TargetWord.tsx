import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { styles } from "./TargetWord.styles";
import { renderCorrectFlag } from "../../helpers";

export type Styles = {
  Wrapper: any;
  Table: any;
  Row: any;
  DeleteTranslation: any;
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
      <h4
        style={{ marginBottom: "2rem", textAlign: "center", fontWeight: 500 }}
      >
        The Latest Word You Translated:
      </h4>

      {targetWord?.created_at && (
        <styles.Table>
          {targetWord.translations.map((translation: Translation) => (
            <styles.Row key={translation.lang}>
              <span
                className={`fi fi-${renderCorrectFlag(translation.lang)}`}
              />
              <span>{translation.lingo}</span>
            </styles.Row>
          ))}
        </styles.Table>
      )}
    </styles.Wrapper>
  );
};
