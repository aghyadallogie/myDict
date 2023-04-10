import { FC, useRef, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { translateWordToLangs } from "../../helpers";
import { userActions } from "../../store/actions";
import { RootState } from "../../store/reducers";
import { styles } from "./TranslateBox.styles";

export type Styles = {
  StyledForm: any;
  Input: any;
  Button: any;
  ErrorMessage: any;
};

export const TranslateBox: FC = () => {
  const user = useSelector((state: RootState) => state.authenticatedUser.user);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { updateTargetWordAction } = bindActionCreators(userActions, dispatch);

  const userLanguages = useSelector(
    (state: RootState) => state.authenticatedUser.user.languages
  );

  const handleClick = async (event: FormEvent) => {
    event.preventDefault();
    const translations = await translateWordToLangs(
      inputRef.current!.value,
      userLanguages
    );

    updateTargetWordAction(translations, user?.id);
    inputRef.current!.value = "";
  };

  return (
    <styles.StyledForm onSubmit={handleClick}>
      <styles.Input ref={inputRef} placeholder="word to translate" />
      <styles.Button type="submit">Translate</styles.Button>
    </styles.StyledForm>
  );
};
