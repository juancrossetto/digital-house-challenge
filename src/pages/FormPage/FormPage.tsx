import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Dispatch } from "redux";
import QuestionnaireForm from "../../components/QuestionnaireForm";
import Spinner from "../../components/Spinner";
import useNotification from "../../hooks/useNotification";
import {
  cleanStateAction,
  getQuestionnaireByIdAction,
} from "../../redux/Questionnaire/actions";
import { AppState } from "../../redux/store";
import "./FormPage.scss";

interface Params {
  id: string;
}

const FormPage: FC = () => {
  const { id } = useParams<Params>();
  const isAddMode = !id;
  const dispatch: Dispatch<any> = useDispatch();

  const { questionnaireSelected, loading, error, notification } = useSelector(
    (state: AppState) => state.questionnaire
  );
  useNotification(error, notification);

  useEffect(() => {
    return () => {
      dispatch(cleanStateAction());
    };
     // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isAddMode && id) {
      dispatch(getQuestionnaireByIdAction(Number(id)));
    }
     // eslint-disable-next-line
  }, [isAddMode]);

  return (
    <div className="form">
      <h1 className="form__title">
        {isAddMode ? "Creación de Cuestionario" : "Edición de Cuestionario"}
      </h1>
      {(questionnaireSelected || isAddMode) && (
        <QuestionnaireForm questionnaire={questionnaireSelected} />
      )}
      {loading && !isAddMode && <Spinner />}
      {!questionnaireSelected || (error && <p>Algo salió mal</p>)}
    </div>
  );
};

export default FormPage;
