import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { Word } from "../../types";
import quoteReducer from "./quoteReducer";

export interface RootState {
  authenticatedUser: {
    errorMessage: any;
    // Define the properties of the authenticatedUser slice of state here
    user: {
      id: string;
      username: string;
      languages: [];
      streak: number;
      settings: any
    };
    isAuthenticated: boolean;
    words: any;
    targetWord: Word;
  };
  quote: {
    saying: string
  }
}

const reducers = combineReducers({
  authenticatedUser: userReducer,
  quote: quoteReducer
});

export default reducers;
// export type RootState = ReturnType<typeof reducers>;
