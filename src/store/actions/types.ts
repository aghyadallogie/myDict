import { AnyAction } from "redux";

export enum ActionTypes {
  USER_LOADED = "USER_LOADED",
  USER_LOADING = "USER_LOADING",
  UPDATE_USER_LANGUAGES = "UPDATE_USER_LANGUAGES",
  UPDATE_TARGET_WORD = "UPDATE_TARGET_WORD",
  SIGN_IN_USER = "SIGN_IN_USER",
  LOGOUT_USER = "LOGOUT_USER",
  AUTH_ERROR = "AUTH_ERROR",
  UP_STREAK = "UP_STREAK",
  RESET_STREAK = "RESET_STREAK",
  DELETE_WORD_SUCCESS = "DELETE_WORD_SUCCESS",
}

export interface UpdatingTargetWord extends AnyAction {
  type: string;
  payload: any;
}

export type Action = UpdatingTargetWord;
