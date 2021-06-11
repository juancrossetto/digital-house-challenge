import React from "react";
import renderer from "react-test-renderer";
import HistoryIntroCard from ".";

const mockQuestionnaireHistory: IQuestionnaireHistory = {
  attempts: 20,
  limitAttempts: 30,
  approvalPercentage: 80,
  statement: "Descripción del test",
  title: "Cuestionario Historial test",
  idQuestionnaire: 1,
  percentage: 90,
  responses: [
    {
      answers: [
        {
          selected: true,
          description: "Test 1",
          isCorrect: true
        },
        {
          selected: false,
          description: "Test 2",
          isCorrect: true
        },
        {
          selected: false,
          isCorrect: false,
          description: "Test 3"
        }
      ],
      isMultipleChoice: true,
      question: "¿Cual es el test correcto?"
    },
    {
      answers: [
        {
          selected: false,
          isCorrect: true,
          description: "Si"
        },
        {
          selected: true,
          isCorrect: false,
          description: "No"
        },
      ],
      isMultipleChoice: false,
      question: "¿Este challenge esta para pasar?"
    }
  ],
};
it("<HistoryIntroCard /> renders correctly", () => {
  const tree = renderer.create(<HistoryIntroCard questionnaire={mockQuestionnaireHistory} />).toJSON();
  expect(tree).toMatchSnapshot();
});
