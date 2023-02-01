import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ActionTypes } from "../../store/actions/types";
import { styles } from "./LanguagePicker.styles";

export type Styles = {
  LanguagePicker: any;
  Flag: any;
};

const langs = [
  { code: "de", flag: "de" },
  { code: "fr", flag: "fr" },
  { code: "it", flag: "it" },
  { code: "es", flag: "es" },
  { code: "ja", flag: "ja" },
  { code: "pl", flag: "pl" },
  { code: "pt", flag: "pt" },
  { code: "ru", flag: "ru" },
  { code: "sv", flag: "sv" },
];

export const LanguagePicker = () => {
  const user = useSelector((state: any) => state.authenticatedUser.user);

  const dispatch = useDispatch();

  const toggleLanguage = (code: string) => {
    dispatch({
      type: ActionTypes.UPDATE_USER_LANGUAGES,
      payload: code,
    });
  };

  return (
    <styles.LanguagePicker>
      {langs.map((lang) => (
        <styles.Flag
          key={lang.code}
          picked={user.languages.includes(lang.code) ? true : false}
          onClick={() => toggleLanguage(lang.code)}
        >
          {lang.code}
        </styles.Flag>
      ))}
    </styles.LanguagePicker>
  );
};
