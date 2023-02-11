import { Action, ActionTypes } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errorMessage: "",
  user: { userId: 0, username: "test", languages: ["it", "de"] },
  targetWord: [],
  words: [],
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.USER_LOADING:
      return {
        ...state,
        user: JSON.parse(localStorage.getItem("user") || ""), // maybe swap those
        isLoading: true,
      };

    case ActionTypes.USER_LOADED:
      const targetWord = localStorage.getItem("targetWord") || "[]";
      const loadedState = {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        targetWord: JSON.parse(targetWord) || [],
        words: action.payload,
      };
      return loadedState;

    case ActionTypes.UPDATE_USER_LANGUAGES:
      if (!state.user.languages.includes(action.payload)) {
        const updatedState = {
          ...state,
          user: {
            ...state.user,
            languages: [...state.user.languages, action.payload],
          },
        };
        localStorage.setItem("user", JSON.stringify(updatedState.user));
        return updatedState;
      } else {
        const filtered = state.user.languages.filter(
          (lang) => lang !== action.payload
        );
        const updatedState = {
          ...state,
          user: { ...state.user, languages: filtered },
        };
        localStorage.setItem("user", JSON.stringify(updatedState.user));
        return updatedState;
      }
    case ActionTypes.UPDATE_TARGET_WORD:
      localStorage.setItem("targetWord", JSON.stringify(action.payload));
      const updatedState = { ...state, targetWord: action.payload };
      return updatedState;
    default:
      return state;
  }
}
