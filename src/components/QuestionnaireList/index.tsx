import React, { FC } from "react";
import "./QuestionnaireList.scss";
import QuestionnaireCard from "../QuestionnaireCard";

export interface QuestionnaireListProps {
  questionnaires?: IQuestionnaire[];
}

const QuestionnaireList: FC<QuestionnaireListProps> = ({ questionnaires }) => {
  return (
    <div className="list">
      {questionnaires && questionnaires.length ? (
        questionnaires.map((q) => (
          <div className="list__item" key={q.id}>
            <QuestionnaireCard questionnaire={q} />
          </div>
        ))
      ) : (
        <p className="list__msg">No se encontraron Cuestionarios</p>
      )}
    </div>
  );
};

export default QuestionnaireList;
