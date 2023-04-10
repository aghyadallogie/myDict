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
      return dispatch({
        type: ActionTypes.AUTH_ERROR,
        payload: error,
      });
    }

    if (data) {
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
      .select()
      .eq("created_by", userId);

    const { data: settings, error: settingsError } = await supabase
      .from("settings")
      .select()
      .eq("userId", userId);

    const errors = [wordsError, settingsError];

    if (errors[0]) {
      console.log(errors);
    }

    if (words) {
      return dispatch({
        type: ActionTypes.USER_LOADED,
        payload: { words, settings: settings![0]?.userSettings },
      });
    }
  };

export const updateSettingsAction =
  (settings?: Settings) => async (dispatch: Dispatch<Action>) => {

    console.log(settings);

    const { data, error } = await supabase
      .from("settings")
      .update({ userSettings: { languages: settings?.userLanguages } })
      .eq("userId", settings?.userId);

    if (error) {
      console.log(error);
    }

    console.log(data);
    

    if (data) {
      return dispatch({
        type: ActionTypes.UPDATE_USER_LANGUAGES,
        payload: data,
      });
    }
  };

export const updateTargetWordAction =
  (word: Translation[], userId: string) => async (dispatch: Dispatch<Action>) => {
    const { data, error } = await supabase
      .from("words")
      .insert([
        {
          created_by: userId,
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
