"use client";

import React from "react";
import { Fragment } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

import {
  AcademicCapIcon,
  BanknotesIcon,
  Bars3Icon,
  BellIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { getCachData, removeFromCache, requestHandler } from "@/app/_helpers/web/requestHandler";

// import Popover from "../Popover/Popover";
import Link from "next/link";
import { Menu } from "react-feather";

const divItems = [
  { name: "home", label: "Home" },
  { name: "sites", label: "Sites" },
  { name: "prayerscreens", label: "Prayer Screens" },
  { name: "articles", label: "Articles" },
  { name: "events", label: "Events" },

  { name: "upload", label: "Files" },
];
function Nav({ currentEstablishment, establishemntLogin, orgUsers = [] as any[] }) {
  const router = useRouter();
  const pathname = usePathname();
  // const { logOut } = useAuth()
  // const { pathname } = useLocation();
  const [user, setUser] = React.useState({});
  const [curPgae, setCurPage] = React.useState("");
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  React.useEffect(() => {
    setCurPage(pathname.split("/")[2]);
  }, [pathname]);

  React.useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const u = await getCachData("currentUser", true);
    setUser(u?.User || u);
  };
  async function userNavigationFunctionHandler(func) {
    switch (func) {
      case "logOut":
        // console.log('logging out')
        localStorage.removeItem(publicId(currentEstablishment));
        localStorage.removeItem("currentUser");
        removeFromCache(publicId(currentEstablishment));
        await requestHandler({ type: "post", route: "auth/logout" });
        router.push("/login");
        break;
      case "home":
        router.push("/dashboard/home/" + publicId(currentEstablishment));
        break;
      case "prayerscreens":
        router.push("/dashboard/prayerscreens/" + publicId(currentEstablishment));
        break;
      case "articles":
        router.push("/dashboard/articles/" + publicId(currentEstablishment));
        break;
      case "upload":
        router.push("/dashboard/upload/" + publicId(currentEstablishment));
        break;
      case "sites":
        router.push("/dashboard/sites/" + publicId(currentEstablishment));
        break;
      case "events":
        router.push("/dashboard/events/" + publicId(currentEstablishment));
        break;
      case "help":
        // navigate(routes.events({ publicId: publicId(currentEstablishment) }))
        alert("help");
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div
        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        // className="bg-gradient-to-r from-sky-800 to-cyan-600 pb-24"
        className="bg-gradient-to-r from-indigo-800 to-blue-500 pb-16"
      >
        <>
          <div className="mx-auto max-w-3xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
            <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
              {/* Logo */}
              <div className="absolute left-0 flex-shrink-0 py-5 lg:static">
                <Link href="/dashboard/home">
                  {/* <span className="sr-only">Your Company</span> */}
                  {/* <img className="h-8 w-auto" src={require("src/assets/logo.png")} alt="" /> */}
                  <Image src="/logo.png" alt="Mosque ICU Logo" className="w-auto" width={120} height={120} priority />
                </Link>
              </div>

              {/* Establishments select */}

              {/* Right section on desktop */}
              <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                {currentEstablishment && orgUsers && orgUsers.length > 0 && (
                  <div className=" absolute right-[100px] top-[8px] mr-5 flex w-[150px]  flex-shrink-0 flex-col  ">
                    <p className="text-sm font-medium text-white">Establishment</p>
                    <select className="block  rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      {orgUsers.map((orgUser) => (
                        <option
                          key={orgUser.id}
                          value={orgUser.id}
                          className="bg-white shadow-sm"
                          onClick={() =>
                            currentEstablishment?.id !== orgUser.id &&
                            establishemntLogin({
                              variables: { id: orgUser.id },
                            })
                          }
                        >
                          {orgUser.establishmentName}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <button
                  type="button"
                  className="flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <div className="relative ml-4 flex-shrink-0" onClick={() => setShowUserMenu(!showUserMenu)}>
                  <div>
                    <div className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                      <span className="sr-only">Open user div</span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full  text-lg font-medium text-indigo-800">
                        {user?.firstName ? user.firstName[0] : ""}
                      </div>
                      {/* <img className="h-8 w-8 rounded-full" src={user?.imageUrl} alt="" /> */}
                    </div>
                  </div>
                  <div>
                    {showUserMenu && (
                      <>
                        <div className="absolute -right-2  mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                          {userNavigation.map((item) => (
                            <div key={item.name}>
                              <a
                                onClick={() => {
                                  userNavigationFunctionHandler(item.func);
                                }}
                                href={item.href}
                                className={"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"}
                              >
                                {item.name}
                              </a>
                            </div>
                          ))}
                        </div>
                        <div className="fixed inset-0 z-10" onClick={() => setShowUserMenu(false)} />
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative bottom-[22px] mt-3 w-full pb-[15px] lg:border-t lg:border-white lg:border-opacity-20">
                <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
                  {/* Left nav */}
                  <div className="hidden lg:col-span-2 lg:block">
                    <nav className="mt-1 flex space-x-4">
                      {divItems.map((item) => (
                        <div
                          key={item.name}
                          onClick={() => userNavigationFunctionHandler(item.name)}
                          className={classNames(
                            curPgae !== item.name ? "text-white" : "text-cyan-100",
                            "cursor-pointer rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                          )}
                        >
                          {item.label}
                        </div>
                      ))}
                    </nav>
                  </div>
                  {/* <div className="px-12 lg:px-0">
                        {/* Search */}
                  {/* <div className="mx-auto w-full max-w-xs lg:max-w-md">
                          <label htmlFor="search" className="sr-only">
                            Search
                          </label>
                          <div className="relative text-white focus-within:text-gray-600">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <MagnifyingGlassIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </div>
                            <input
                              id="search"
                              className="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                              placeholder="Search"
                              type="search"
                              name="search"
                            />
                          </div>
                        </div>
                      </div> */}
                </div>
              </div>

              {/* div button */}
              <div className="absolute right-0 flex-shrink-0 lg:hidden">
                {/* Mobile div button */}
                <div className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main div</span>
                  {/* {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />} */}
                </div>
              </div>
            </div>
          </div>

          {showMobileMenu ? (
            <div>
              <div className="lg:hidden">
                <div
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 z-20 bg-black bg-opacity-25" onClick={() => setShowMobileMenu(!showMobileMenu)} aria-hidden="true" />
                </div>

                <div
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 div">
                    <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="pb-2 pt-3">
                        <div className="flex items-center justify-between px-4">
                          <div>{/* <img className="h-8 w-auto" src={require("src/assets/logo.png")} alt="Your Company" /> */}</div>
                          <div className="-mr-2">
                            <button
                              onClick={() => setShowMobileMenu(!showMobileMenu)}
                              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                            >
                              <span className="sr-only">Close div</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                          {divItems.map((item) => (
                            <div
                              key={item.name}
                              onClick={() => userNavigationFunctionHandler(item.name)}
                              className={`block cursor-pointer rounded-md px-3 py-2  font-medium  hover:bg-gray-100  ${
                                curPgae !== item.name ? "text-gray-900 hover:text-gray-800" : "text-indigo-600 hover:text-indigo-700"
                              }`}
                            >
                              {item.label}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pb-2 pt-4">
                        <div className="flex items-center px-5">
                          <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={user?.imageUrl} alt="" />
                          </div>
                          <div className="ml-3 min-w-0 flex-1">
                            <div className="truncate text-base font-medium text-gray-800">{user?.name}</div>
                            <div className="truncate text-sm font-medium text-gray-500">{user?.email}</div>
                          </div>
                          <button
                            type="button"
                            className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                          {userNavigation.map((item) => (
                            <a
                              onClick={() => {
                                console.log("sup");
                                userNavigationFunctionHandler(item.func);
                              }}
                              key={item.name}
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Menu
              className="h-6 w-5 absolute right-2 top-2 z-[100] lg:hidden cursor-pointer hover:bg-white hover:bg-opacity-10 text-gray-700  focus:outline-none focus:ring-2 focus:ring-white rounded-md hover:shadow-lg "
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-hidden="true"
            />
          )}
        </>
      </div>
    </>
  );
}

export default Nav;

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  {
    name: "Sign out",
    func: "logOut",
  },
];

const user = {
  name: "Dries Vincent",
  email: "vincent@gmail.com",
  role: "Admin",
  imageUrl:
    "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixlib=rb-1.2.1&ixqx=J2FyZWEtZ3JhZGllbnQtd2lkdGg=&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
};
const navigation = [
  { name: "Home", href: "#", current: true },
  // { name: 'Profile', href: '#', current: false },
  // { name: 'Resources', href: '#', current: false },
  { name: "Team Directory", href: "#", current: false },
  // { name: 'Openings', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const publicId = (currentEstablishment) => {
  return currentEstablishment.establishmentName;
};
