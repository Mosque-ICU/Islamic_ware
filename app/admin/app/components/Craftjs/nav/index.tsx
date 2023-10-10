"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Menu } from "react-feather";

function Nav({ siteName, publicEstablishmentId = "", readOnly = false }) {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  return (
    <>
      <nav className=" absolute  top-0 inset-x-0 z-50 w-full h-16 hidden lg:block">
        <div className="flex flex-row m-10 mx-20  items-center ">
          <a
            href={
              process.env.NODE_ENV === "development"
                ? readOnly
                  ? "http://dev.mosque.icu:3000/"
                  : `http://dev.mosque.icu:3000/dashboard/site/${publicEstablishmentId}?label=${siteName}`
                : readOnly
                ? `https://${siteName}.mosque.icu/`
                : `https://${siteName}.mosque.icu/dashboard/site/dev?label=${siteName}`
            }
            className="cursor-pointer hover:text-indigo-500 transition-all duration-300 ease-in-out
            text text-gray-700 font-semibold text-lg w-fit-content"
          >
            Home
          </a>
        </div>
      </nav>
      {showMobileMenu ? (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 slideLeft">
          <div className="flex flex-col items-center  h-full mt-20 relative">
            <XMarkIcon
              className="absolute top-[-10px] left-10 cursor-pointer hover:text-indigo-500 transition-all duration-300 ease-in-out h-[24px] w-[24px] z-60"
              onClick={() => setShowMobileMenu(false)}
            />
            <a
              href={
                process.env.NODE_ENV === "development"
                  ? readOnly
                    ? "http://dev.mosque.icu:3000/"
                    : `http://dev.mosque.icu:3000/dashboard/site/${publicEstablishmentId}?label=${siteName}`
                  : readOnly
                  ? `https://${siteName}.mosque.icu/`
                  : `https://${siteName}.mosque.icu/dashboard/site/dev?label=${siteName}`
              }
              className="cursor-pointer hover:text-indigo-500 transition-all duration-300 ease-in-out
            text text-gray-700 font-semibold text-lg w-fit-content"
            >
              Home
            </a>
          </div>
        </div>
      ) : (
        <Menu
          className="absolute top-[25px] left-10  cursor-pointer lg:hidden hover:text-indigo-500 transition-all duration-300 ease-in-out block z-50"
          size={24}
          onClick={() => setShowMobileMenu(true)}
        />
      )}
    </>
  );
}

export default Nav;
