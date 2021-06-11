interface IQuestionnaire {
	id?: number;
	title: string;
	statement: string;
	approvalPercentage: number;
	attempts: number;
	items: IQuestionnaireItem[];
}

interface IQuestionnaireItem {
	question: string;
	answers: IAnswer[];
	isMultipleChoice: boolean;
	order: number;
}

interface IAnswer {
	description: string;
	isCorrect: boolean;
}

interface IQuestionnaireHistory {
  idQuestionnaire?: number;
  title?: string;
	statement?: string;
	approvalPercentage?: number;
  limitAttempts?: number;
  attempts?: number;
  percentage?: number;
  // isFinished: boolean;
	responses: IQuestionnaireHistoryItem[]; // attempts === items.length
}

interface IQuestionnaireHistoryItem {
  question: string;
  isMultipleChoice: boolean;
	answers: IHistoryAnswer[];
}

interface IHistoryAnswer extends IAnswer {
	selected: boolean;
}

type QuestionnaireState = {
	questionnaires: IQuestionnaire[];
	questionnaireSelected?: IQuestionnaire;
	loading: boolean;
	error: boolean;
	notification: string;
};
type FormState = {
	// historical: IQueationnaireHistory[];
  questionnaire?: IQuestionnaire;
  actualHistory?: IQuestionnaireHistory;
  currentResponse?: IQuestionnaireHistoryItem;
	responses?: IQuestionnaireHistory;
	currentStep: number;
	totalSteps: number;
  attempts: number;
  notification: string;
  error: boolean;
  loading: boolean;
};

type HistoryState = {
	history: IQueationnaireHistory[];
	historySelected?: IQueationnaireHistory;
	loading: boolean;
	error: boolean;
	notification: string;
};