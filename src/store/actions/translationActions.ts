import { Dispatch } from "redux";
import supabase from "../../config/supabaseClient";
import { ActionTypes } from "./types";
import { Action } from "./types";

export const updateTargetWordAction =
  (word: any[]) => async (dispatch: Dispatch<Action>) => {
    const { data, error } = await supabase.from("words").insert([
      {
        created_by: 0,
        translations: word,
      },
    ]);

    if (error) {
      console.log(error);
    }

    if (data) {
      return dispatch({
        type: ActionTypes.UPDATE_TARGET_WORD,
        payload: data,
      });
    }
  };
