import * as actionTypes from "./types";

const initialState: QuestionnaireState = {
  questionnaires: [],
  questionnaireSelected: undefined,
  loading: false,
  error: false,
  notification: "",
};

const QuestionnaireReducer = (
  state: QuestionnaireState = initialState,
  action: actionTypes.QuestionnaireActions
): QuestionnaireState => {
  switch (action.type) {
    case actionTypes.UPDATE_QUESTIONNAIRE:
    case actionTypes.CREATE_QUESTIONNAIRE:
    case actionTypes.DELETE_QUESTIONNAIRE:
    case actionTypes.GET_ALL_QUESTIONNAIRES:
    case actionTypes.GET_QUESTIONNAIRE_BY_ID:
      return {
        ...state,
        loading: true,
        error: false,
        notification: "",
      };
    case actionTypes.GET_ALL_QUESTIONNAIRES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        questionnaires: action.payload,
      };
    case actionTypes.GET_QUESTIONNAIRE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        questionnaireSelected: action.payload,
      };
    case actionTypes.UPDATE_QUESTIONNAIRE_SUCCESS:
    case actionTypes.CREATE_QUESTIONNAIRE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        notification: action.payload,
      };
    case actionTypes.DELETE_QUESTIONNAIRE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        notification: "Cuestionario Eliminado correctamente",
        questionnaires: [
          ...state.questionnaires.filter(
            (questionnaire) => questionnaire.id !== action.payload
          ),
        ],
      };
    case actionTypes.UPDATE_QUESTIONNAIRE_FAILED:
    case actionTypes.CREATE_QUESTIONNAIRE_FAILED:
    case actionTypes.DELETE_QUESTIONNAIRE_FAILED:
    case actionTypes.GET_ALL_QUESTIONNAIRES_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        notification: action.payload,
      };
    case actionTypes.CLEAN_STATE:
      return {
        ...initialState,
      };
    case actionTypes.RESET_NOTIFICATION:
      return {
        ...state,
        notification: "",
      };
  }
  return state;
};

export default QuestionnaireReducer;
