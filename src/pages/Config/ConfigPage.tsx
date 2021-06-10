import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Dispatch } from "redux";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import {
  deleteQuestionnaireAction,
  getAllQuestionnairesAction,
} from "../../redux/Questionnaire/actions";
import { AppState } from "../../redux/store";
import "./ConfigPage.scss";
import useNotification from "../../hooks/useNotification";

const ConfigPage: FC = () => {
  const { push } = useHistory();
  const dispatch: Dispatch<any> = useDispatch();
  const { questionnaires, loading, error, notification } = useSelector(
    (state: AppState) => state.questionnaire
  );
  useNotification(error, notification);

  useEffect(() => {
    dispatch(getAllQuestionnairesAction());
    // eslint-disable-next-line
  }, []);

  const handleRedirection = (id?: number) =>
    id && id > 0 ? push(`/form/${id}`) : push("/form");

  const handleDelete = (id: number) => dispatch(deleteQuestionnaireAction(id));

  return (
    <div className="config">
      <Table
        data={questionnaires}
        handleRedirection={handleRedirection}
        handleDelete={handleDelete}
      />
      <Button className="config__btn" onClick={() => handleRedirection()}>
        Nuevo cuestionario
      </Button>
      {loading && <Spinner />}
    </div>
  );
};

export default ConfigPage;
