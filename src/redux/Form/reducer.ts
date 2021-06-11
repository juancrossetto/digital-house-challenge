import * as actionTypes from './types';

const initialState: FormState = {
	questionnaire: undefined,
	actualHistory: undefined,
	currentResponse: undefined,
	currentStep: 1,
	totalSteps: 1,
	attempts: 1,
	notification: '',
	loading: false,
	error: true,
};

const FormReducer = (state: FormState = initialState, action: actionTypes.FormActions): FormState => {
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
				error: false,
				notification: 'Bien hecho!',
			};
		case actionTypes.SET_QUESTIONNAIRE:
			let currentResp: IQuestionnaireHistoryItem = {
				question: action.payload.items[0]?.question,
				isMultipleChoice: action.payload.items[0]?.isMultipleChoice,
				answers: [],
			};
			action.payload?.items[0].answers.forEach((item) =>
				currentResp.answers.push({ selected: false, description: item.description, isCorrect: item.isCorrect })
      );
			return {
				...state,
				questionnaire: action.payload,
				actualHistory: {
					idQuestionnaire: state.questionnaire?.id,
					title: state.questionnaire?.title,
					limitAttempts: state.questionnaire?.attempts,
					approvalPercentage: state.questionnaire?.approvalPercentage,
					responses: [],
				},
				currentResponse: currentResp,
				totalSteps: action.payload.items.length,
			};
		case actionTypes.ADD_ATTEMPT:
			return {
				...state,
				attempts: state.attempts + 1,
				error: true,
				notification: 'Fallaste',
			};
		case actionTypes.SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		case actionTypes.SET_NOTIFICATION:
			return {
				...state,
				notification: action.payload,
			};
		case actionTypes.CLEAN_STATE:
			return {
				...initialState,
			};
		case actionTypes.CLEAN_CURRENT_QUESTION:
      let responseReseted = state.currentResponse;
      responseReseted?.answers.map((item) => {
				item.selected = false;
				return item;
			});
			return {
				...state,
				currentResponse: responseReseted,
				error: false,
				notification: '',
			};
	}
	return state;
};

export default FormReducer;
