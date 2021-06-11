import React, { ChangeEvent, FC } from "react";
import "./Question.scss";

export interface IQuestionProps {
  item: IQuestionnaireHistoryItem;
  handleCheck: any;
}

const Question: FC<IQuestionProps> = ({ item, handleCheck }) => {
  const { answers, question, isMultipleChoice } = item;

  const handleResponse = (e: ChangeEvent<HTMLInputElement>, option: IAnswer) => {
    if (e.target.checked) {
      handleCheck((oldArray:IAnswer[]) => [...oldArray, option]);
    } else {
      handleCheck((oldArray: IAnswer[]) => [...oldArray.filter((oldOption: IAnswer) => oldOption.description !== option.description)]);
    }
  }
  
  return (
    <div className="question">
      <p className="question__title">
        {question}
      </p>
      <div className="question__answers">
        {answers?.map((answer) => (
          <div className="answers" key={answer.description}>
            <p className="answers__text">- {answer.description}</p>
            <input
              className="answers__type"
              type={isMultipleChoice ? "checkbox" : "radio"}
              name="optionSelected"
              // value={answer.description}
              onChange={(e) => handleResponse(e, answer)}
              defaultChecked={answer.selected}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
