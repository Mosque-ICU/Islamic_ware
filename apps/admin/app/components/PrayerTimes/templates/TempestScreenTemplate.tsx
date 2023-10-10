/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import {
  ArchiveBoxIcon,
  Bars3BottomLeftIcon,
  Bars4Icon,
  ClockIcon,
  HomeIcon,
  UserCircleIcon as UserCircleIconOutline,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  BellIcon,
  CalendarIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckCircleIcon,
  LockOpenIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  TagIcon,
  UserCircleIcon as UserCircleIconMini,
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "All Issues", href: "#", icon: HomeIcon, current: true },
  { name: "My Issues", href: "#", icon: Bars4Icon, current: false },
  { name: "Assigned", href: "#", icon: UserCircleIconOutline, current: false },
  { name: "Closed", href: "#", icon: ArchiveBoxIcon, current: false },
  { name: "Recent", href: "#", icon: ClockIcon, current: false },
];
const projects = [
  { id: 1, name: "GraphQL API", href: "#" },
  { id: 2, name: "iOS App", href: "#" },
  { id: 3, name: "Marketing Site Redesign", href: "#" },
  { id: 4, name: "Customer Portal", href: "#" },
];
const activity = [
  {
    id: 1,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl: "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "6d ago",
  },
  {
    id: 2,
    type: "assignment",
    person: { name: "Hilary Mahy", href: "#" },
    assigned: { name: "Kristin Watson", href: "#" },
    date: "2d ago",
  },
  {
    id: 3,
    type: "tags",
    person: { name: "Hilary Mahy", href: "#" },
    tags: [
      { name: "Bug", href: "#", color: "bg-rose-500" },
      { name: "Accessibility", href: "#", color: "bg-indigo-500" },
    ],
    date: "6h ago",
  },
  {
    id: 4,
    type: "comment",
    person: { name: "Jason Meyers", href: "#" },
    imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
    date: "2h ago",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TempestScreenTemplate() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-full">
        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500" alt="Your Company" />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto bg-gray-800">
              <nav className="flex-1 px-2 py-4">
                <div className="mt-10">
                  <p className="px-3 text-sm font-medium text-gray-400">Socials</p>
                  <div className="mt-2 space-y-1">
                    {projects.map((project) => (
                      <a
                        key={project.id}
                        href={project.href}
                        className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <span className="truncate">{project.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex w-0 flex-1 flex-col lg:pl-64">
          <main className="flex-1">
            <div className="py-8 xl:py-10">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid ">
                <div>
                  <div>
                    <div className="md:flex md:items-center md:justify-between md:space-x-4  xl:pb-6">
                      <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                          Welcome to,
                          <a href="#" className="ml-2 font-medium text-gray-500">
                            Masjid Quba
                          </a>{" "}
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                          Please kindly{" "}
                          <a href="#" className="font-medium text-gray-900">
                            silence
                          </a>{" "}
                          your{" "}
                          <a href="#" className="font-medium text-gray-900">
                            phone
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="py-3 xl:pb-0 xl:pt-6"></div>
                  </div>
                </div>
                <div>
                  <div className="pt-6">
                    {/* Activity feed*/}

                    <div className="mt-4 flex space-x-3 md:mt-0">
                      <button
                        type="button"
                        className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        <PencilIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Edit
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        <PencilIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Edit
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        <BellIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
