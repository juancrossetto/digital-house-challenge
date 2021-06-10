import React, { Dispatch, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HistoryIntroCard from '../../components/HistoryIntroCard';
import Spinner from '../../components/Spinner';
import useNotification from '../../hooks/useNotification';
import { getHistoryAction } from '../../redux/History/actions';
import { cleanStateAction } from '../../redux/Questionnaire/actions';
import { AppState } from '../../redux/store';
import './HistoryPage.scss';

const HistoryPage: FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const { history, loading, error, notification } = useSelector(
    (state: AppState) => state.history
  );
  useNotification(error, notification);

  useEffect(() => {
    return () => {
      dispatch(cleanStateAction());
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(getHistoryAction());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="history">
      <div className="history__content">
        {history ?
          history.map(q => <HistoryIntroCard questionnaire={q} />)
          :
          <p className="history__no-data"></p>}
      </div>
      {loading && <Spinner />}
    </div>
  );
}

export default HistoryPage;
