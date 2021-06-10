export const GET_ALL_QUESTIONNAIRES = "GET_ALL_QUESTIONNAIRES";
export const GET_ALL_QUESTIONNAIRES_FAILED = "GET_ALL_QUESTIONNAIRES_FAILED";
export const GET_ALL_QUESTIONNAIRES_SUCCESS = "GET_ALL_QUESTIONNAIRES_SUCCESS";

export const GET_QUESTIONNAIRE_BY_ID = "GET_QUESTIONNAIRE_BY_ID";
export const GET_QUESTIONNAIRE_BY_ID_FAILED = "GET_QUESTIONNAIRE_BY_ID_FAILED";
export const GET_QUESTIONNAIRE_BY_ID_SUCCESS =
  "GET_QUESTIONNAIRE_BY_ID_SUCCESS";

export const CREATE_QUESTIONNAIRE = "CREATE_QUESTIONNAIRE";
export const CREATE_QUESTIONNAIRE_FAILED = "CREATE_QUESTIONNAIRE_FAILED";
export const CREATE_QUESTIONNAIRE_SUCCESS = "CREATE_QUESTIONNAIRE_SUCCESS";

export const UPDATE_QUESTIONNAIRE = "UPDATE_QUESTIONNAIRE";
export const UPDATE_QUESTIONNAIRE_FAILED = "UPDATE_QUESTIONNAIRE_FAILED";
export const UPDATE_QUESTIONNAIRE_SUCCESS = "UPDATE_QUESTIONNAIRE_SUCCESS";

export const DELETE_QUESTIONNAIRE = "DELETE_QUESTIONNAIRE";
export const DELETE_QUESTIONNAIRE_FAILED = "DELETE_QUESTIONNAIRE_FAILED";
export const DELETE_QUESTIONNAIRE_SUCCESS = "DELETE_QUESTIONNAIRE_SUCCESS";

export const CLEAN_STATE = "CLEAN_STATE";
export const RESET_NOTIFICATION = "RESET_NOTIFICATION";

export interface getALLQuestionnairesAction {
  type: typeof GET_ALL_QUESTIONNAIRES;
}

export interface getALLQuestionnairesFailedAction {
  type: typeof GET_ALL_QUESTIONNAIRES_FAILED;
  payload: string;
}

export interface getALLQuestionnairesSuccessAction {
  type: typeof GET_ALL_QUESTIONNAIRES_SUCCESS;
  payload: IQuestionnaire[];
}

export interface getQuestionnaireByIdAction {
  type: typeof GET_QUESTIONNAIRE_BY_ID;
}

export interface getQuestionnaireByIdFailedAction {
  type: typeof GET_QUESTIONNAIRE_BY_ID_FAILED;
  payload: string;
}

export interface getQuestionnaireByIdSuccessAction {
  type: typeof GET_QUESTIONNAIRE_BY_ID_SUCCESS;
  payload: IQuestionnaire;
}

export interface createQuestionnaireAction {
  type: typeof CREATE_QUESTIONNAIRE;
}

export interface createQuestionnaireFailedAction {
  type: typeof CREATE_QUESTIONNAIRE_FAILED;
  payload: string;
}

export interface createQuestionnaireSuccessAction {
  type: typeof CREATE_QUESTIONNAIRE_SUCCESS;
  payload: string;
}

export interface updateQuestionnaireAction {
  type: typeof UPDATE_QUESTIONNAIRE;
}

export interface updateQuestionnaireFailedAction {
  type: typeof UPDATE_QUESTIONNAIRE_FAILED;
  payload: string;
}

export interface updateQuestionnaireSuccessAction {
  type: typeof UPDATE_QUESTIONNAIRE_SUCCESS;
  payload: string;
}

export interface deleteQuestionnaireAction {
  type: typeof DELETE_QUESTIONNAIRE;
}

export interface deleteQuestionnaireFailedAction {
  type: typeof DELETE_QUESTIONNAIRE_FAILED;
  payload: string;
}

export interface deleteQuestionnaireSuccessAction {
  type: typeof DELETE_QUESTIONNAIRE_SUCCESS;
  payload: number;
}

export interface cleanStateAction {
  type: typeof CLEAN_STATE;
}

export interface resetNotificationAction {
  type: typeof RESET_NOTIFICATION;
}

export type QuestionnaireTypes =
  | getALLQuestionnairesAction
  | getALLQuestionnairesFailedAction
  | getQuestionnaireByIdAction
  | getQuestionnaireByIdFailedAction
  | getQuestionnaireByIdSuccessAction
  | getALLQuestionnairesSuccessAction
  | createQuestionnaireAction
  | createQuestionnaireFailedAction
  | createQuestionnaireSuccessAction
  | updateQuestionnaireAction
  | updateQuestionnaireFailedAction
  | updateQuestionnaireSuccessAction
  | deleteQuestionnaireAction
  | deleteQuestionnaireFailedAction
  | deleteQuestionnaireSuccessAction
  | cleanStateAction
  | resetNotificationAction;

export type QuestionnaireActions = QuestionnaireTypes;
export type QuestionnaireDispatchType = (
  args: QuestionnaireActions
) => QuestionnaireActions;
