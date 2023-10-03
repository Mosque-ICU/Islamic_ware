import React from "react";
import Form from "../Form/Form";
import { handleErrors, handleSuccess } from "@/app/_helpers/web/formatters";
import { FieldsType } from "@/app/_helpers/web/webTypes/FormTypes";
import { requestHandler } from "@/app/_helpers/web/requestHandler";
import PrayersCrud from "@/app/dashboard/prayers/something/PrayersCrud";

let curData = {} as any;

const defaultModel = {
  title: "",
  description: "",
  thumbnail:
    "https://images.pexels.com/photos/2236674/pexels-photo-2236674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const fieldGroupFields = [
  {
    name: "Fajir",
    placeholder: "Fajir",
    required: true,
    maxLength: 90,
    autoFocus: true,
    type: "input",
  },
  {
    name: "description",
    placeholder: "Description",
    type: "textarea",
    maxLength: 500,
  },
  {
    subType: "url",
    label: " Add a thumbnail image for your prayer *",
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

type Props = {
  close: () => void;
  setCurPrayers: (arg0: any) => void;
  publicEstablishmentId: string;
};

function AddPrayer({ close, setCurPrayers, publicEstablishmentId }: Props) {
  const [model, setModel] = React.useState({ ...defaultModel });
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data: {
    content: string;
    establishmentPublicId: string;
  }) => {
    setLoading(true);
    data.content = " ";
    data.establishmentPublicId = publicEstablishmentId;
    curData = data;
    data = {
      title: "hello",
      description: "hello",
      // timesData: { ...data },
    };
    console.log("data" + JSON.stringify(data));

    // return data
    requestHandler({ type: "post", body: data, route: "prayers" }).then(
      (res) => {
        setLoading(false);

        if (!res?.errors) {
          handleSuccess("Prayer created successfully");

          curData.id = res.id;
          curData.createdAt = Date.now();

          setCurPrayers((prev) => [...prev, curData]);
          setModel({ ...defaultModel });
          // removeFromCache('prayers-1')
          return close();
        }

        handleErrors(res);
      }
    );
  };

  return (
    <>
      <div className="modal-center">
        <div className="modal-center-medium h-[95vh] overflow-hidden rounded-md bg-white p-8 shadow-xl">
          <h2 className="text-indigo-600">Add Prayer</h2>

          <p className="mt-6 text-gray-500">
            Provide a title and description for prayer
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
      {/* <PrayersCrud /> */}
    </>
  );
}

export default AddPrayer;
