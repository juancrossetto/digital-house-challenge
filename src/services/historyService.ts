import axios from 'axios';

const API_ENDPOINT = `${process.env.REACT_APP_SERVER_ENDPOINT}/history`;

export const getAll = async (): Promise<IQuestionnaireHistory[]> => {
	const response = await axios.get<IQuestionnaireHistory[]>(API_ENDPOINT);
	return response.data;
};

export const create = async (request: IQuestionnaireHistory): Promise<any> => {
	const response = await axios.post<IQuestionnaireHistory>(API_ENDPOINT, request);
	return response?.data;
};
