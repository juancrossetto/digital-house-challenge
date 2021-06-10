export const SET_NEXT_STEP = "SET_NEXT_STEP";
export const SET_PREVIOUS_STEP = "SET_PREVIOUS_STEP";
export const SET_ATTEMPTS = "SET_ATTEMPTS";
export const SET_QUESTIONNAIRE = "SET_QUESTIONNAIRE";
export const CLEAN_STATE = "CLEAN_STATE";

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

export interface setAttemptsAction {
  type: typeof SET_ATTEMPTS;
}

export interface cleanStateAction {
  type: typeof CLEAN_STATE;
}

export type FormTypes =
  | setNextStepAction
  | setPreviousStepAction
  | setQuestionnaireAction
  | setAttemptsAction
  | cleanStateAction;

export type FormActions = FormTypes;
export type FormDispatchType = (args: FormActions) => FormActions;
