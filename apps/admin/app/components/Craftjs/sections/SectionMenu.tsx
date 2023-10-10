import React from "react";
import { sectionData } from "./sectionData";
import Area from "../area";
import { Button } from "../selectors/Button";

const sectionList = ["Home", "About", "Contact", "Donations", "Articles", "PrayerTimes", "Blog", "Shop", "FAQ", "Cart"];

function SectionMenu({ close, addSection, siteData }) {
  const [selectedSection, setSelectedSection] = React.useState("Home");
  const [curSectionData, setCurSectionData] = React.useState(sectionData[selectedSection]);
  return (
    <>
      <div className="modal-center">
        <div className=" h-[950px] w-[85vw] p-8">
          {/* <h2 className="text-2xl font-bold">Page Settings</h2> */}

          <div className="flex flex-row">
            <div className="absolute ">
              <div className=" flex flex-col">
                <h2
                  className="semibold mb-2 text-gray-700
                "
                >
                  Sections
                </h2>

                <div className="mt-5">
                  <Button size="sm" onClick={() => addSection(null)}>
                    Add Empty Section
                  </Button>
                </div>
                <div className="mt-5">
                  {sectionList.map((section, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          setSelectedSection(section);
                          setCurSectionData(sectionData[section]);
                        }}
                        className={`semi-bold flex cursor-pointer flex-row items-center rounded-md p-1 hover:bg-gray-100 hover:shadow-md ${
                          selectedSection === section ? "border-2 border-indigo-500 bg-gray-100 shadow-md" : ""
                        }`}
                      >
                        <div className="ml-2">{section}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="ml-[155px] h-[910px] overflow-y-auto">
              {curSectionData.map((section, i) => {
                return (
                  <div
                    key={section.id}
                    title="Add Section"
                    onClick={() => addSection(section)}
                    className=" w-[75vw] cursor-pointer rounded shadow-md hover:border-2 hover:border-indigo-500 hover:shadow-lg"
                  >
                    <Area
                      readOnly={true}
                      index={i}
                      rows={1}
                      columns={1}
                      updateWrapperHeight={(height) => () => {}}
                      deleteSection={() => {}}
                      setEditSectionIndex={() => {}}
                      onDataChange={(data) => {}}
                      siteData={siteData}
                      data={section.data}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div onClick={close} className="modal-overlay"></div>
    </>
  );
}

export default SectionMenu;
