import { FC, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { translateWordToLangs } from "../../helpers";
import { userActions } from "../../store/actions";
import { RootState } from "../../store/reducers";
import { styles } from "./TranslateBox.styles";

export type Styles = {
  TranslateBox: any;
  Input: any;
  Button: any;
};

export const TranslateBox: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { updateTargetWordAction } = bindActionCreators(userActions, dispatch);

  const userLanguages = useSelector(
    (state: RootState) => state.authenticatedUser.user.languages
  );

  const handleClick = async () => {
    const translations = await translateWordToLangs(
      inputRef.current!.value,
      userLanguages
    );

    updateTargetWordAction(translations);
  };

  return (
    <styles.TranslateBox>
      <styles.Input
        ref={inputRef}
        type="text"
        placeholder="word to translate"
      />
      <styles.Button onClick={handleClick}>Translate</styles.Button>
    </styles.TranslateBox>
  );
};
