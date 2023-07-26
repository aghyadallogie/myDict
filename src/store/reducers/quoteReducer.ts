import { Action, ActionTypes } from "../actions/types";

const initialState = {
    saying: "A wise man once said wise words"
}

export default function (state = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.GET_QUOTE:
            return {...state, saying: action.payload}
        default:
            return state;
    }
}