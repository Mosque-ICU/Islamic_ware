import React, { useState } from "react";
import styled from "styled-components";

import { SidebarItem } from "./SidebarItem";

const SidebarDiv = styled.div<{ enabled: boolean }>`
  width: 370px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  background: transparent;
  margin-right: ${(props) => (props.enabled ? 0 : -280)}px;
  border-radius: 6px;
`;

export const PageSidebar = ({ setShowPageSidebar, onDataChange, sidebarIndex, siteData, currentPage }) => {
  const [layersVisible, setLayerVisible] = useState(true);
  const [editingColoorIndex, setEditingColorIndex] = useState(null);
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const [errors, setErrors] = useState({});

  React.useEffect(() => {
    if (siteData) console.log(siteData);
  }, [siteData]);

  return (
    <SidebarDiv enabled={true} className="sidebar">
      <span onClick={() => setShowPageSidebar(false)} className="relative relative left-[20px] top-[15px] z-10  cursor-pointer  font-semibold text-gray-500">
        Close
      </span>
      <div className="slideLeft mt-8 flex h-full flex-col px-2">
        <SidebarItem
          // @ts-ignore
          icon={"/icons/customize.svg"}
          title={"Site Colors"}
          height={!layersVisible ? "full" : "55%"}
          visible={toolbarVisible}
          onChange={(val) => setToolbarVisible(val)}
        >
          <div className=" mt-5 px-3">
            <p>Theme Colors</p>
            <div className="mb-8 mt-2 grid grid-cols-6 gap-2">
              {(siteData?.siteColors || []).map((color, index) => {
                return (
                  <div
                    onClick={() => setEditingColorIndex(index)}
                    key={index}
                    className="card flex cursor-pointer items-center rounded border border-gray-200 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md"
                  >
                    <div className=" h-[50px] w-[10vw] rounded" style={{ backgroundColor: color }}></div>
                  </div>
                );
              })}
            </div>

            {editingColoorIndex !== null && (
              <>
                <div className="flex flex-row justify-between items-center mt-3">
                  <p>Color {editingColoorIndex + 1}</p>
                  <input
                    type="color"
                    placeholder="Color Name"
                    className="border border-gray-200 rounded p-2 mb-2 w-[140px]"
                    value={siteData.siteColors[editingColoorIndex]}
                    onChange={(e) =>
                      onDataChange({
                        ...siteData,
                        siteColors: siteData.siteColors.map((color, index) => (index == editingColoorIndex ? e.target.value : color)),
                      })
                    }
                  />
                </div>
                <hr className="my-2"></hr>
              </>
            )}

            {sectionColorFields.map((field) => {
              return (
                <div className="row mt-3 flex w-full justify-between">
                  <p>{field.label}</p>
                  <div
                    className="card h-7 w-7 cursor-pointer rounded-full border border-gray-200 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md"
                    style={{
                      backgroundColor: siteData.siteColors[siteData.defaultColorIndexes[field.value]],
                    }}
                  ></div>
                </div>
              );
            })}
            {/* <p>Sizes</p> */}

            {/* <p>Sizes</p> */}
          </div>
        </SidebarItem>

        {/* <Carbonads /> */}
      </div>
    </SidebarDiv>
  );
};

const sectionColorFields = [
  { value: "sectionBackground", label: "Section Background" },
  { value: "textColor", label: "Section Text" },
  { value: "buttonBackground", label: "Button Background" },
  { value: "buttonTextColor", label: "Button Text" },
  { value: "buttonHoverBackground", label: "Button Hover Background" },
  { value: "buttonHoverTextColor", label: "Button Hover Text" },
];
