import React, { FC } from 'react';
import { useHistory } from 'react-router';
import Button from '../Button';
import './HistoryIntroCard.scss';

export interface IHistoryIntroCardProps {
  questionnaire: IQuestionnaireHistory;
}

const HistoryIntroCard: FC<IHistoryIntroCardProps> = ({ questionnaire }) => {
  const { push } = useHistory();
  const { idQuestionnaire, title, percentage, approvalPercentage, attempts, limitAttempts } = questionnaire;
  const approved = approvalPercentage <= percentage;

  const handleDetail = () => idQuestionnaire && idQuestionnaire > 0 && push(`/history/${idQuestionnaire}`);
  return (
    <div className="history-intro">
      <p className="history-intro__title">{title}</p>
      <div className='history-intro__status'>
        <p className={`${approved ? 'history-intro__status--approved' : 'history-intro__status--disapproved'}`}>{approved ? 'Aprobado' : 'Desaprobado'} ({percentage}%)</p>
      </div>
      <div className="history-intro__attempts">{attempts} Intentos de {limitAttempts} posibles</div>
      <div className="history-intro__btn-container">
        <Button onClick={() => handleDetail()}>Ver detalle</Button>
      </div>
    </div>
  );
}

export default HistoryIntroCard;