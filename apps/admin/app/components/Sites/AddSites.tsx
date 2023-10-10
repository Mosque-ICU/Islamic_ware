import React from "react";
import Form from "../Form/Form";
import { handleSuccess, handleErrors } from "@/app/_helpers/web/formatters";
import { removeFromCache, requestHandler } from "@/app/_helpers/web/requestHandler";
import { FieldsType } from "@/app/_helpers/web/webTypes/FormTypes";

let curData = {} as any;

const defaultModel = {
  label: "",
  description: "",
  thumbnail: "https://images.pexels.com/photos/2236674/pexels-photo-2236674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const fieldGroupFields = [
  {
    name: "label",
    placeholder: "Title",
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
    label: " Add a thumbnail image for your site",
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
] as FieldsType[];

type Props = {
  close: () => void;
  setCurSites: (arg0: any) => void;
  publicEstablishmentId: string;
};

function AddSites({ close, setCurSites, publicEstablishmentId }: Props) {
  const [model, setModel] = React.useState({ ...defaultModel });
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data: { content: string; establishmentPublicId: string }) => {
    setLoading(true);
    data.establishmentPublicId = publicEstablishmentId;
    curData = data;
    requestHandler({ type: "post", route: "sites", body: data }).then((res) => {
      setLoading(false);

      if (res?.success) {
        handleSuccess("Site created successfully");

        curData.id = res.id;
        curData.createdAt = Date.now();
        curData.label = model.label.replace(/\s+/g, "-").toLowerCase();

        setCurSites((prev: any) => [...prev, curData]);
        setModel({ ...defaultModel });
        removeFromCache("sites-1");
        return close();
      }

      handleErrors(res);
    });

    // createSite({ variables: { input: data } });
  };

  return (
    <>
      <div className="modal-center">
        <div className="modal-center-medium h-[95vh] overflow-hidden rounded-md bg-white p-8 shadow-xl">
          <h2 className="mx-1 text-indigo-600">Add Site</h2>

          <p className=" mx-1 mt-6 text-gray-500">Provide a title and description for site</p>

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

export default AddSites;
