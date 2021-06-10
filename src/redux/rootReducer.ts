import { combineReducers } from "redux";
import FormReducer from "./Form/reducer";
import QuestionnaireReducer from "./Questionnaire/reducer";
import HistoryReducer from "./History/reducer";

const rootReducer = combineReducers({
  questionnaire: QuestionnaireReducer,
  form: FormReducer,
  history: HistoryReducer,
});

export default rootReducer;
