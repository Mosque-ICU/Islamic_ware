import React from "react";
import Form from "../Form/Form";
import { FieldsType } from "@/app/_helpers/web/webTypes/FormTypes";
import { requestHandler } from "@/app/_helpers/web/requestHandler";
import { handleErrors, handleSuccess } from "@/app/_helpers/web/formatters";

let curData = {} as any;

const defaultModel = {
  title: "",
  description: "",
  thumbnail: "https://images.pexels.com/photos/2236674/pexels-photo-2236674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const fieldGroupFields = [
  {
    name: "title",
    placeholder: "Title",
    required: true,
    maxLength: 90,
    autoFocus: true,
    type: "input",
    description: "Title of the prayer screen",
  },
  {
    name: "description",
    placeholder: "Description",
    required: true,
    type: "textarea",
    maxLength: 500,
  },
  {
    subType: "url",
    label: " Add a thumbnail image for your prayer screen",
    placeholder: "Thumbnail",
    required: true,
    name: "thumbnail",
    type: "input",
    maxLength: 500,
  },
  {
    type: "custom",
    component({ model, field, fields }) {
      return (
        <img
          src={model.thumbnail}
          alt="thumbnail"
          className=" mb-5 mt-4  h-[30vh] w-full rounded-md border border-gray-300 object-cover p-1 transition duration-150 ease-in-out focus:border-indigo-500 focus:outline-none sm:text-sm sm:leading-5"
        />
      );
    },
  },
  {
    type: "select",
    name: "template",

    placeholder: "Select a template",
    options: [
      { label: "Template 1", value: "template1" },
      { label: "Template 2", value: "template2" },
    ],
  },
] as FieldsType[];

function AddPrayerScreen({ close, setCurScreens, establishmentPublicId }) {
  const [model, setModel] = React.useState({ ...defaultModel });
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    data.images = JSON.stringify([data.thumbnail]);
    data.establishmentPublicId = establishmentPublicId;
    delete data.thumbnail;
    curData = data;

    requestHandler({ type: "post", route: "prayerScreen", body: data })
      .then((res) => {
        setLoading(false);
        if (res.success) {
          curData.id = res.data.id;
          curData.images = JSON.parse(curData.images);
          curData.createdAt = Date.now();

          setCurScreens((prev) => [...prev, curData]);
          handleSuccess("Prayer Screen Created");
          setModel({ ...defaultModel });
          return close();
        }
        handleErrors(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // createPrayerTimesScreen({ variables: { input: data } });
    try {
    } catch (error) {
      // toast.error(error.message)
    }
  };

  return (
    <>
      <div className="modal-center">
        <div className="modal-center-medium h-[95vh] overflow-hidden rounded-md bg-white p-8 shadow-xl">
          <h2 className="text-indigo-600 mx-1">Add Prayer Screen</h2>

          <p className="mt-6 text-gray-500 mx-1">
            Provide a title and description for your prayer screen. You will be able to additionally customise the screen and add prayers times once the screen
            has been created.
          </p>

          <Form
            className="mt-4 "
            onSubmit={onSubmit}
            model={model}
            setModel={setModel}
            loading={loading}
            fields={[{ fields: fieldGroupFields }]}
            onCancel={close}
          />
        </div>
      </div>
      <div onClick={close} className="modal-overlay"></div>
    </>
  );
}

export default AddPrayerScreen;
