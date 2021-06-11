import React, { FC, useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";
import AnswersSection from "../AnswersSection";
import "./QuestionsSection.scss";
import "../QuestionnaireForm/QuestionnaireForm.scss";
import Button from "../Button";

interface IQuestionsSection {
  control: any;
  register: any;
  errors: any;
  isReadOnly: boolean;
}
const QuestionsSection: FC<IQuestionsSection> = ({
  control,
  register,
  errors,
  isReadOnly = false,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const [itemsUpdated, setitemsUpdated] = useState<any[]>([]);
  const initialQuestionValue: IQuestionnaireItem = {
    answers: [],
    isMultipleChoice: false,
    order: fields.length + 1,
    question: "",
  };

  useEffect(() => {
    setitemsUpdated([...fields]);
  }, [fields]);
  
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    let itemsToUpdate = [...itemsUpdated];
    if (itemsToUpdate[index]) {
      itemsToUpdate[index].isMultipleChoice = !itemsToUpdate[index].isMultipleChoice;
      setitemsUpdated(itemsToUpdate);
    }
  };

  const handleDescriptionChange = (index: number, subIndex: number, value: string) => {
    let itemsToUpdate = [...itemsUpdated];
    if (itemsToUpdate[index] && itemsToUpdate[index].answers && itemsToUpdate[index].answers[subIndex]) {
      itemsToUpdate[index].answers[subIndex].description = value;
      setitemsUpdated(itemsToUpdate);
    }
  };

  const handleIsCorrectChange = (index: number, subIndex: number) => {
    let itemsToUpdate = [...itemsUpdated];
    if (itemsToUpdate[index] && itemsToUpdate[index].answers && itemsToUpdate[index].answers[subIndex]) {
      const actualValue = itemsToUpdate[index].answers[subIndex].isCorrect || false;
      if(itemsToUpdate[index].isMultipleChoice) {
        itemsToUpdate[index].answers[subIndex].isCorrect = !actualValue;
      } else {
        itemsToUpdate[index].answers.forEach((itm: any, k:number) => {
          itm.isCorrect = k === subIndex ?  true : false;
        });
      }
      setitemsUpdated(itemsToUpdate);
    }
  };
  
  console.log('errors', errors);
  return (
    <>
      <ul>
        {fields.map((item: any, index) => {
          return (
            <div key={item.id}>
              <div className="question-section" key={item.id}>
                <Button
                  type="button"
                  className="question-section__btn question-section__btn--delete"
                  onClick={(e) => remove(index)}
                  title="Eliminar Pregunta"
                >
                  X
                </Button>
                <div className="form__field-container">
                  <div className="form__input-container">
                    <label className="form__label question-section__label">
                      {" "}
                      Pregunta {index + 1}:{" "}
                    </label>
                    <input
                      {...register(`items.${index}.question`)}
                      className="form__input question-section__input"
                      disabled={isReadOnly}
                      defaultValue={item.question}
                    />
                  </div>
                  <div className="form__validation-message">
                    {errors.items &&
                      errors.items[index] &&
                      errors.items[index].question && (
                        <span className="question-section__error">
                          {errors.items[index].question.message}
                        </span>
                      )}
                  </div>
                </div>
                <div className="form__field-container">
                  <div className="form__input-container">
                    <label className="form__label question-section__label">
                      Tipo:
                    </label>
                    <select
                      {...register(`items.${index}.isMultipleChoice`)}
                      className="question-section__type"
                      onChange={(e) => handleTypeChange(e, index)}
                      disabled={isReadOnly}
                      defaultValue={item.isMultipleChoice ? 'true' : 'false'}
                    >
                      <option value={"false"}>Single Choice</option>
                      <option value={"true"}>Multiple Choice</option>
                    </select>
                  </div>
                </div>
                <div className="form__field-container">
                  <div className="form__input-container">
                    <label className="form__label question-section__label">
                      Orden:
                    </label>
                    <input
                      type="number"
                      {...register(`items.${index}.order`)}
                      className="form__input question-section__input"
                      disabled={isReadOnly}
                      defaultValue={item.order}
                    />
                  </div>
                  <div className="form__validation-message">
                    {errors.items &&
                      errors.items[index] &&
                      errors.items[index].order && (
                        <span className="question-section__error">
                          {errors.items[index].order.message}
                        </span>
                      )}
                  </div>
                </div>
              </div>
              <div className="answer">
                <AnswersSection
                  item={itemsUpdated[index]}
                  handleDescriptionChange={handleDescriptionChange}
                  handleIsCorrectChange={handleIsCorrectChange}
                  questionIndex={index}
                  {...{ control, register }}
                  errors={errors}
                  isMultipleChoice={itemsUpdated[index]?.isMultipleChoice || false}
                  isReadOnly={isReadOnly}
                />
              </div>
              {errors.items && errors.items[index] && (
                <span className="question-section__error">
                  {errors.items[index].answers.message}
                </span>
              )}
            </div>
          );
        })}
      </ul>

      <section>
        <div className="questions__btn-container">
          <Button
            type="button"
            className="questions__btn-add"
            onClick={() => append(initialQuestionValue)}
          >
            Nueva Pregunta
          </Button>
        </div>
      </section>
    </>
  );
};

export default React.memo(QuestionsSection);
