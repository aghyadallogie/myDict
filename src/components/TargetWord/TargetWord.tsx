import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { styles } from "./TargetWord.styles";

export type Styles = {
  Wrapper: any;
  Table: any;
  Row: any;
};

export const TargetWord: FC = () => {
  const targetWord = useSelector(
    (state: RootState) => state.authenticatedUser.targetWord
  );

  return (
    <styles.Wrapper>
      {targetWord.length > 0 && (
        <styles.Table>
          {targetWord[0].translations.map((translation: any) => (
            <styles.Row key={translation.lang}>
              <span>{translation.lang}</span>
              <span>{translation.lingo}</span>
            </styles.Row>
          ))}
        </styles.Table>
      )}
    </styles.Wrapper>
  );
};
