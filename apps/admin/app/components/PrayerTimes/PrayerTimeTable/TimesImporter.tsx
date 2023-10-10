import React from "react";
import Button from "../../Button/Button";

var stringSimilarity = require("string-similarity");

function TimesImporter({ importData, setTableData, close }) {
  const [model, setModel] = React.useState(defaultModel);

  React.useEffect(() => {
    if (importData?.data) {
      const curModel = { ...model };

      fields.forEach((field) => {
        let topMatch;
        let topMatchScore = 0;

        importData.headers.forEach((header) => {
          const score = stringSimilarity.compareTwoStrings(field.name, header.replaceAll("_", " ").replaceAll('"', ""));
          if (score > topMatchScore) {
            topMatchScore = score;
            topMatch = header;
          }
        });
        console.log(topMatch, topMatchScore);
        curModel[field.key] = topMatch;
      });
      setModel(curModel);
    }
  }, [importData]);

  const importPrayerTimes = () => {
    const newParayerTimes = [];
    importData.data.forEach((row, i) => {
      if (i !== 0) {
        const newPrayerTime = {};
        fields.forEach((field) => {
          if (row[model[field.key]]) newPrayerTime[field.key] = row[model[field.key]].replaceAll('"', "");
        });
        newPrayerTime.id = i;
        const date = new Date(row[model.date]);

        newPrayerTime.timestamp = date.getTime();
        newPrayerTime.month = date.getMonth() + 1;
        newPrayerTime.year = date.getFullYear();
        newPrayerTime.date = date.toLocaleDateString();
        newParayerTimes.push(newPrayerTime);
      }
    });

    console.log(newParayerTimes);
    setTableData(newParayerTimes);
    close();
  };

  return (
    <div className="w-[80vw] p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Prayer Times Importer</h2>
      </div>
      <p className="mb-4 mt-4 ">
        The columns of the csv selected were automatically set to the most likely match. Please verify the columns below and select the correct column for each
        field. If the field (e.g Jamaat times) are not present in your imported csv you can leave the field blank and fill in the fields manually after
        impoerting.
      </p>
      <div className="flex flex-row flex-wrap rounded-md border border-gray-300 bg-white p-4 shadow-md">
        {fields.map((field) => (
          <div className="mb-2 mr-4 flex w-[45%] flex-col">
            <label>{field.name}</label>
            <select
              className="rounded-md border border-gray-300 p-2 "
              value={model[field.key]}
              onChange={(e) => setModel({ ...model, [field.key]: e.target.value })}
            >
              <option value="">Leave Blank</option>
              {importData?.headers?.map((header) => (
                <option value={header}>{header}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-row justify-start">
        <Button onClick={importPrayerTimes}>Import</Button>
        <button className="ml-2" onClick={close}>
          {" "}
          Close{" "}
        </button>
      </div>
    </div>
  );
}

const defaultModel = {
  id: "",
  date: "",
  fajr: "",
  fajr_jamaat: "",
  sunrise: "",
  dhuhr: "",
  dhuhr_jamaat: "",
  asr: "",
  asr_jamaat: "",
  maghrib: "",
  maghrib_jamaat: "",
  isha: "",
  isha_jamaat: "",
  bottom_message: "",
  month: "",
  year: "",
};

const fields = [
  { name: "Date", key: "date" },
  { name: "Fajr", key: "fajr" },
  { name: "Fajr Jamaat", key: "fajr_jamaat" },
  { name: "Sunrise", key: "sunrise" },
  { name: "Dhuhr", key: "dhuhr" },
  { name: "Dhuhr Jamaat", key: "dhuhr_jamaat" },
  { name: "Asr", key: "asr" },
  { name: "Asr Jamaat", key: "asr_jamaat" },
  { name: "Maghrib", key: "maghrib" },
  { name: "Maghrib Jamaat", key: "maghrib_jamaat" },
  { name: "Isha", key: "isha" },
  { name: "Isha Jamaat", key: "isha_jamaat" },
];

export default TimesImporter;
