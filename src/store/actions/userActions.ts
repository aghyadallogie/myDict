import { Dispatch } from "redux";
import { Translation } from "../../components/TargetWord/TargetWord";
import supabase from "../../config/supabaseClient";
import { ActionTypes } from "./types";
import { Action } from "./types";

export type Settings = {
  userId: string;
  userLanguages: string[];
};

export type AuthData = {
  email: string;
  password: string;
};

export const registerUserAction =
  ({ email, password }: AuthData) =>
  async (dispatch: Dispatch<Action>) => {
    const { error, data } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.log(error);
    }

    if (data) {
      // console.log("action->", data);

      return dispatch({
        type: ActionTypes.SIGN_IN_USER,
        payload: data,
      });
    }
  };

export const loginUserAction =
  ({ email, password }: AuthData) =>
  async (dispatch: Dispatch<Action>) => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log("action->", data);

      return dispatch({
        type: ActionTypes.SIGN_IN_USER,
        payload: data,
      });
    }
  };

export const loadUserAction =
  (userId?: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.USER_LOADING, payload: "" });

    const { data: words, error: wordsError } = await supabase
      .from("words")
      .select();
    const { data: settings, error: settingsError } = await supabase
      .from("settings")
      .select("*")
      .eq("userId", userId);

    console.log("333", settings);

    const errors = [wordsError, settingsError];

    if (errors.length) {
      console.log(errors);
    }

    if (words) {
      return dispatch({
        type: ActionTypes.USER_LOADED,
        payload: { words, settings },
      });
    }
  };

export const updateSettingsAction =
  (settings: Settings) => async (dispatch: Dispatch<Action>) => {
    const { data, error } = await supabase
      .from("settings")
      .select("*")
      .eq("id", settings.userId);

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
