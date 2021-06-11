import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Dispatch } from "redux";
import Button from "../../components/Button";
import Question from "../../components/Question";
import Spinner from "../../components/Spinner";
import useNotification from "../../hooks/useNotification";
import {
  setPreviousStepAction,
  setQuestionnaireAction,
  cleanStateAction,
  evaluateAnswersAction,
} from "../../redux/Form/actions";
import { getQuestionnaireByIdAction } from "../../redux/Questionnaire/actions";
import { AppState } from "../../redux/store";
import "./QuestionnairePage.scss";

interface Params {
  id: string;
}
const QuestionnairePage: FC = () => {
  const { id } = useParams<Params>();
  const dispatch: Dispatch<any> = useDispatch();
  const [optionsSelected, setOptionsSelected] = useState<IAnswer[]>([]);
  const { questionnaireSelected, loading } = useSelector(
    (state: AppState) => state.questionnaire
  );
  const { currentStep, totalSteps, loading:formLoading, notification, error: formError , currentResponse} = useSelector(
    (state: AppState) => state.form
  );
  useNotification(formError, notification);

  useEffect(() => {
    return () => {
      dispatch(cleanStateAction());
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id && !questionnaireSelected) {
      dispatch(getQuestionnaireByIdAction(Number(id)));
    }
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (questionnaireSelected) {
      dispatch(setQuestionnaireAction(questionnaireSelected));
      console.log('questionnaireSelected', questionnaireSelected);
    }
    // eslint-disable-next-line
  }, [questionnaireSelected]);

  const handleNextStep = (options: IAnswer[]) => {
    dispatch(evaluateAnswersAction(optionsSelected, options));
    // dispatch(setNextStepAction());
  };

  const handlePreviousStep = () => {
    dispatch(setPreviousStepAction());
  };

  useEffect(() => {
    console.log('optionsSelected', optionsSelected);
    // eslint-disable-next-line
  }, [optionsSelected]);

  return (
    <div className="questionnaire">
      {questionnaireSelected && (
        <>
          <h1 className="questionnaire__title">
            {questionnaireSelected.title}
          </h1>
          <div className="questionnaire__container">
            {questionnaireSelected.items && questionnaireSelected.items.length && (
              <div className="questionnaire__questions">
                {currentResponse ? <Question item={currentResponse} handleCheck={setOptionsSelected} /> : <p>No hay mas preguntas</p>}
                <div className="questionnaire__btn-container">
                  <Button
                    className="questionnaire__btn questionnaire__btn--first"
                    onClick={handlePreviousStep}
                    style={{ width: "20%" }}
                  >
                    Atrás
                  </Button>
                  {currentStep !== totalSteps ? (
                    <Button
                      className="questionnaire__btn questionnaire__btn--last"
                      onClick={() => handleNextStep(questionnaireSelected.items[currentStep - 1].answers)}
                      style={{ width: "20%" }}
                    >
                      Siguiente
                    </Button>
                  ) : (
                    <Button
                      className="questionnaire__btn questionnaire__btn--last questionnaire__btn--finish"
                      onClick={() => alert("terminaste")}
                      style={{ width: "20%" }}
                    >
                      Finalizar
                    </Button>
                  )}
                </div>
                <p className="questionnaire__page">
                  Pregunta {currentStep}/{totalSteps}
                </p>
              </div>
            )}
          </div>
        </>
      )}
      {(loading || formLoading) && <Spinner />}
    </div>
  );
};

export default QuestionnairePage;
