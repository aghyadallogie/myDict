

import { Dispatch } from "redux";
import supabase from "../../config/supabaseClient";
import { ActionTypes } from "./types";
import { Action } from "./types";

export const loadUserAction = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.USER_LOADING, payload: "" });

  const { data, error } = await supabase.from("words").select();

  if (error) {
    console.log(error);
  }

  if (data) {
    return dispatch({
      type: ActionTypes.USER_LOADED,
      payload: data,
    });
  }
  console.log(data);
};

export * as userActions from "./userActions";