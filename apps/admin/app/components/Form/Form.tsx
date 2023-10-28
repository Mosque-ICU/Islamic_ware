import React from "react";
import FormGroup from "./FormGroup";
import { FieldsType } from "@/app/_helpers/web/webTypes/FormTypes";
import Button from "../Button/Button";

type Props = {
  fields: { label?: string; fields: FieldsType[] }[];
  model: any;
  setModel: (model: any) => void;
  loading?: boolean;
  onSubmit?: (model: any) => void;
  className?: string;
  submitLabel?: string;
  cancelLabel?: string;
  onCancel?: () => void | null;
};

function Form({ fields, model, setModel, loading, onSubmit, className, cancelLabel, submitLabel, onCancel = null }: Props) {
  const [startingModel, setStartingModel] = React.useState({} as any);
  const [errors, setErrors] = React.useState({} as any);

  React.useEffect(() => {
    if (model) setStartingModel(model);
  }, []);

  const onSubmitForm = () => {
    let error = false;
    let firstErrKey = "";

    for (const fieldGroup of fields) {
      for (const field of fieldGroup.fields) {
        if (field.required && !model[field.name]) {
          if (!firstErrKey) firstErrKey = field.name;
          setErrors((errors: any) => ({
            ...errors,
            [field.name]: (field.placeholder || field.label || field.name) + " is required",
          }));
          error = true;
        }
      }
    }

    if (error) return scrollError(firstErrKey);

    for (const key of Object.keys(errors)) {
      if (errors[key]) {
        return scrollError(key);
      }
    }

    onSubmit(model);
  };

  const scrollError = (id: string) => {
    const field = document.getElementById(id);
    setTimeout(() => {
      if (field) field.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div
      className={` ${className} flex h-[85%] w-full flex-col overflow-y-auto px-1
    `}
    >
      {fields.map(
        (
          field: {
            fields: any;
            label: string | undefined;
            className: string;
            horizontal: boolean;
          },
          i
        ) => {
          return (
            <FormGroup
              key={field.label || i}
              fields={field.fields}
              horizontal={field.horizontal}
              model={model}
              setModel={setModel}
              errors={errors}
              setErrors={setErrors}
              className={field.className}
            />
          );
        }
      )}
      {onSubmit && (
        <div className="absolute bottom-2 left-7 flex ">
          <Button className="mr-2" loading={loading} onClick={onSubmitForm}>
            {submitLabel || "Submit"}
          </Button>
          {onCancel && (
            <Button variant="secondary" onClick={onCancel}>
              {cancelLabel || "Cancel"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default Form;
