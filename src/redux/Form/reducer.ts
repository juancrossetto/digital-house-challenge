import * as actionTypes from "./types";

const initialState: FormState = {
  questionnaire: undefined,
  historical: [],
  currentStep: 1,
  totalSteps: 1,
};

const FormReducer = (
  state: FormState = initialState,
  action: actionTypes.FormActions
): FormState => {
  switch (action.type) {
    case actionTypes.SET_PREVIOUS_STEP:
      return {
        ...state,
        currentStep: state.currentStep > 0 ? state.currentStep - 1 : 0,
      };
    case actionTypes.SET_NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case actionTypes.SET_QUESTIONNAIRE:
      return {
        ...state,
        questionnaire: action.payload,
        totalSteps: action.payload.items.length,
      };
    case actionTypes.CLEAN_STATE:
      return {
        ...initialState,
      };
  }
  return state;
};

export default FormReducer;
