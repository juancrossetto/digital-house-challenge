import * as types from "./types";

export const setPreviousStepAction = () => ({
  type: types.SET_PREVIOUS_STEP,
});

export const setNextStepAction = () => ({
  type: types.SET_NEXT_STEP,
});

export const setQuestionnaireAction = (questionnaire: IQuestionnaire) => ({
  type: types.SET_QUESTIONNAIRE,
  payload: questionnaire,
});

export const setAttempsAction = () => ({
  type: types.SET_ATTEMPTS,
});

export const cleanStateAction = () => ({
  type: types.CLEAN_STATE,
});
