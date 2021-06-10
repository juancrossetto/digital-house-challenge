import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "../Button";
import Spinner from "../Spinner";
import QuestionsSection from "../QuestionsSection";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import "./QuestionnaireForm.scss";
import { AppState } from "../../redux/store";
import {
  createQuestionnaireAction,
  updateQuestionnaireAction,
} from "../../redux/Questionnaire/actions";

interface Params {
  id: string;
}

export interface QuestionnaireFormProps {
  questionnaire?: IQuestionnaire | any;
}

const QuestionnaireForm: FC<QuestionnaireFormProps> = ({ questionnaire }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const { loading, error } = useSelector(
    (state: AppState) => state.questionnaire
  );

  const { id } = useParams<Params>();
  const isAddMode = !id;
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("El titulo es obligatorio"),
    statement: Yup.string().required("El enunciado es obligatorio"),
    approvalPercentage: Yup.number()
      .typeError("El % de Aprobación es obligatorio")
      .min(0, "El % de Aprobación no puede menor a 0%")
      .max(100, "El % de Aprobación no puede ser mayor a 100%"),
    attempts: Yup.number()
      .typeError("La cantidad de intentos es obligatoria")
      .min(0, "La cantidad de intentos no puede menor a 0")
      .max(100, "La cantidad de intentos no puede ser mayor a 100"),
    items: Yup.array()
      .of(
        Yup.object().shape({
          question: Yup.string().required("La pregunta es es obligatoria"),
          order: Yup.string()
            .required("El orden es obligatorio")
            .min(0, "El orden no puede menor a 0"),
          isMultipleChoice: Yup.boolean(),
          answers: Yup.array()
            .of(
              Yup.object().shape({
                description: Yup.string().required(
                  "La descripción es obligatoria"
                ),
                isCorrect: Yup.boolean(),
              })
            )
            .min(1, "Es requerida por lo menos una respuesta por pregunta"),
        })
      )
      .min(1, "Es requerida por lo menos una pregunta"),
  });
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: questionnaire,
  });

  const onSubmit: SubmitHandler<IQuestionnaire> = (data: any) => {
    data?.items.map((item: any, i:number) => {
      item.answers?.forEach((answer: any, k:number) => {
        console.log('pre cambio', answer.description, answer.isCorrect);
        // if (item.isMultipleChoice) {
          answer.isCorrect = ['on', 'true', true].includes(answer.isCorrect) ? true : false;
        // } else {
        //   console.log('es single choice?', answer);
        //   answer.isCorrect = k === 0 ?  true : false;
        // }
      });
    });
    
    console.log("data", data);
    if (isAddMode) {
      dispatch(createQuestionnaireAction(data));
    } else {
      dispatch(updateQuestionnaireAction(Number(id), data));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__field-container">
        <div className="form__input-container">
          <label className="form__label"> Titulo: </label>
          <input {...register("title")} className="form__input" />
        </div>
        <div className="form__validation-message">
          {errors.title && (
            <span className="form__error">{errors.title.message}</span>
          )}
        </div>
      </div>
      <div className="form__field-container">
        <div className="form__input-container">
          <label className="form__label"> Enunciado: </label>
          <textarea
            {...register("statement")}
            className="form__input form__input--area"
            rows={5}
            cols={50}
          />
        </div>
        <div className="form__validation-message">
          {errors.statement && (
            <span className="form__error">{errors.statement.message}</span>
          )}
        </div>
      </div>
      <div className="form__field-container">
        <div className="form__input-container">
          <label className="form__label"> Porcentaje Aprobación: </label>
          <input
            type="number"
            {...register("approvalPercentage")}
            className="form__input"
          />
        </div>
        <div className="form__validation-message">
          {errors.approvalPercentage && (
            <span className="form__error">
              {errors.approvalPercentage.message}
            </span>
          )}
        </div>
      </div>
      <div className="form__field-container">
        <div className="form__input-container">
          <label className="form__label"> Cant. intentos permitidos: </label>
          <input
            type="number"
            {...register("attempts")}
            className="form__input"
          />
        </div>
        <div className="form__validation-message">
          {errors.attempts && (
            <span className="form__error">{errors.attempts.message}</span>
          )}
        </div>
      </div>
      <div className="questions">
        <QuestionsSection
          {...{ control, register, errors }}
          isReadOnly={false}
        />
        {errors && errors.items && (
          <span className="question__error">{errors.items.message}</span>
        )}
      </div>
      <div className="form__btn-container">
        <Button className="form__btn">{isAddMode ? "Crear" : "Editar"}</Button>
        {error && <span className="questionnaire__error">{error}</span>}
      </div>
      {(isSubmitting || loading) && <Spinner />}
    </form>
  );
};

export default React.memo(QuestionnaireForm);
