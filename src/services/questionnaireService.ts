import axios from "axios";

const API_ENDPOINT = `${process.env.REACT_APP_SERVER_ENDPOINT}/questionnaires`;

export const getAll = async (): Promise<IQuestionnaire[]> => {
  try {
    const response = await axios.get<IQuestionnaire[]>(API_ENDPOINT);
    return response?.data;
  } catch (error) {
    console.log("logear error getAll:  ", error);
    throw error;
  }
};

export const getById = async (id: number): Promise<IQuestionnaire | any> => {
  try {
    if (!id) return {};
    const response = await axios.get<IQuestionnaire>(`${API_ENDPOINT}/${id}`);
    return response?.data;
  } catch (error) {
    console.log("logear error getById: ", error);
    throw error;
  }
};

export const create = async (request: IQuestionnaire): Promise<any> => {
  try {
    const response = await axios.post<any>(API_ENDPOINT, request);
    return response?.data;
  } catch (error) {
    console.log("logear error create: ", error);
    throw error;
  }
};

export const update = async (
  id: number,
  request: IQuestionnaire
): Promise<any> => {
  try {
    const response = await axios.put<any>(`${API_ENDPOINT}/${id}`, request);
    return response?.data;
  } catch (error) {
    console.log("logear error update: ", error);
    throw error;
  }
};

export const _delete = async (id: number): Promise<any> => {
  try {
    const response = await axios.delete<any>(`${API_ENDPOINT}/${id}`);
    return response?.data;
  } catch (error) {
    console.log("logear error dekete: ", error);
    throw error;
  }
};
