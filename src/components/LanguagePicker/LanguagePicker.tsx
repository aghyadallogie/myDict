import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { styles } from "./LanguagePicker.styles";
import { bindActionCreators } from "redux";
import { userActions } from "../../store/actions";

export type Styles = {
  LanguagePicker: any;
  Flag: any;
};

const langs = [
  { code: "de", flag: "fi fi-de" },
  { code: "fr", flag: "fi fi-fr" },
  { code: "it", flag: "fi fi-it" },
  { code: "es", flag: "fi fi-es" },
  { code: "sv", flag: "fi fi-se" },
  { code: "bg", flag: "fi fi-bg" },
  { code: "pt", flag: "fi fi-pt" },
  { code: "ru", flag: "fi fi-ru" },
  { code: "tr", flag: "fi fi-tr" },
  { code: "hu", flag: "fi fi-hu" },
  { code: "el", flag: "fi fi-gr" },
  { code: "pl", flag: "fi fi-pl" },
  { code: "nl", flag: "fi fi-nl" },
  { code: "uk", flag: "fi fi-ua" },
  { code: "ja", flag: "fi fi-jp" },
];

export const LanguagePicker = () => {
  const userLangs: string[] = useSelector(
    // @ts-ignore
    (state: RootState) => state.authenticatedUser.languages
  );
  const user = useSelector((state: RootState) => state.authenticatedUser.user);

  const dispatch = useDispatch();
  const { updateSettingsAction } = bindActionCreators(userActions, dispatch);

  const toggleLanguage = (code: string) => {
    const langExists = userLangs.indexOf(code);

    if (langExists > -1) {
      const filtered = userLangs.filter((lang: string) => lang !== code);
      updateSettingsAction({
        userId: user.id,
        userLanguages: filtered,
      });
    } else {
      updateSettingsAction({
        userId: user.id,
        userLanguages: [...userLangs, code],
      });
    }
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
