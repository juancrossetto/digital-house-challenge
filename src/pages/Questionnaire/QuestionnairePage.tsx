import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Dispatch } from "redux";
import Button from "../../components/Button";
import Question from "../../components/Question";
import Spinner from "../../components/Spinner";
import useNotification from "../../hooks/useNotification";
import {
  setNextStepAction,
  setPreviousStepAction,
  setQuestionnaireAction,
  cleanStateAction,
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
  const [optionsSelected, setOptionsSelected] = useState<string[]>([]);
  const { questionnaireSelected, loading, error, notification } = useSelector(
    (state: AppState) => state.questionnaire
  );
  const { currentStep, totalSteps } = useSelector(
    (state: AppState) => state.form
  );
  useNotification(error, notification);

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
    }
     // eslint-disable-next-line
  }, [questionnaireSelected]);

  const handleNextStep = () => {
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
                <Question item={questionnaireSelected.items[currentStep - 1]} handleCheck={setOptionsSelected} />
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
                      onClick={handleNextStep}
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
      {loading && <Spinner />}
    </div>
  );
};

export default QuestionnairePage;
