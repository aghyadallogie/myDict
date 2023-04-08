import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { Word } from "../../types";

export interface RootState {
  authenticatedUser: {
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
  // Define other slices of state here
}

const reducers = combineReducers({
  authenticatedUser: userReducer,
});

export default reducers;
// export type RootState = ReturnType<typeof reducers>;
