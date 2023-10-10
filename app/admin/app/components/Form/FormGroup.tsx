"use client";
import React from "react";
import Fields from "./Fields";
import { FieldsType } from "@/app/_helpers/webTypes/FormTypes";

type Props = {
  className?: string;
  fields: FieldsType[];
  model: any;
  horizontal?: boolean;
  setModel: (model: any) => void;
  errors: any;
  setErrors: (errors: any) => void;
  altSetModel?: boolean;
  submitAction?: () => void;
};

function FormGroup({ className, fields, model, horizontal, setModel = () => {}, errors = {}, setErrors = () => {}, altSetModel = false, submitAction }: Props) {
  const [focusedModels, setFocusedModels] = React.useState({} as any);
  const onChange = (
    e: { target: { value: any } },
    field: { name: string | number; maxLength: number; minLength: number; max: number; min: number; subType: string }
  ) => {
    let error = false;

    const value = e?.target ? e.target.value : e;

    if (field?.maxLength && value.length > field.maxLength) {
      setErrors((errors: any) => ({
        ...errors,
        [field.name]: `Max length is ${field.maxLength}`,
      }));
      error = true;
    } else if (field?.minLength && value.length < field.minLength) {
      setErrors((errors: any) => ({
        ...errors,
        [field.name]: `Min length is ${field.minLength}`,
      }));
      error = true;
    } else if (field?.max && value > field.max) {
      setErrors((errors: any) => ({
        ...errors,
        [field.name]: `Max value is ${field.max}`,
      }));
      error = true;
    } else if (field?.min && value < field.min) {
      setErrors((errors: any) => ({
        ...errors,
        [field.name]: `Min value is ${field.min}`,
      }));
      error = true;
    } else if (value && field?.subType === "email" && emailRegex.test(value) === false) {
      setErrors((errors: any) => ({
        ...errors,
        [field.name]: `Invalid email`,
      }));
      error = true;
    } else if (value && field?.subType === "phone" && phoneRegex.test(value) === false) {
      setErrors((errors: any) => ({
        ...errors,
        [field.name]: `Invalid phone number`,
      }));
      error = true;
    } else if (value && field?.subType === "char" && charRegex.test(value) === false) {
      setErrors((errors: any) => ({
        ...errors,
        [field.name]: `Invalid character`,
      }));
      error = true;
    } else if (value && field?.subType === "url" && urlRegex.test(value) === false) {
      setErrors((errors: any) => ({
        ...errors,
        [field.name]: `Invalid url`,
      }));
      error = true;
    }

    if (altSetModel) {
      const curModel = { ...model, [field.name]: value || "" };
      setModel(curModel);
    } else {
      setModel((model: any) => ({
        ...model,
        [field.name]: value || "",
      }));
    }

    !error && errors[field.name] && setErrors((errors: any) => ({ ...errors, [field.name]: "" }));
  };

  return (
    <div className={` flex mt-1 h-full ${className} ${horizontal ? "w-full  flex-row flex-wrap " : "flex-col"}  `}>
      {fields.map((field, i) => {
        if (field.hidden && field.hidden({ model, field, fields })) return null;

        const labelClass = `  ${errors[field.name] ? "text-red-500" : focusedModels[field.name] ? "text-indigo-600" : "text-gray-500"}   ${
          field.labelClass || ""
        }`;

        const showFloatingLabel = field.placeholder && (focusedModels[field.name] || model[field.name]);

        return (
          <div
            key={field.name}
            id={field.name}
            className={`relative ${field.description ? "mb-6" : "mb-5"} flex ${field?.wrapperHorizontal ? "flex-row justify-between" : "flex-col"} ${
              field.wrapperClassName
            }`}
          >
            {field.label ? (
              <label className={` text-[15px] ${labelClass}`} htmlFor={field.name}>
                {field.label + (field.required ? "*" : "")}
              </label>
            ) : (
              showFloatingLabel && (
                <span
                  style={{ zIndex: 99, ...(field.labelStyle || {}) }}
                  className={`slideInUp absolute -top-[4px] left-0 left-2 bg-white px-1 text-xs leading-none ${labelClass}`}
                >
                  {field.placeholder + (field.required ? "*" : "")}
                </span>
              )
            )}
            <Fields
              field={field}
              model={model}
              onChange={onChange}
              errors={errors}
              fields={fields}
              submitAction={submitAction}
              setFocusedModels={setFocusedModels}
              setErrors={setErrors}
              showFloatingLabel={showFloatingLabel}
            />
            {(errors[field.name] || field.description) && (
              <span className={`slideInDown absolute -bottom-[15px] left-0 text-xs ${errors[field.name] ? "form-error text-red-500" : "text-gray-500"}`}>
                {errors[field.name] || field.description}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;
const passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";
const charRegex = /^[a-zA-Z\s]+$/;
const numberRegex = "^[0-9]+$";
const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

export default FormGroup;
