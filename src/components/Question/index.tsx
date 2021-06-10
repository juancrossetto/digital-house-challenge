import React, { ChangeEvent, FC } from "react";
import "./Question.scss";

export interface IQuestionProps {
  item: IQuestionnaireItem;
  handleCheck: any;
}

const Question: FC<IQuestionProps> = ({ item, handleCheck }) => {
  const { order, answers, question, isMultipleChoice } = item;

  const handleResponse = (e: ChangeEvent<HTMLInputElement>, option: string) => {
    if (e.target.checked) {
      handleCheck((oldArray:string[]) => [...oldArray, option]);
    } else {
      handleCheck((oldArray: string[]) => [...oldArray.filter(oldOption => oldOption !== option)]);
    }
  }
  
  return (
    <div key={order} className="question">
      <p className="question__title">
        {question}
      </p>
      <div className="question__answers">
        {answers?.map((answer) => (
          <div className="answers">
            <p className="answers__text">- {answer.description}</p>
            <input
              className="answers__type"
              type={isMultipleChoice ? "checkbox" : "radio"}
              name="optionSelected"
              value={answer.description}
              onChange={(e) => handleResponse(e, answer.description)}
              // checked={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
