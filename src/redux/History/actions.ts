import * as types from "./types";
import {
  create,
  getAll,
} from "../../services/historyService";

export const getHistoryAction = () => {
  return async (dispatch: types.HistoryDispatchType | any) => {
    dispatch({ type: types.GET_HISTORY });
    try {
      const response = await getAll();
      setTimeout(() => {
        if (response) {
          dispatch({
            type: types.GET_HISTORY_SUCCESS,
            payload: response,
          });
        } else {
          throw new Error("Respuesta inválida");
        }
      }, 500);
    } catch (error) {
      dispatch({
        type: types.GET_HISTORY_FAILED,
        payload: `Error al obtener historial: ${error?.message}`,
      });
    } finally {
      dispatch(resetNotificationAction());
    }
  };
};

export const createhistoryAction = (questionnaire: IQuestionnaireHistory) => {
  return async (dispatch: types.HistoryDispatchType | any) => {
    dispatch({ type: types.CREATE_HISTORY });
    try {
      const resp = await create(questionnaire);
      setTimeout(() => {
        if (resp) {
          dispatch({
            type: types.CREATE_HISTORY_SUCCESS,
            payload: `Cuestionario ${questionnaire.title} realizado almacenado correctamente`,
          });
        }
      }, 500);
    } catch (error) {
      dispatch({
        type: types.CREATE_HISTORY_FAILED,
        payload: `Error al guardar el cuestionario realizado: ${error?.message}`,
      });
    } finally {
      dispatch(resetNotificationAction());
    }
  };
};

export const cleanStateAction = () => ({
  type: types.CLEAN_STATE,
});

export const resetNotificationAction = () => ({
  type: types.RESET_NOTIFICATION,
});
