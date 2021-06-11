import * as types from "./types";
import {
  create,
  getAll,
  getById,
  update,
  _delete,
} from "../../services/questionnaireService";

export const getAllQuestionnairesAction = () => {
  return async (dispatch: types.QuestionnaireDispatchType | any) => {
    dispatch({ type: types.GET_ALL_QUESTIONNAIRES });
    try {
      const response = await getAll();
      setTimeout(() => {
        if (response) {
          dispatch({
            type: types.GET_ALL_QUESTIONNAIRES_SUCCESS,
            payload: response,
          });
        } else {
          throw new Error("Respuesta inválida");
        }
      }, 500);
    } catch (error) {
      dispatch({
        type: types.GET_ALL_QUESTIONNAIRES_FAILED,
        payload: `Error al obtener cuestionarios: ${error?.message}`,
      });
    } finally {
      dispatch(resetNotificationAction());
    }
  };
};

export const getQuestionnaireByIdAction = (id: number) => {
  return async (dispatch: types.QuestionnaireDispatchType | any) => {
    dispatch({ type: types.GET_QUESTIONNAIRE_BY_ID });
    try {
      const response = await getById(id);
      setTimeout(() => {
        if (response) {
          dispatch({
            type: types.GET_QUESTIONNAIRE_BY_ID_SUCCESS,
            payload: response,
          });
        } else {
          throw new Error("Respuesta inválida");
        }
      }, 500);
    } catch (error) {
      dispatch({
        type: types.GET_QUESTIONNAIRE_BY_ID_FAILED,
        payload: `Error al obtener el cuestionario: ${error?.message}`,
      });
    } finally {
      dispatch(resetNotificationAction());
    }
  };
};

export const createQuestionnaireAction = (questionnaire: IQuestionnaire, push: any) => {
  return async (dispatch: types.QuestionnaireDispatchType | any) => {
    dispatch({ type: types.CREATE_QUESTIONNAIRE });
    try {
      const resp = await create(questionnaire);
      if (resp) {
        dispatch({
          type: types.CREATE_QUESTIONNAIRE_SUCCESS,
          payload: `Cuestionario ${questionnaire.title} creado correctamente`,
        });
        dispatch(resetNotificationAction());
        push('/config');
      }
    } catch (error) {
      dispatch({
        type: types.CREATE_QUESTIONNAIRE_FAILED,
        payload: `Error al crear cuestionario: ${error?.message}`,
      });
      dispatch(resetNotificationAction());
    } 
  };
};

export const updateQuestionnaireAction = (
  id: number,
  questionnaire: IQuestionnaire
) => {
  return async (dispatch: types.QuestionnaireDispatchType | any) => {
    dispatch({ type: types.UPDATE_QUESTIONNAIRE });
    try {
      const resp = await update(id, questionnaire);
      if (resp) {
        dispatch({
          type: types.UPDATE_QUESTIONNAIRE_SUCCESS,
          payload: `Cuestionario ${questionnaire.title} editado correctamente`,
        });
      }
    } catch (error) {
      dispatch({
        type: types.UPDATE_QUESTIONNAIRE_FAILED,
        payload: `Error al actualizar cuestionario: ${error?.message}`,
      });
    } finally {
      dispatch(resetNotificationAction());
    }
  };
};

export const deleteQuestionnaireAction = (id: number) => {
  return async (dispatch: types.QuestionnaireDispatchType | any) => {
    dispatch({ type: types.DELETE_QUESTIONNAIRE });
    try {
      const resp = await _delete(id);
      if (resp) {
        dispatch({ type: types.DELETE_QUESTIONNAIRE_SUCCESS, payload: id });
      }
    } catch (error) {
      dispatch({
        type: types.DELETE_QUESTIONNAIRE_FAILED,
        payload: `Error al eliminar cuestionario: ${error?.message}`,
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
