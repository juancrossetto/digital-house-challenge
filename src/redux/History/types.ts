export const GET_HISTORY = "GET_HISTORY";
export const GET_HISTORY_FAILED = "GET_HISTORY_FAILED";
export const GET_HISTORY_SUCCESS = "GET_HISTORY_SUCCESS";

export const CREATE_HISTORY = "CREATE_HISTORY";
export const CREATE_HISTORY_FAILED = "CREATE_HISTORY_FAILED";
export const CREATE_HISTORY_SUCCESS = "CREATE_HISTORY_SUCCESS";

export const CLEAN_STATE = "CLEAN_STATE";
export const RESET_NOTIFICATION = "RESET_NOTIFICATION";

export interface getHistoryAction {
  type: typeof GET_HISTORY;
}

export interface getHistoryFailedAction {
  type: typeof GET_HISTORY_FAILED;
  payload: string;
}

export interface getHistorySuccessAction {
  type: typeof GET_HISTORY_SUCCESS;
  payload: IQuestionnaire[];
}
export interface createHistoryAction {
  type: typeof CREATE_HISTORY;
}

export interface createHistoryFailedAction {
  type: typeof CREATE_HISTORY_FAILED;
  payload: string;
}

export interface createHistorySuccessAction {
  type: typeof CREATE_HISTORY_SUCCESS;
  payload: string;
}

export interface cleanStateAction {
  type: typeof CLEAN_STATE;
}

export interface resetNotificationAction {
  type: typeof RESET_NOTIFICATION;
}

export type HistoryTypes =
  | getHistoryAction
  | getHistoryFailedAction
  | getHistorySuccessAction
  | createHistoryAction
  | createHistoryFailedAction
  | createHistorySuccessAction
  | cleanStateAction
  | resetNotificationAction;

export type HistoryActions = HistoryTypes;
export type HistoryDispatchType = (
  args: HistoryActions
) => HistoryActions;
