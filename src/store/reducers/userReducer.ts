import { Word } from "../../types";
import { Action, ActionTypes } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errorMessage: "",
  targetWord: {},
  languages: ["de"],
  words: [],
  user: { username: "", languages: ["de"], streak: 0 },
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.SIGN_IN_USER:
      const newState = {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload?.user, ...state.user },
      };
      localStorage.setItem("user", JSON.stringify(newState.user));
      return newState;
    case ActionTypes.USER_LOADING:
      return {
        ...state,
        user: JSON.parse(localStorage.getItem("user") || ""),
        isLoading: true,
      };

    case ActionTypes.USER_LOADED:
      const loadedState = {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        targetWord: action.payload.words[action.payload.words.length - 1],
        words: action.payload,
        languages: action.payload.settings,
        user: { ...state.user, languages: action.payload.settings },
      };
      localStorage.setItem("user", JSON.stringify(loadedState.user));
      return loadedState;

    case ActionTypes.UPDATE_USER_LANGUAGES:
      if (!state.user.languages.includes(action.payload.userSettings.at(-1))) {
        const updatedState = {
          ...state,
          user: {
            ...state.user,
            languages: [
              ...state.user.languages,
              action.payload.userSettings.at(-1),
            ],
          },
        };
        localStorage.setItem("user", JSON.stringify({ ...updatedState.user }));
        return updatedState;
      } else {
        const updatedState = {
          ...state,
          user: { ...state.user, languages: action.payload.userSettings },
        };
        localStorage.setItem("user", JSON.stringify(updatedState.user));
        return updatedState;
      }

    case ActionTypes.UPDATE_TARGET_WORD:
      const updatedState = { ...state, targetWord: action.payload };
      return updatedState;

    case ActionTypes.DELETE_WORD_SUCCESS:
      // @ts-ignore
      const filteredWords = state.words.words.filter(
        (word: Word) => word.id !== action.payload
      );

      return { ...state, words: { words: filteredWords } };

    case ActionTypes.UP_STREAK:
      return {
        ...state,
        user: { ...state.user, streak: state.user.streak + 1 },
      };

    case ActionTypes.RESET_STREAK:
      return {
        ...state,
        user: { ...state.user, streak: 0 },
      };

    case ActionTypes.LOGOUT_USER:
      // should not be removed but updated to nullify id
      localStorage.removeItem("user");
      return initialState;

    case ActionTypes.AUTH_ERROR:
      return { ...state, errorMessage: action.payload.message };

    default:
      return state;
  }
}
