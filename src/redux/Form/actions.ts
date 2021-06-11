import * as types from './types';

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

// export const setAttempsAction = () => ({
// 	type: types.SET_ATTEMPTS,
// });

export const addAttempAction = () => ({
	type: types.ADD_ATTEMPT,
});

export const clearCurrentQuestionAction = () => ({
	type: types.CLEAN_CURRENT_QUESTION,
});

export const cleanStateAction = () => ({
	type: types.CLEAN_STATE,
});

export const evaluateAnswersAction = (optionsSelected: IAnswer[], allOptions: IAnswer[]) => {
  return async (dispatch: types.FormDispatchType | any) => {
    dispatch({ type: types.SET_LOADING, payload: true });
    try {
      if (
        allOptions.filter((o) => o.isCorrect).length === optionsSelected.length &&
        !optionsSelected.some((option) => option.isCorrect === false)
      ) {
        dispatch(setNextStepAction());
      } else {
        dispatch(addAttempAction());
        setTimeout(() => {
          dispatch(clearCurrentQuestionAction());
        }, 200);
      }
    } catch (error) {
      
    } finally {
      dispatch({ type: types.SET_LOADING, payload: false });
    }
	
	};
};
