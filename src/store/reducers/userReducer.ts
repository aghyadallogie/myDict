import { Action, ActionTypes } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errorMessage: "",
  targetWord: {},
  words: [],
  user: { username: "", languages: ["de"], streak: 0 },
};

// Home useEffect loads user.languages from settings

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
      console.log("ppp", action.payload);
      return { ...state, errorMessage: action.payload.message };

    default:
      return state;
  }
}
