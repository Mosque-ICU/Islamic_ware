import React from "react";
import DataTable from "react-data-table-component";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TimesImporter from "./TimesImporter";
import "react-tabs/style/react-tabs.css";
import { requestHandler, gqlF } from "@/app/_helpers/web/requestHandler";
import Popover from "../../Popover/Popover";

function PrayerOptionsModal({ setShowPrayerTimesEditor, prayerTimes = [], setPrayerTimes }) {
  const [dataFilter, setDataFilter] = React.useState("");
  const [prayerOptions, setPrayerOptions] = React.useState({
    limit: 0,
    page: 1,
  });
  const [columns, setColumns] = React.useState([]);
  const [showImportOpts, setShowImportOpts] = React.useState(false);
  const [importMenuEvent, setImportMenuEvent] = React.useState(null);
  const [importOptions, setImportOptions] = React.useState({
    data: null,
    headers: null,
  });
  const formatCsv = (csv) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const lines = text.split("\n");
      const headers = lines[0].split(",");
      const data = lines.slice(1).map((line) => {
        const values = line.split(",");
        const el = headers.reduce((object, header, index) => {
          return {
            ...object,
            [header]: values[index],
          };
        }, {});
        return el;
      });
      setImportOptions({ data, headers });
      setShowImportOpts(true);
    };
    reader.readAsText(csv);
  };

  React.useEffect(() => {
    requestHandler({
      shouldCache: true,
      returnCache: true,
      cacheKey: `prayers`,
      body: gqlF(
        `  query PrayersQuery($page: Int!) {
            paginatedPrayers(page: $page, limit: 25) {
            articles {
              id
              data
              userId
              name
              createdAt
              updatedAt
            }
            total
          }
        }`,
        { page: prayerOptions.page }
      ),
    }).then((res) => {
      console.log(res);
    });

    const prayerFields = [...fields];
    prayerFields.shift();
    const columns = prayerFields.map((col) => ({
      name: col.name,
      selector: (row) => row[col.key],
      sortable: true,
      width: "120px",
      cell: (row, index, column) => React.useCallback(<Cell row={row} val={row[col.key]} prop={col.key} setTableData={setPrayerTimes} />, [row, index]),
    }));

    setColumns([
      {
        name: "ID",
        selector: (row) => row.id,
        sortable: true,
        width: "65px",
      },
      {
        name: "Date",
        selector: (row) => row.date,
        sortable: true,
        width: "150px",
      },
      ...columns,
    ]);
  }, []);

  const onSave = () => {
    localStorage.setItem("prayerTimes", JSON.stringify(prayerTimes));
  };

  return (
    <>
      <div className="modal-center">
        <div className="h-[95vh] w-[90vw] p-4">
          {!showImportOpts ? (
            <div>
              <div className="flex justify-between">
                <div className="m-1 flex flex-row">
                  <h2 className="text-2xl font-bold">Prayer Times</h2>
                  <div className="ml-4">
                    <input
                      className="base-input h-8 w-48"
                      type="text"
                      placeholder="Search by date"
                      onChange={(e) => setDataFilter(e.target.value.toLowerCase())}
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="focus:shadow-outline mr-1 rounded bg-indigo-500 px-2 py-1  text-white hover:bg-indigo-400 focus:outline-none"
                    onClick={(e) => setImportMenuEvent(e)}
                  >
                    Import
                  </button>

                  <button className="focus:shadow-outline rounded bg-indigo-500 px-2 py-1  text-white hover:bg-indigo-400 focus:outline-none" onClick={onSave}>
                    Save
                  </button>
                </div>
              </div>
              <DataTable
                columns={columns}
                data={prayerTimes.filter((data) => data.date.toLowerCase().includes(dataFilter))}
                pagination
                paginationPerPage={30}
                paginationRowsPerPageOptions={[30, 40, 50, 100]}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                fixedHeader
                fixedHeaderScrollHeight="calc(100vh - 180px)"
                selectableRows
                selectableRowsHighlight
                onSelectedRowsChange={(e) => console.log(e)}
              />
            </div>
          ) : (
            <TimesImporter importData={importOptions} setTableData={setPrayerTimes} close={() => setShowImportOpts(false)} />
          )}
        </div>
      </div>
      <div onClick={() => setShowPrayerTimesEditor(false)} className="modal-overlay"></div>

      <Popover event={importMenuEvent} onClose={() => setImportMenuEvent(null)} show={importMenuEvent !== null}>
        <div className="m-1 flex h-[100px] w-[300px] flex-col ">
          <label className="mb-1 mt-1">Import Prayer Times CSV</label>
          <input
            type="file"
            className="mr-2 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            accept=".csv"
            onChange={(e) => formatCsv(e.target.files[0])}
          />
        </div>
      </Popover>
    </>
  );
}

const Cell = ({ row, val, prop, index, setTableData, tableData }) => {
  const [value, setValue] = React.useState(val);
  const [valChanged, setValChanged] = React.useState(false);

  return (
    <input
      value={value}
      type={"text"}
      onChange={(e) => {
        setValue(e.target.value);
        !valChanged && setValChanged(true);
      }}
      onBlur={(e) => {
        if (!valChanged) return;
        setTableData((prev) => {
          const findIndex = prev.findIndex((data) => data.id === row.id);
          prev[findIndex][prop] = e.target.value;
          return prev;
        });
      }}
      className="w-full rounded-md border border-gray-300 p-2 transition duration-150 ease-in-out focus:border-indigo-500 focus:outline-none sm:text-sm sm:leading-5"
    />
  );
};

const ExpandedComponent = ({ data, setTableData }) => {
  const [curData, setCurData] = React.useState(null);

  React.useEffect(() => {
    if (data) setCurData({ ...data.data });
  }, []);

  if (!curData) return null;
  return (
    <div className="slideInDown">
      <Tabs>
        <TabList>
          <Tab>Prayer Details</Tab>
          <Tab>Screen Options</Tab>
        </TabList>

        <TabPanel>
          {fields.map((field) => {
            return (
              <div className="mb-2 flex justify-between">
                <label className="mr-2 w-[130px]">{field.name}:</label>
                <div style={{ width: "calc(100% - 130px)" }}>
                  <div>{curData && curData[field.key]}</div> v
                </div>
              </div>
            );
          })}
        </TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
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

export default PrayerOptionsModal;
