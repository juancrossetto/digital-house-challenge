import * as actionTypes from "./types";

const initialState: HistoryState = {
  history: [],
  historySelected: undefined,
  loading: false,
  error: false,
  notification: "",
};

const HistoryReducer = (
  state: HistoryState = initialState,
  action: actionTypes.HistoryActions
): HistoryState => {
  switch (action.type) {
    case actionTypes.CREATE_HISTORY:
    case actionTypes.GET_HISTORY:
      return {
        ...state,
        loading: true,
        error: false,
        notification: "",
      };
    case actionTypes.GET_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        history: action.payload,
      };
    case actionTypes.CREATE_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        notification: action.payload,
      };
    case actionTypes.CREATE_HISTORY_FAILED:
    case actionTypes.GET_HISTORY_FAILED:
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

export default HistoryReducer;
