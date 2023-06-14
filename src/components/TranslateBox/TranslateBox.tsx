import { FC, useRef, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { translateWordToLangs } from "../../helpers";
import { userActions } from "../../store/actions";
import { RootState } from "../../store/reducers";
import { styles } from "./TranslateBox.styles";
import { StyledComponent } from "styled-components";
import { MdOutlineTranslate } from "react-icons/md";

export type Styles = {
  StyledForm: StyledComponent<"form", any>; // Replace 'any' with specific props if needed
  Input: StyledComponent<"input", any>; // Replace 'any' with specific props if needed
  Button: StyledComponent<"button", any>; // Replace 'any' with specific props if needed
  ErrorMessage: StyledComponent<"h3", any>; // Replace 'any' with specific props if needed
};

// prevent empty translation

export const TranslateBox: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { updateTargetWordAction } = bindActionCreators(userActions, dispatch);
  const user = useSelector((state: RootState) => state.authenticatedUser.user);
  const allWords = useSelector(
    (state: RootState) => state.authenticatedUser.words.words
  );

  const userLanguages = useSelector(
    (state: RootState) => state.authenticatedUser.user.languages
  );

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (inputRef && inputRef.current) {
      if (!inputRef.current.value)
        return alert("Please enter a word to translate!");
    }

    if (
      allWords.find(
        (word: any) => word.translations[0].lingo === inputRef.current!.value
      )
    ) {
      alert("Word was already translated!");
    } else {
      const translations = await translateWordToLangs(
        inputRef.current!.value,
        userLanguages
      );
      updateTargetWordAction(translations, user?.id);
    }

    inputRef.current!.value = "";
  };

  return (
    <styles.StyledForm onSubmit={handleSubmit}>
      <styles.Input ref={inputRef} placeholder="word to translate" />
      <styles.Button type="submit" style={{ padding: 0 }}>
        <MdOutlineTranslate size={"1.5rem"} />
      </styles.Button>
    </styles.StyledForm>
  );
};
