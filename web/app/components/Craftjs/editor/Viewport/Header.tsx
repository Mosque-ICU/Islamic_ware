import cx from "classnames";
import React from "react";
import styled from "styled-components";

// import { Tooltip } from 'react-tooltip'

// import Button from 'src/components/Button/Button'

import { Layout, PlusCircle, Settings } from "react-feather";
import SettingsMenu from "./SettingsMenu";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import Select from "@/app/components/Select/Select";

const HeaderDiv = styled.div`
  width: 100%;
  height: 53px;
  z-index: 99999;
  position: relative;
  padding: 0px 10px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 15px;
  border-radius: 5px;
  font-size: 14px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: #fff;
    opacity: 0.9;
  }
  &:hover {
    transition: all 0.3s ease;
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

const Item = styled.a<{ disabled?: boolean }>`
  margin-right: 10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: #707070;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity:0.5;
    cursor: not-allowed;
  `}
`;

export const Header = ({ pages, save, preview, readOnly, editStates = [], currentPage, undo, setShowPageSidebar }) => {
  const [undoIndex, setUndoIndex] = React.useState(0);
  const [showSettingsMenu, setShowSettingsMenu] = React.useState(false);
  // const { enabled, canUndo, canRedo, actions, query } = useEditor(
  //   (state, query) => ({
  //     enabled: state.options.enabled,
  //     canUndo: query.history.canUndo(),
  //     canRedo: query.history.canRedo(),
  //   })
  // )

  React.useEffect(() => {
    if (editStates && editStates.length > 0) {
      setUndoIndex(editStates.length - 1);
    } else {
      setUndoIndex(0);
    }
  }, [editStates]);

  const onSave = () => {
    save();
    // const json = query.serialize()
    // console.log(json)
    // const encodedData = LZString.compress(json)
    // console.log(encodedData)
    // TODO - save to db
  };

  const onUndo = () => {
    undo(undoIndex - 1);
    setUndoIndex((prev) => prev - 1);
  };
  // TODO - add undo , redo tooltips with react-tooltip
  return (
    <>
      <HeaderDiv className="header w-full text-white transition">
        <div className="flex flex-row items-center">
          {/* <Button
          variant="secondary"
          size="md"
          className="relative "
          onClick={() => back()}
        >
          Back
        </Button> */}

          <Select noClear className="relative left-[10px] w-[160px] " placeholder="Page" value={currentPage?.id} options={pages} onChange={(e) => {}} />

          <div title="Page settings">
            <Settings
              className="ml-5 h-[20px] cursor-pointer rounded text-gray-600 transition hover:bg-indigo-300 hover:text-indigo-900 "
              onClick={() => setShowSettingsMenu(true)}
            />
          </div>
          <div title="Add Page">
            <PlusCircle
              className="ml-2 h-[20px] cursor-pointer rounded text-indigo-700 transition hover:bg-indigo-300 hover:text-indigo-900 "
              onClick={() => {
                preview();
                setShowSettingsMenu(false);
              }}
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-end px-4">
          {true && (
            <div className="relative left-[30px] flex flex-1">
              <Item disabled={undoIndex == 0} onClick={onUndo}>
                {/* <UndoSvg /> */}
              </Item>
              <Item disabled={undoIndex === editStates.length - 1 || editStates.length === 0} onClick={() => {}}>
                {/* <RedoSvg /> */}
              </Item>
            </div>
          )}
          <div className="flex">
            <div className={` right-[${!readOnly ? "250px" : "100px"}]`}>
              <Layout
                //@ts-expect-error
                title="Page Layout"
                xlinkTitle="Layout"
                className="mr-5  mt-1 h-[25px] cursor-pointer rounded text-gray-500 transition hover:bg-indigo-300 hover:text-indigo-900 "
                onClick={() => setShowPageSidebar((prev) => !prev)}
              />
            </div>
            <Btn
              disabled={!readOnly && editStates.length === 0}
              className={cx([
                "cursor-pointer transition",
                {
                  "cursor-not-allowed opacity-50": !readOnly && editStates.length === 0,
                  "bg-emerald-300": !readOnly,
                  "bg-indigo-500": readOnly,
                  "text-emerald-900": !readOnly,
                  "hover:bg-emerald-500": !readOnly,
                },
              ])}
              onClick={() => {
                if (!readOnly) {
                  return onSave();
                }
                preview();
                setShowPageSidebar(false);
                setShowSettingsMenu(false);
              }}
            >
              {/* {!readOnly ? <Checkmark /> : <Customize />} */}

              {!readOnly ? "Save page" : "Edit"}
            </Btn>
            {!readOnly && (
              <Btn
                className="ml-3 cursor-pointer bg-indigo-100 text-indigo-700 transition hover:bg-indigo-300"
                onClick={() => {
                  preview();
                  setShowPageSidebar(false);
                }}
              >
                Cancel
              </Btn>
            )}
          </div>
        </div>
      </HeaderDiv>
      {showSettingsMenu && <SettingsMenu close={() => setShowSettingsMenu(false)} />}
      {}
    </>
  );
};
