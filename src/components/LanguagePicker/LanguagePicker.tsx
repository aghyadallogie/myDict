import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ActionTypes } from "../../store/actions/types";
import { RootState } from "../../store/reducers";
import { styles } from "./LanguagePicker.styles";

export type Styles = {
  LanguagePicker: any;
  Flag: any;
};

const langs = [
  { code: "de", flag: "fi fi-de" },
  { code: "fr", flag: "fi fi-fr" },
  { code: "it", flag: "fi fi-it" },
  { code: "es", flag: "fi fi-es" },
  { code: "no", flag: "fi fi-no" },
  { code: "bg", flag: "fi fi-bg" },
  { code: "pt", flag: "fi fi-pt" },
  { code: "ru", flag: "fi fi-ru" },
  { code: "tr", flag: "fi fi-tr" },
  { code: "hu", flag: "fi fi-hu" },
  { code: "hr", flag: "fi fi-hr" },
  { code: "gr", flag: "fi fi-gr" },
  { code: "ro", flag: "fi fi-ro" },
  { code: "sy", flag: "fi fi-sy" },
  { code: "jp", flag: "fi fi-jp" },
];

export const LanguagePicker = () => {
  const userLangs: string[] = useSelector(
    (state: RootState) => state.authenticatedUser.user.languages
  );

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
          picked={userLangs.includes(lang.code) ? true : false}
          onClick={() => toggleLanguage(lang.code)}
          className={lang.flag}
        />
      ))}
    </styles.LanguagePicker>
  );
};
