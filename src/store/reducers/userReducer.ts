import { Action, ActionTypes } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errorMessage: "",
  targetWord: {},
  words: [],
  user: { username: "test", languages: ["de"], streak: 0 },
};

// Home useEffect loads user.languages from settings

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.SIGN_IN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload?.user, ...state.user },
      };
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
        targetWord: action.payload[action.payload.length - 1],
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
      const updatedState = { ...state, targetWord: action.payload };
      return updatedState;

    case "UP_STREAK":
      return {
        ...state,
        user: { ...state.user, streak: state.user.streak + 1 },
      };
    case "RESET_STREAK":
      return {
        ...state,
        user: { ...state.user, streak: 0 },
      };
    default:
      return state;
  }
}
