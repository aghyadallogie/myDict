import axios from "axios";
import supabase from "../config/supabaseClient";

const translateWordToLang = async (word: string, lang: string) => {
  const response = await axios.get(
    `https://api-free.deepl.com/v2/translate?auth_key=${process.env.REACT_APP_DEEPL_AUTH_KEY}&text=${word}&target_lang=${lang}`
  );

  const translation = {
    lang,
    lingo: response.data.translations[0].text,
  };

  return translation;
};

export const translateWordToLangs = async (word: string, langs: string[]) => {
  const wordsPromises = ["en", ...langs].map(
    async (lang: string) => await translateWordToLang(word, lang)
  );

  const translations = await Promise.all(wordsPromises);
  return translations;
};

export const getLatestWordHelper = async () => {
  const { data, error } = await supabase.from("words").select();

  if (error) {
    console.log(error);
    return error;
  }

  return data[data.length - 1];
};

export const renderCorrectFlag = (lang: string) => {
  if (lang === "en") return "gb";
  if (lang === "sv") return "se";
  if (lang === "el") return "gr";
  if (lang === "ja") return "jp";
  if (lang === "uk") return "ua";
  return lang;
};
