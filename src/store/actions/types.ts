import { AnyAction } from "redux";

export enum ActionTypes {
  USER_LOADED = "USER_LOADED",
  USER_LOADING = "USER_LOADING",
  UPDATE_USER_LANGUAGES = "UPDATE_USER_LANGUAGES",
  UPDATE_TARGET_WORD = "UPDATE_TARGET_WORD",
}

export interface UpdatingTargetWord extends AnyAction {
  type: string;
  payload: any;
}

export type Action = UpdatingTargetWord;
