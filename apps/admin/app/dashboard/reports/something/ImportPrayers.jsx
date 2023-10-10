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
  CloudArrowDownIcon,
  CloudArrowUpIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const people = [
  {
    id: 1,
    name: "Leslie Alexander",
    phone: "1-493-747-9031",
    email: "lesliealexander@example.com",
    role: "Co-Founder / CEO",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const recent = [people[5], people[4], people[2], people[10], people[16]];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ImportPrayers(props) {
  const [open, setOpen] = useState(false);

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
        //   afterLeave={() => setQuery("")}
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
              <Dialog.Panel className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox>
                  <>
                    <div className="md:flex md:items-center p-5 md:justify-between">
                      <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                          Import prayers
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
                    </div>
                    <Combobox.Options
                      as="div"
                      static
                      hold
                      className="flex divide-x divide-gray-100"
                    >
                      <div
                        className={classNames(
                          "max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4",
                          "sm:h-96"
                        )}
                      >
                        <h2 className="mb-4 mt-2 text-xs font-semibold text-gray-500">
                          Various methods
                        </h2>
                        <div className="-mx-2 text-sm text-gray-700">
                          <Combobox.Option
                            as="div"
                            value={"hello"}
                            className={({}) =>
                              classNames(
                                "flex cursor-default select-none items-center rounded-md p-2",
                                "bg-gray-100 text-gray-900"
                              )
                            }
                          >
                            <>
                              <img
                                alt=""
                                className="h-6 w-6 flex-none rounded-full"
                              />
                              <span className="ml-3 flex-auto truncate"></span>

                              <ChevronRightIcon
                                className="ml-3 h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                              />
                            </>
                          </Combobox.Option>
                        </div>
                      </div>

                      <>
                        {/* second column  */}
                        <div className="hidden h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                          <div className="flex-none p-6 text-center">
                            <img
                              alt=""
                              className="mx-auto h-16 w-16 rounded-full"
                            />
                            <h2 className="mt-3 font-semibold text-gray-900"></h2>
                            <p className="text-sm leading-6 text-gray-500"></p>
                          </div>
                          <div className="flex flex-auto flex-col justify-between p-6">
                            <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700">
                              <dt className="col-end-1 font-semibold text-gray-900">
                                Phone
                              </dt>
                              <dt className="col-end-1 font-semibold text-gray-900">
                                URL
                              </dt>
                              <dd className="truncate">
                                <a className="text-indigo-600 underline"></a>
                              </dd>
                              <dt className="col-end-1 font-semibold text-gray-900">
                                Email
                              </dt>
                              <dd className="truncate">
                                <a className="text-indigo-600 underline"></a>
                              </dd>
                            </dl>
                            <button
                              type="button"
                              className="mt-6 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Import prayers
                            </button>
                          </div>
                        </div>
                      </>
                    </Combobox.Options>
                    <div className="px-6 py-14 text-center text-sm sm:px-14">
                      <CloudArrowUpIcon
                        className="mx-auto h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                      <p className="mt-4 font-semibold text-gray-900">
                        Drag and drop
                      </p>
                      <p className="mt-2 text-gray-500">
                        Drop your file here to import easily
                      </p>
                    </div>
                  </>
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
