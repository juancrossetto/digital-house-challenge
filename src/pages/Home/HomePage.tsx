import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import QuestionnaireList from "../../components/QuestionnaireList";
import Spinner from "../../components/Spinner";
import useNotification from "../../hooks/useNotification";
import { getAllQuestionnairesAction } from "../../redux/Questionnaire/actions";
import { AppState } from "../../redux/store";
import "./HomePage.scss";

const HomePage: FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { questionnaires, loading, error, notification } = useSelector(
    (state: AppState) => state.questionnaire
  );
  useNotification(error, notification);

  useEffect(() => {
    dispatch(getAllQuestionnairesAction());
     // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      {loading && <Spinner />}
      <QuestionnaireList questionnaires={questionnaires} />
    </div>
  );
};

export default HomePage;
