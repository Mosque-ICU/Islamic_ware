"use client";

import React from "react";
import FormGroup from "../components/Form/FormGroup";
import { checkRequiredAndErrs, handleErrors } from "../_helpers/web/formatters";
import { requestHandler } from "../_helpers/web/requestHandler";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import { useRouter } from "next/navigation";

const defaultModel = {
  institutionName: "",
  telephone: "",
  email: "",
  type: "",
  city: "",
  country: "",
  secondLine: "",
  zip: "",
  county: "",
  buildingNumber: "",
  firstLine: "",
} as const;

function Applications({ data }: any) {
  const router = useRouter();
  const [model, setModel] = React.useState(defaultModel);
  const [errors, setErrors] = React.useState({} as any);
  const [loading, setLoading] = React.useState(false);
  const [editingApplication, setEditingApplication] = React.useState(false);
  const [showApplications, setShowApplications] = React.useState(data && data.length > 0 ? true : false);
  const [applications, setApplications] = React.useState(data || []);

  const applicationRequest = () => {
    if (!checkRequiredAndErrs(model, setErrors, errors)) return;
    setLoading(true);
    requestHandler({ type: editingApplication ? "put" : "post", body: model, route: "applications" }).then((res) => {
      setLoading(false);

      if (!res?.errors) {
        setModel(defaultModel);
        window.location.reload();
        // return fetchApplications();
      }
    });
  };

  const createEstablishment = (data: typeof defaultModel) => {
    requestHandler({
      type: "post",
      body: {
        name: data.institutionName,
        email: data.email,
        telephone: data.telephone,
        type: data.type,
        geoString: `${data.buildingNumber} ${data.firstLine} ${data.secondLine} ${data.city} ${data.county} ${data.country} ${data.zip}`,
        zip: data.zip,
      },
      route: "establishment",
    }).then((res) => {
      setLoading(false);
      if (!res?.errors) {
        router.push("/dashboard/home/" + data.institutionName);
      }

      handleErrors(res);
    });
  };
  if (loading) return <Loader />;
  return (
    <div className="h-full w-full">
      <div className="flex min-h-full items-center justify-center w-full flex-col">
        {showApplications && !editingApplication ? ( //#endregion
          <div className="flex min-h-full  flex-col w-[50%] min-w-[600px] mt-10 card shadow-lg p-10 rounded">
            <h2>Application</h2>
            <div className="flex flex-col mt-10">
              {applications.map((application: any) => (
                <div className="flex flex-col border rounded p-5 mb-5 relative " key={application.id}>
                  <p
                    className=" p-2 absolute top-5 right-5 cursor-pointer hover:shadow-lg rounded"
                    onClick={() => {
                      setErrors({});
                      setModel(application);
                      setEditingApplication(!editingApplication);
                    }}
                  >
                    Edit
                  </p>
                  <h3 className="text-xl font-bold">{application.institutionName}</h3>
                  <p>{application.email}</p>
                  <p>{application.telephone}</p>
                  <p>{application.type}</p>
                  <p>{application.city}</p>
                  <p>{application.country}</p>
                  <p>{application.secondLine}</p>
                  <p>{application.zip}</p>
                  <p>{application.county}</p>
                  <p>{application.buildingNumber}</p>
                  <p>{application.firstLine}</p>
                  <p>{application.status}</p>{" "}
                  <div className="mt-10">
                    <p>DEV NOTE: This is a temporary button to create an establishment account. This will be removed in the future.</p>

                    <Button className="mt-5 w-fit" onClick={() => createEstablishment(application)} loading={loading} variant="secondary">
                      Create Establishment
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex min-h-full  flex-col w-50%] mt-10 card shadow-lg p-10 min-w-[600px] rounded">
            <h2>{editingApplication ? "Edit Application" : "Apply for a establishment account"}</h2>
            <FormGroup
              className="w-full mt-10"
              errors={errors}
              setErrors={setErrors}
              submitAction={applicationRequest}
              model={model}
              setModel={setModel}
              fields={[
                {
                  name: "institutionName",
                  placeholder: "Institution Name",
                  type: "input",
                  maxLength: 255,
                },
                {
                  name: "telephone",
                  placeholder: "Telephone",
                  type: "input",
                  subType: "tel",
                },
                {
                  name: "email",
                  placeholder: "Email",
                  type: "input",
                  subType: "email",
                  maxLength: 255,
                },
                {
                  name: "type",
                  label: "Type",
                  type: "select",
                  options: [
                    { value: "mosque", label: "Mosque" },
                    { value: "school", label: "School" },
                    { value: "charity", label: "Charity" },
                    { value: "other", label: "Other" },
                  ],
                },
                {
                  name: "buildingNumber",
                  placeholder: "Building Number",
                  type: "input",
                  subType: "number",
                  maxLength: 50,
                },
                {
                  name: "firstLine",
                  placeholder: "First Line",
                  type: "input",
                  maxLength: 255,
                },
                {
                  name: "secondLine",
                  placeholder: "Second Line",
                  type: "input",
                  maxLength: 255,
                },
                {
                  name: "city",
                  placeholder: "City",
                  type: "input",
                  maxLength: 50,
                },
                {
                  name: "county",
                  placeholder: "County",
                  type: "input",
                  maxLength: 50,
                },
                {
                  name: "country",
                  placeholder: "Country",
                  type: "input",
                  maxLength: 50,
                },
                {
                  name: "zip",
                  placeholder: "Postal Code",
                  type: "input",
                  maxLength: 50,
                },
              ]}
            />
            <div className="flex flex-row ">
              <Button className="mt-5 w-fit" onClick={applicationRequest} loading={loading} variant="secondary">
                Submit
              </Button>

              {editingApplication && (
                <Button className="mt-5 w-fit ml-5" onClick={() => setEditingApplication(!editingApplication)} loading={loading}>
                  Cancel
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Applications;
