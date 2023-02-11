import { combineReducers } from "redux";
import { translationReducer } from "./tanslationReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  authenticatedUser: userReducer,
  translations: translationReducer 
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
