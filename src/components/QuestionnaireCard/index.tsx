import React, { FC } from "react";
import "./QuestionnaireCard.scss";
import { useHistory } from "react-router";

export interface QuestionnaireCardProps {
  questionnaire: IQuestionnaire;
}

const QuestionnaireCard: FC<QuestionnaireCardProps> = ({ questionnaire }) => {
  const { push } = useHistory();
  const { id, title, statement, attempts, approvalPercentage } = questionnaire;
  return (
    <div className="card">
      <div className="card__content">
        <h1 className="card__title">{title}</h1>
        <p className="card__text">{statement}</p>
        <p className="card__text">
          Porcentaje de Aprobación:
          <span className="card__text--result">{approvalPercentage}</span>
        </p>
        <p className="card__text">
          Cant. Fallas permitidas:
          <span className="card__text--result">{attempts}</span>
        </p>
        <p className="card__text">
          Cant. Preguntas:
          <span className="card__text--result">
            {questionnaire?.items?.length}
          </span>
        </p>
      </div>
      <button className="card__btn" onClick={() => push(`/questionaire/${id}`)}>
        Comenzar
      </button>
    </div>
  );
};

export default QuestionnaireCard;
