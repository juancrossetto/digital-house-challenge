export const SET_NEXT_STEP = "SET_NEXT_STEP";
export const SET_PREVIOUS_STEP = "SET_PREVIOUS_STEP";
// export const SET_ATTEMPTS = "SET_ATTEMPTS";
export const SET_QUESTIONNAIRE = "SET_QUESTIONNAIRE";
export const ADD_ATTEMPT = "ADD_ATTEMPT";
export const CLEAN_STATE = "CLEAN_STATE";
export const SET_LOADING = "SET_LOADING";
export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const CLEAN_CURRENT_QUESTION = "CLEAN_CURRENT_QUESTION";


export interface setNextStepAction {
  type: typeof SET_NEXT_STEP;
}

export interface setPreviousStepAction {
  type: typeof SET_PREVIOUS_STEP;
}

export interface setQuestionnaireAction {
  type: typeof SET_QUESTIONNAIRE;
  payload: IQuestionnaire;
}

// export interface setAttemptsAction {
//   type: typeof SET_ATTEMPTS;
// }

export interface addAttemptAction {
  type: typeof ADD_ATTEMPT;
}

export interface setLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface setNotificationAction {
  type: typeof SET_NOTIFICATION;
  payload: string;
}

export interface cleanCurrentQuestionAction {
  type: typeof CLEAN_CURRENT_QUESTION;
  payload: string;
}

export interface cleanStateAction {
  type: typeof CLEAN_STATE;
}

export type FormTypes =
  | setNextStepAction
  | setPreviousStepAction
  | setQuestionnaireAction
  // | setAttemptsAction
  | addAttemptAction
  | setLoadingAction
  | setNotificationAction
  | cleanCurrentQuestionAction
  | cleanStateAction;

export type FormActions = FormTypes;
export type FormDispatchType = (args: FormActions) => FormActions;
