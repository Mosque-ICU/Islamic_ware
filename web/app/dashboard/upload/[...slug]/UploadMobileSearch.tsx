import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

const UploadMobileSearch = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <div show={mobileMenuOpen} as={Fragment}>
      <div as="div" className="relative z-40 md:hidden" onClose={mobileMenuOpen}>
        <div
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </div>

        <div className="fixed inset-0 z-40 flex">
          <div
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pb-4 pt-5">
              <div
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute right-0 top-1 -mr-14 p-1">
                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center px-4">
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company" />
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                <nav className="flex h-full flex-col">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? "bg-indigo-800 text-white" : "text-indigo-100 hover:bg-indigo-800 hover:text-white",
                          "group flex items-center rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames(item.current ? "text-white" : "text-indigo-300 group-hover:text-white", "mr-3 h-6 w-6")}
                          aria-hidden="true"
                        />
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadMobileSearch;
