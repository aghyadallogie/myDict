import axios from "axios";

const translateWordToLang = async (word: string, lang: string) => {
  const response = await axios.get(
    `https://api-free.deepl.com/v2/translate?auth_key=856472cb-2963-6442-c723-ed1f6a07c779:fx&text=${word}&target_lang=${lang}`
  );

  const translation = {
    lang,
    lingo: response.data.translations[0].text,
  };

  return translation;
};

export const translateWordToLangs = async (word: string, langs: any[]) => {
  const wordsPromises = langs.map(
    async (lang: string) => await translateWordToLang(word, lang)
  );

  const translations = await Promise.all(wordsPromises);
  return translations;
};
