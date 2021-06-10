import { useQuery } from "react-query";
import { getAll } from "../services/questionnaireService";

const fetchQuestionnaires = async () => await getAll();

const useQuestionnaires = () => {
  const resp = useQuery<IQuestionnaire[]>(
    "questionnaires",
    fetchQuestionnaires,
    {
      refetchOnWindowFocus: false,
    }
  );

  return { ...resp };
};

export default useQuestionnaires;
