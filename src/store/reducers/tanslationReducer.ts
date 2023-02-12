import { Action, ActionTypes } from "../actions/types";

const initialState = {
  targetWord: [],
};

export const translationReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_TARGET_WORD:
      const updatedState = { ...state, targetWord: action.payload };
      return updatedState;
    default:
      return state;
  }
};
