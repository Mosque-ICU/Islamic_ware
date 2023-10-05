import React from "react";
import { UploadPageComponentView } from "./UploadPageComponents";
import { Bars4Icon, DocumentIcon } from "@heroicons/react/24/outline";

const tabs = [
  { name: "Recently Added", href: "#" },
  { name: "Recently Viewed", href: "#" },
  { name: "Favorited", href: "#" },
];

function UploadPageCell({ title, currentFile, setCurrentFile, currentTab, setCurrentTab, uploads, setUploads, options, setOptions }) {
  const [showUploader, setShowUploader] = React.useState(false);

  return (
    <UploadPageCellLayout currentTab={currentTab} setCurrentTab={setCurrentTab} setShowUploader={setShowUploader}>
      <UploadPageComponentView
        currentFile={currentFile}
        setCurrentFile={setCurrentFile}
        type={title}
        showUploader={showUploader}
        setShowUploader={setShowUploader}
        uploads={uploads}
        setUploads={setUploads}
        options={options}
        setOptions={setOptions}
      />
    </UploadPageCellLayout>
  );
}

export default UploadPageCell;

function UploadPageCellLayout(props) {
  return (
    <div className="mx-auto h-fit min-h-screen rounded bg-white px-4 pt-2 shadow-lg sm:px-6 lg:px-8">
      <div className="flex">
        <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
          <button
            type="button"
            className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <Bars4Icon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Use list view</span>
          </button>
          <button
            type="button"
            className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            {/* <Squares2X2IconMini className="h-5 w-5" aria-hidden="true" /> */}
            <span className="sr-only">Use grid view</span>
          </button>
        </div>
      </div>
      {/* Tabs */}
      <div className="mt-3 sm:mt-2">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            defaultValue="Recently Viewed"
          >
            <option>Recently Added</option>

            <option>Recently Viewed</option>
            <option>Favorited</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center border-b border-gray-200">
            <nav className="-mb-px flex flex-1 space-x-6 xl:space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  onClick={() => props.setCurrentTab(tab.name)}
                  aria-current={props.currentTab === tab.name ? "page" : undefined}
                  className={classNames(
                    props.currentTab === tab.name
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                  )}
                >
                  {tab.name}
                </div>
              ))}
            </nav>
            <div className="ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex">
              <button
                type="button"
                className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <Bars4Icon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Use list view</span>
              </button>
              <span className="ml-0.5 cursor-pointer rounded-md p-1.5 hover:bg-white hover:shadow-sm " onClick={() => props.setShowUploader(true)}>
                Upload
              </span>

              {/* <button
                type="button"
                className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Use grid view</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">
          Recently viewed
        </h2>

        {props.children}

        {/* <UploadPageCell  /> */}
      </section>
    </div>
  );
}

export function UploadPageCellEachLayout({ current, name, file, key, source }) {
  return (
    <li key={key} className="relative">
      <div
        className={classNames(
          current
            ? "ring-2 ring-indigo-500 ring-offset-2"
            : "focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100",
          "group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100"
        )}
      >
        {file.cat === "image" ? (
          <img src={source} alt="" loading="lazy" className={classNames(current ? "" : "group-hover:opacity-75", "pointer-events-none object-cover")} />
        ) : (
          <div className={classNames(current ? "" : "group-hover:opacity-75", "pointer-events-none object-cover")}>
            <DocumentIcon className=" m-auto h-full text-gray-300" aria-hidden="true" />
            <p className=" absolute bottom-0 left-0 flex items-center justify-center rounded bg-gray-400 p-1 text-sm font-medium text-gray-900">
              {file.name} | {niceBytes(file.size)}
            </p>
          </div>
        )}

        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {name}</span>
        </button>
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{name}</p>
      {/* <p className="pointer-events-none block text-sm font-medium text-gray-500">
        {file.size}
      </p> */}
    </li>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
