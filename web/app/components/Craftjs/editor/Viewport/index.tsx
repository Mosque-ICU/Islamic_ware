import cx from "classnames";
import React, { useEffect } from "react";

import { Header } from "./Header";

import { Toolbox } from "./Toolbox";
import { SectionSidebar } from "./Sidebar/SectionSidebar";
import { PageSidebar } from "./Sidebar/PageSidebar";
import { currentPageType } from "@/app/dashboard/site/[...slug]/SiteEditorPage";

export const Viewport: React.FC<{
  children?: React.ReactNode;
  site: any;
  save?: () => void;
  readOnly: boolean;
  preview: () => void;
  setEditSectionIndex?: (index: number) => void;
  editSectionIndex?: number;
  editStates?: any[];
  updateSiteData?: (data: any) => void;
  currentPage?: currentPageType;
  undo?: (index: number) => void;
  onDataChange?: (data: any) => void;
}> = ({ children, site, save, readOnly, preview, editSectionIndex, setEditSectionIndex, currentPage, editStates = [], undo, onDataChange, updateSiteData }) => {
  const [showPageSidebar, setShowPageSidebar] = React.useState(false);

  return (
    <div className="viewport">
      <div className={cx(["fixed flex h-full w-full flex-row overflow-hidden"])}>
        <Toolbox />
        <div className="page-container flex h-full flex-1 flex-col">
          <Header
            pages={site?.SitePages || []}
            save={save}
            preview={preview}
            readOnly={readOnly}
            undo={undo}
            editStates={editStates}
            currentPage={currentPage}
            setShowPageSidebar={setShowPageSidebar}
          />
          <div
            className={cx([
              "craftjs-renderer h-full w-full flex-1 overflow-auto pb-8 transition",
              {
                "bg-renderer-gray": false,
              },
            ])}
          >
            <div className="relative flex flex-col items-center ">{children}</div>
            <div className={"text-light-gray-2 flex w-full items-center justify-center pt-6 text-xs"}></div>
          </div>
        </div>
        {editSectionIndex != -1 && (
          <SectionSidebar setEditSectionIndex={setEditSectionIndex} onDataChange={onDataChange} currentPage={currentPage} sidebarIndex={editSectionIndex} />
        )}

        {showPageSidebar && (
          <PageSidebar
            setShowPageSidebar={setShowPageSidebar}
            currentPage={currentPage}
            onDataChange={updateSiteData}
            sidebarIndex={undefined}
            siteData={site?.siteData || {}}
          />
        )}
      </div>
    </div>
  );
};
