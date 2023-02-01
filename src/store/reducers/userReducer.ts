import { Action, ActionTypes } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errorMessage: "",
  user: { userId: 0, username: "test", languages: ["it", "de"] },
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
      const loadedState = {
        ...state,
        isAuthenticated: true,
        isLoading: false,
      };
      return loadedState;

    case ActionTypes.UPDATE_USER_LANGUAGES:
      if (!state.user.languages.includes(action.payload)) {
        return {
          ...state,
          user: {
            ...state.user,
            languages: [...state.user.languages, action.payload],
          },
        };
      } else {
        const filtered = state.user.languages.filter(
          (lang) => lang !== action.payload
        );
        return {
          ...state,
          user: { ...state.user, languages: filtered },
        };
      }
    default:
      return state;
  }
}
