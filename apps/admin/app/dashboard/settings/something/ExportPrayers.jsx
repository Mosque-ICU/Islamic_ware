/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  CalendarIcon,
  CodeBracketIcon,
  DocumentIcon,
  ExclamationCircleIcon,
  LinkIcon,
  PencilSquareIcon,
  PhotoIcon,
  TableCellsIcon,
  VideoCameraIcon,
  ViewColumnsIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";

const items = [
  {
    id: 2,
    name: "Calendar",
    description:
      "Export a calendar with events and reminders in various formats.",
    url: "#",
    color: "bg-red-500",
    icon: CalendarIcon,
  },
  {
    id: 3,
    name: "Code Snippets",
    description:
      "Export code snippets with syntax highlighting for easy sharing.",
    url: "#",
    color: "bg-yellow-500",
    icon: CodeBracketIcon,
  },
  {
    id: 4,
    name: "Documents & Files",
    description: "Export documents and files of different types for download.",
    url: "#",
    color: "bg-green-500",
    icon: DocumentIcon,
  },
  {
    id: 5,
    name: "Alerts & Notifications",
    description: "Export alerts and notifications for important updates.",
    url: "#",
    color: "bg-blue-500",
    icon: ExclamationCircleIcon,
  },
  {
    id: 6,
    name: "Links",
    description:
      "Export links to external websites or internal pages for easy reference.",
    url: "#",
    color: "bg-purple-500",
    icon: LinkIcon,
  },
  {
    id: 7,
    name: "Images & Photos",
    description:
      "Export images and photos in various formats for sharing or download.",
    url: "#",
    color: "bg-pink-500",
    icon: PhotoIcon,
  },
  {
    id: 8,
    name: "Spreadsheets",
    description:
      "Export tables with sortable columns and filters for data analysis.",
    url: "#",
    color: "bg-indigo-500",
    icon: TableCellsIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ExportPrayers(props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        {props.button}
      </div>
      <Transition.Root
        show={open}
        as={Fragment}
        afterLeave={() => setQuery("")}
        appear
      >
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <div className="md:flex md:items-center p-5 md:justify-between">
                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                      Export prayers
                    </h2>
                  </div>
                  <div className="mt-4 flex md:ml-4 md:mt-0">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Close
                    </button>
                  </div>
                </div>{" "}
                <Combobox onChange={(item) => (window.location = item.url)}>
                  {filteredItems.length > 0 && (
                    <Combobox.Options
                      static
                      className="max-h-96 scroll-py-3 overflow-y-auto p-3"
                    >
                      {filteredItems.map((item) => (
                        <Combobox.Option
                          key={item.id}
                          value={item}
                          className={({ active }) =>
                            classNames(
                              "flex cursor-default select-none rounded-xl p-3",
                              active && "bg-gray-100"
                            )
                          }
                        >
                          {({ active }) => (
                            <>
                              <div
                                className={classNames(
                                  "flex h-10 w-10 flex-none items-center justify-center rounded-lg",
                                  item.color
                                )}
                              >
                                <item.icon
                                  className="h-6 w-6 text-white"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4 flex-auto">
                                <p
                                  className={classNames(
                                    "text-sm font-medium",
                                    active ? "text-gray-900" : "text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </p>
                                <p
                                  className={classNames(
                                    "text-sm",
                                    active ? "text-gray-700" : "text-gray-500"
                                  )}
                                >
                                  {item.description}
                                </p>
                              </div>
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}

                  {query !== "" && filteredItems.length === 0 && (
                    <div className="px-6 py-14 text-center text-sm sm:px-14">
                      <ExclamationCircleIcon
                        type="outline"
                        name="exclamation-circle"
                        className="mx-auto h-6 w-6 text-gray-400"
                      />
                      <p className="mt-4 font-semibold text-gray-900">
                        No results found
                      </p>
                      <p className="mt-2 text-gray-500">
                        No components found for this search term. Please try
                        again.
                      </p>
                    </div>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
