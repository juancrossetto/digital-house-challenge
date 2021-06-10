import React, { FC } from 'react';
import { useParams } from 'react-router';
import './HistoryDetailPage.scss';

interface Params {
  id: string;
}

const HistoryDetailPage: FC = () => {
  const { id } = useParams<Params>();

  return (
    <div className="history-detail">
      TO DO {id}
    </div>
  );
}

export default HistoryDetailPage;
