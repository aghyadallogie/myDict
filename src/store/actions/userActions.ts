import { Dispatch } from "redux";
import { Translation } from "../../components/TargetWord/TargetWord";
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
};

export const updateTargetWordAction =
  (word: Translation[]) => async (dispatch: Dispatch<Action>) => {
    const { data, error } = await supabase
      .from("words")
      .insert([
        {
          created_by: 0,
          translations: word,
        },
      ])
      .select();

    if (error) {
      console.log(error);
    }

    if (data) {
      return dispatch({
        type: ActionTypes.UPDATE_TARGET_WORD,
        payload: data[0],
      });
    }
  };
