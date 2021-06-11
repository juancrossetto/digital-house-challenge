import React, { FC, useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";
import "./AnswersSection.scss";
import Button from "../Button";

interface IAnswersSection {
  item: any;
  handleDescriptionChange: any;
  handleIsCorrectChange: any;
  questionIndex: number;
  control: any;
  register: any;
  errors: any;
  isMultipleChoice: boolean;
  isReadOnly: boolean;
}
const AnswersSection: FC<IAnswersSection> = ({
  item,
  handleDescriptionChange,
  handleIsCorrectChange,
  questionIndex,
  control,
  register,
  errors,
  isMultipleChoice,
  isReadOnly = false,
}) => {
  const [questionsUpdated, setQuestionsUpdated] = useState<any>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: `items[${questionIndex}].answers`,
  });

  useEffect(() => {
    setQuestionsUpdated([...fields]);
  }, [fields]);

  return (
    <div className="option">
      {fields.map((answer: any, k) => {
        return (
          <div className="option__container" key={answer.id}>
            <label className="option__label">Respuesta {k + 1}</label>
            <div>
              <input
                className="form__input option__input"
                {...register(`items.${questionIndex}.answers[${k}].description`)}
                defaultValue={answer.description}
                onChange={(e) => handleDescriptionChange(questionIndex, k, e.target.value)}
                disabled={isReadOnly}
              />{" "}
              <div className="form__validation-message">
                {errors.items &&
                  errors.items[questionIndex] &&
                  errors.items[questionIndex].answers &&
                  errors.items[questionIndex].answers[k] &&
                  errors.items[questionIndex].answers[k].description && (
                    <span className="option__error">
                      {errors.items[questionIndex].answers[k].description.message}
                    </span>
                  )}
              </div>
            </div>
            <label className="option__label">¿Correcta?</label>
            {isMultipleChoice ?
              <input
                className="option__type"
                type="checkbox"
                {...register(`items.${questionIndex}.answers[${k}].isCorrect`)}
                name={`items.${questionIndex}.answers[${k}].isCorrect`}
                checked={answer.isCorrect}
                onChange={() => handleIsCorrectChange(questionIndex, k)}
                disabled={isReadOnly}
              />
              :
              <input
                className="option__type"
                type="radio"
                {...register(`items.${questionIndex}.answers[${k}].isCorrect`)}
                name={`items.${questionIndex}.answers[${k}].isCorrect`}
                onChange={() => handleIsCorrectChange(questionIndex, k)}
                checked={answer.isCorrect}
                value={answer.isCorrect}
                disabled={isReadOnly}
              />
            }
            <div className="option__btn-container">
              {fields.length > 0 && (
                <Button
                  type="button"
                  className="option__btn"
                  onClick={() => remove(k)}
                >
                  -
                </Button>
              )}
            </div>
          </div>
        );
      })}
      <div className="option__btn-container option__btn-container--add">
        <Button
          type="button"
          className="option__btn--add"
          onClick={() =>
            append({
              description: "",
              isCorrect: false,
            })
          }
        >
          Agregar respuesta
        </Button>
      </div>
    </div>
  );
};

export default React.memo(AnswersSection);
