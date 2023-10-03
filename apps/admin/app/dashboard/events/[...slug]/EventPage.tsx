"use client";
// import React from 'react'
// import { Fragment, useState } from 'react'

// import { div, Listbox, Menu, Transition } from '@headlessui/react'
// import {
//   Bars3Icon,
//   CalendarDaysIcon,
//   CreditCardIcon,
// EllipsisVerticalIcon,
//   FaceFrownIcon,
//   FaceSmileIcon,
//   FireIcon,
//   HandThumbUpIcon,
//   HeartIcon,
//   PaperClipIcon,
//   UserCircleIcon,
//   XMarkIcon as XMarkIconMini,
// } from '@heroicons/react/20/solid'
// import {
//   BellIcon,
//   XMarkIcon as XMarkIconOutline,
// } from '@heroicons/react/24/outline'
// import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { Fragment, useState } from "react";
import {
  Bars3Icon,
  CalendarDaysIcon,
  CreditCardIcon,
  EllipsisHorizontalIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
  PaperClipIcon,
  UserCircleIcon,
  QuestionMarkCircleIcon,
  PlusIcon,
  LinkIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import {
  Bars4Icon,
  BellIcon,
  CalendarIcon,
  CheckBadgeIcon,
  ClockIcon,
  PhotoIcon,
  TableCellsIcon,
  ViewColumnsIcon,
  XMarkIcon as XMarkIconOutline,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { publicId } from "@/app/_helpers/web/formatters";
import { useEstablishment } from "@/app/_helpers/web/hooks/useEstablishment";
import Nav from "@/app/components/Nav/Nav";
import React from "react";
import Link from "next/link";
import Loader from "@/app/components/Loader/Loader";

// import Articles from 'src/components/Articles/Articles'
// import Loader from 'src/components/Loader/Loader'
// import Nav from 'src/components/Nav/Nav'
// import { handleErrors } from 'src/lib/formatters'
// import { useEstablishment } from 'src/lib/hooks/useEstablishment'
// import { gqlF, requestHandler } from 'src/lib/requestHandler'

// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */

// const navigation = [
//   { name: 'Home', href: '#' },
//   { name: 'Invoices', href: '#' },
//   { name: 'Clients', href: '#' },
//   { name: 'Expenses', href: '#' },
// ]
// const invoice = {
//   subTotal: '$8,800.00',
//   tax: '$1,760.00',
//   total: '$10,560.00',
//   items: [
//     {
//       id: 1,
//       title: 'Logo redesign',
//       description: 'New logo and digital asset playbook.',
//       hours: '20.0',
//       rate: '$100.00',
//       price: '$2,000.00',
//     },
//     {
//       id: 2,
//       title: 'Website redesign',
//       description: 'Design and program new company website.',
//       hours: '52.0',
//       rate: '$100.00',
//       price: '$5,200.00',
//     },
//     {
//       id: 3,
//       title: 'Business cards',
//       description: 'Design and production of 3.5" x 2.0" business cards.',
//       hours: '12.0',
//       rate: '$100.00',
//       price: '$1,200.00',
//     },
//     {
//       id: 4,
//       title: 'T-shirt design',
//       description: 'Three t-shirt design concepts.',
//       hours: '4.0',
//       rate: '$100.00',
//       price: '$400.00',
//     },
//   ],
// }
// const activity = [
//   {
//     id: 1,
//     type: 'created',
//     person: { name: 'Chelsea Hagon' },
//     date: '7d ago',
//     dateTime: '2023-01-23T10:32',
//   },
//   {
//     id: 2,
//     type: 'edited',
//     person: { name: 'Chelsea Hagon' },
//     date: '6d ago',
//     dateTime: '2023-01-23T11:03',
//   },
//   {
//     id: 3,
//     type: 'sent',
//     person: { name: 'Chelsea Hagon' },
//     date: '6d ago',
//     dateTime: '2023-01-23T11:24',
//   },
//   {
//     id: 4,
//     type: 'commented',
//     person: {
//       name: 'Chelsea Hagon',
//       imageUrl:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     comment:
//       'Called client, they reassured me the invoice would be paid by the 25th.',
//     date: '3d ago',
//     dateTime: '2023-01-23T15:56',
//   },
//   {
//     id: 5,
//     type: 'viewed',
//     person: { name: 'Alex Curren' },
//     date: '2d ago',
//     dateTime: '2023-01-24T09:12',
//   },
//   {
//     id: 6,
//     type: 'paid',
//     person: { name: 'Alex Curren' },
//     date: '1d ago',
//     dateTime: '2023-01-24T09:20',
//   },
// ]
// const moods = [
//   {
//     name: 'Excited',
//     value: 'excited',
//     icon: FireIcon,
//     iconColor: 'text-white',
//     bgColor: 'bg-red-500',
//   },
//   {
//     name: 'Loved',
//     value: 'loved',
//     icon: HeartIcon,
//     iconColor: 'text-white',
//     bgColor: 'bg-pink-400',
//   },
//   {
//     name: 'Happy',
//     value: 'happy',
//     icon: FaceSmileIcon,
//     iconColor: 'text-white',
//     bgColor: 'bg-green-400',
//   },
//   {
//     name: 'Sad',
//     value: 'sad',
//     icon: FaceFrownIcon,
//     iconColor: 'text-white',
//     bgColor: 'bg-yellow-400',
//   },
//   {
//     name: 'Thumbsy',
//     value: 'thumbsy',
//     icon: HandThumbUpIcon,
//     iconColor: 'text-white',
//     bgColor: 'bg-blue-500',
//   },
//   {
//     name: 'I feel nothing',
//     value: null,
//     icon: XMarkIconMini,
//     iconColor: 'text-gray-400',
//     bgColor: 'bg-transparent',
//   },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export function EventsPage() {
//   const [selected, setSelected] = useState(moods[5])

//   return (
//     <main>
//       <div className="position-absolute mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//           {/* Invoice summary */}
//           <div className="lg:col-start-3 lg:row-end-1">
//             <h2 className="sr-only">Summary</h2>
//             <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
//               <dl className="flex flex-wrap">
//                 <div className="flex-auto pl-6 pt-6">
//                   <dt className="text-sm font-semibold leading-6 text-gray-900">
//                     Amount
//                   </dt>
//                   <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
//                     $10,560.00
//                   </dd>
//                 </div>
//                 <div className="flex-none self-end px-6 pt-4">
//                   <dt className="sr-only">Status</dt>
//                   <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
//                     Paid
//                   </dd>
//                 </div>
//                 <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
//                   <dt className="flex-none">
//                     <span className="sr-only">Client</span>
//                     <UserCircleIcon
//                       className="h-6 w-5 text-gray-400"
//                       aria-hidden="true"
//                     />
//                   </dt>
//                   <dd className="text-sm font-medium leading-6 text-gray-900">
//                     Alex Curren
//                   </dd>
//                 </div>
//                 <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
//                   <dt className="flex-none">
//                     <span className="sr-only">Due date</span>
//                     <CalendarDaysIcon
//                       className="h-6 w-5 text-gray-400"
//                       aria-hidden="true"
//                     />
//                   </dt>
//                   <dd className="text-sm leading-6 text-gray-500">
//                     <time dateTime="2023-01-31">January 31, 2023</time>
//                   </dd>
//                 </div>
//                 <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
//                   <dt className="flex-none">
//                     <span className="sr-only">Status</span>
//                     <CreditCardIcon
//                       className="h-6 w-5 text-gray-400"
//                       aria-hidden="true"
//                     />
//                   </dt>
//                   <dd className="text-sm leading-6 text-gray-500">
//                     Paid with MasterCard
//                   </dd>
//                 </div>
//               </dl>
//               <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
//                 <a
//                   href="#"
//                   className="text-sm font-semibold leading-6 text-gray-900"
//                 >
//                   Download receipt <span aria-hidden="true">&rarr;</span>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Invoice */}
//           <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
//             <h2 className="text-base font-semibold leading-6 text-gray-900">
//               Invoice
//             </h2>
//             <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
//               <div className="sm:pr-4">
//                 <dt className="inline text-gray-500">Issued on</dt>{' '}
//                 <dd className="inline text-gray-700">
//                   <time dateTime="2023-23-01">January 23, 2023</time>
//                 </dd>
//               </div>
//               <div className="mt-2 sm:mt-0 sm:pl-4">
//                 <dt className="inline text-gray-500">Due on</dt>{' '}
//                 <dd className="inline text-gray-700">
//                   <time dateTime="2023-31-01">January 31, 2023</time>
//                 </dd>
//               </div>
//               <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
//                 <dt className="font-semibold text-gray-900">From</dt>
//                 <dd className="mt-2 text-gray-500">
//                   <span className="font-medium text-gray-900">Acme, Inc.</span>
//                   <br />
//                   7363 Cynthia Pass
//                   <br />
//                   Toronto, ON N3Y 4H8
//                 </dd>
//               </div>
//               <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
//                 <dt className="font-semibold text-gray-900">To</dt>
//                 <dd className="mt-2 text-gray-500">
//                   <span className="font-medium text-gray-900">Tuple, Inc</span>
//                   <br />
//                   886 Walter Street
//                   <br />
//                   New York, NY 12345
//                 </dd>
//               </div>
//             </dl>
//             <table className="mt-16 w-full whitespace-nowrap text-left text-sm leading-6">
//               <colgroup>
//                 <col className="w-full" />
//                 <col />
//                 <col />
//                 <col />
//               </colgroup>
//               <thead className="border-b border-gray-200 text-gray-900">
//                 <tr>
//                   <th scope="col" className="px-0 py-3 font-semibold">
//                     Projects
//                   </th>
//                   <th
//                     scope="col"
//                     className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell"
//                   >
//                     Hours
//                   </th>
//                   <th
//                     scope="col"
//                     className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell"
//                   >
//                     Rate
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-3 pl-8 pr-0 text-right font-semibold"
//                   >
//                     Price
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {invoice.items.map((item) => (
//                   <tr key={item.id} className="border-b border-gray-100">
//                     <td className="max-w-0 px-0 py-5 align-top">
//                       <div className="truncate font-medium text-gray-900">
//                         {item.title}
//                       </div>
//                       <div className="truncate text-gray-500">
//                         {item.description}
//                       </div>
//                     </td>
//                     <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
//                       {item.hours}
//                     </td>
//                     <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
//                       {item.rate}
//                     </td>
//                     <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">
//                       {item.price}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <th
//                     scope="row"
//                     className="px-0 pb-0 pt-6 font-normal text-gray-700 sm:hidden"
//                   >
//                     Subtotal
//                   </th>
//                   <th
//                     scope="row"
//                     colSpan={3}
//                     className="hidden px-0 pb-0 pt-6 text-right font-normal text-gray-700 sm:table-cell"
//                   >
//                     Subtotal
//                   </th>
//                   <td className="pb-0 pl-8 pr-0 pt-6 text-right tabular-nums text-gray-900">
//                     {invoice.subTotal}
//                   </td>
//                 </tr>
//                 <tr>
//                   <th
//                     scope="row"
//                     className="pt-4 font-normal text-gray-700 sm:hidden"
//                   >
//                     Tax
//                   </th>
//                   <th
//                     scope="row"
//                     colSpan={3}
//                     className="hidden pt-4 text-right font-normal text-gray-700 sm:table-cell"
//                   >
//                     Tax
//                   </th>
//                   <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-gray-900">
//                     {invoice.tax}
//                   </td>
//                 </tr>
//                 <tr>
//                   <th
//                     scope="row"
//                     className="pt-4 font-semibold text-gray-900 sm:hidden"
//                   >
//                     Total
//                   </th>
//                   <th
//                     scope="row"
//                     colSpan={3}
//                     className="hidden pt-4 text-right font-semibold text-gray-900 sm:table-cell"
//                   >
//                     Total
//                   </th>
//                   <td className="pb-0 pl-8 pr-0 pt-4 text-right font-semibold tabular-nums text-gray-900">
//                     {invoice.total}
//                   </td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>

//           <div className="lg:col-start-3">
//             {/* Activity feed */}
//             <h2 className="text-sm font-semibold leading-6 text-gray-900">
//               Activity
//             </h2>
//             <ul role="list" className="mt-6 space-y-6">
//               {activity.map((activityItem, activityItemIdx) => (
//                 <li key={activityItem.id} className="relative flex gap-x-4">
//                   <div
//                     className={classNames(
//                       activityItemIdx === activity.length - 1
//                         ? 'h-6'
//                         : '-bottom-6',
//                       'absolute left-0 top-0 flex w-6 justify-center'
//                     )}
//                   >
//                     <div className="w-px bg-gray-200" />
//                   </div>
//                   {activityItem.type === 'commented' ? (
//                     <>
//                       <img
//                         src={activityItem.person.imageUrl}
//                         alt=""
//                         className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
//                       />
//                       <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
//                         <div className="flex justify-between gap-x-4">
//                           <div className="py-0.5 text-xs leading-5 text-gray-500">
//                             <span className="font-medium text-gray-900">
//                               {activityItem.person.name}
//                             </span>{' '}
//                             commented
//                           </div>
//                           <time
//                             dateTime={activityItem.dateTime}
//                             className="flex-none py-0.5 text-xs leading-5 text-gray-500"
//                           >
//                             {activityItem.date}
//                           </time>
//                         </div>
//                         <p className="text-sm leading-6 text-gray-500">
//                           {activityItem.comment}
//                         </p>
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
//                         {activityItem.type === 'paid' ? (
//                           <CheckCircleIcon
//                             className="h-6 w-6 text-indigo-600"
//                             aria-hidden="true"
//                           />
//                         ) : (
//                           <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
//                         )}
//                       </div>
//                       <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
//                         <span className="font-medium text-gray-900">
//                           {activityItem.person.name}
//                         </span>{' '}
//                         {activityItem.type} the invoice.
//                       </p>
//                       <time
//                         dateTime={activityItem.dateTime}
//                         className="flex-none py-0.5 text-xs leading-5 text-gray-500"
//                       >
//                         {activityItem.date}
//                       </time>
//                     </>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             {/* New comment form */}
//             <div className="mt-6 flex gap-x-3">
//               <img
//                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                 alt=""
//                 className="h-6 w-6 flex-none rounded-full bg-gray-50"
//               />
//               <form action="#" className="relative flex-auto">
//                 <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
//                   <label htmlFor="comment" className="sr-only">
//                     Add your comment
//                   </label>
//                   <textarea
//                     rows={2}
//                     name="comment"
//                     id="comment"
//                     className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="Add your comment..."
//                     defaultValue={''}
//                   />
//                 </div>

//                 <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
//                   <div className="flex items-center space-x-5">
//                     <div className="flex items-center">
//                       <button
//                         type="button"
//                         className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
//                       >
//                         <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
//                         <span className="sr-only">Attach a file</span>
//                       </button>
//                     </div>
//                     <div className="flex items-center">
//                       <Listbox value={selected} onChange={setSelected}>
//                         {({ open }) => (
//                           <>
//                             <Listbox.Label className="sr-only">
//                               Your mood
//                             </Listbox.Label>
//                             <div className="relative">
//                               <Listbox.Button className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
//                                 <span className="flex items-center justify-center">
//                                   {selected.value === null ? (
//                                     <span>
//                                       <FaceSmileIcon
//                                         className="h-5 w-5 flex-shrink-0"
//                                         aria-hidden="true"
//                                       />
//                                       <span className="sr-only">
//                                         Add your mood
//                                       </span>
//                                     </span>
//                                   ) : (
//                                     <span>
//                                       <span
//                                         className={classNames(
//                                           selected.bgColor,
//                                           'flex h-8 w-8 items-center justify-center rounded-full'
//                                         )}
//                                       >
//                                         <selected.icon
//                                           className="h-5 w-5 flex-shrink-0 text-white"
//                                           aria-hidden="true"
//                                         />
//                                       </span>
//                                       <span className="sr-only">
//                                         {selected.name}
//                                       </span>
//                                     </span>
//                                   )}
//                                 </span>
//                               </Listbox.Button>

//                               <Transition
//                                 show={open}
//                                 as={Fragment}
//                                 leave="transition ease-in duration-100"
//                                 leaveFrom="opacity-100"
//                                 leaveTo="opacity-0"
//                               >
//                                 <Listbox.Options className="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
//                                   {moods.map((mood) => (
//                                     <Listbox.Option
//                                       key={mood.value}
//                                       className={({ active }) =>
//                                         classNames(
//                                           active ? 'bg-gray-100' : 'bg-white',
//                                           'relative cursor-default select-none px-3 py-2'
//                                         )
//                                       }
//                                       value={mood}
//                                     >
//                                       <div className="flex items-center">
//                                         <div
//                                           className={classNames(
//                                             mood.bgColor,
//                                             'flex h-8 w-8 items-center justify-center rounded-full'
//                                           )}
//                                         >
//                                           <mood.icon
//                                             className={classNames(
//                                               mood.iconColor,
//                                               'h-5 w-5 flex-shrink-0'
//                                             )}
//                                             aria-hidden="true"
//                                           />
//                                         </div>
//                                         <span className="ml-3 block truncate font-medium">
//                                           {mood.name}
//                                         </span>
//                                       </div>
//                                     </Listbox.Option>
//                                   ))}
//                                 </Listbox.Options>
//                               </Transition>
//                             </div>
//                           </>
//                         )}
//                       </Listbox>
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                   >
//                     Comment
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

// function EventsPage() {
//   const { currentEstablishment, publicEstablishmentId } = useEstablishment()
//   const [options, setOptions] = React.useState({ page: 1, total: 0, limit: 25 })
//   const [loading, setLoading] = React.useState(true)
//   const [articles, setArticles] = React.useState(null)

//   React.useEffect(() => {
//     if (currentEstablishment) {
//       fetchArticles()
//     }
//   }, [currentEstablishment, options.page])

//   const fetchArticles = async () => {
//     const response = await requestHandler({
//       shouldCache: options.page === 1 ? true : false,
//       returnCache: true,
//       cacheKey: `articles-${options.page}-${options.limit}`,
//       body: gqlF(
//         `  query ArticlesQuery($page: Int!) {
//             paginatedArticles(page: $page, limit: 25 , lastId : ${
//               articles ? articles[articles.length - 1].id : 0
//             } ) {
//             articles {
//               id
//               description
//               title
//               userId
//               thumbnail
//               createdAt
//               updatedAt
//             }
//             total
//           }
//         }`,
//         { page: options.page }
//       ),
//     })

//     setLoading(false)

//     if (response?.data?.paginatedArticles) {
//       setArticles(response.data.paginatedArticles.articles)
//       setOptions({ ...options, total: response.data.paginatedArticles.total })
//     } else handleErrors(response)
//   }

//   return (
//     <>
//       {loading && <Loader />}
//       <div className=" min-h-screen">
//         <Nav
//           currentEstablishment={currentEstablishment}
//           establishemntLogin={() => {}}
//         />
//         {articles ? (
//           <div className="page-wrapper">
//             <Articles
//               articles={articles}
//               total={options.total}
//               publicEstablishmentId={publicEstablishmentId}
//               page={options.page}
//               currentEstablishment={currentEstablishment}
//               refetch={(page) => {
//                 setOptions({ ...options, page })
//               }}
//             />
//           </div>
//         ) : null}
//       </div>
//     </>
//   )
// }
// export default () => {
//   const { currentEstablishment, publicEstablishmentId } = useEstablishment()
//   const [options, setOptions] = React.useState({ page: 1, total: 0, limit: 25 })
//   const [loading, setLoading] = React.useState(true)
//   const [articles, setArticles] = React.useState(null)

//   React.useEffect(() => {
//     if (currentEstablishment) {
//       fetchArticles()
//     }
//   }, [currentEstablishment, options.page])

//   const fetchArticles = async () => {
//     const response = await requestHandler({
//       shouldCache: options.page === 1 ? true : false,
//       returnCache: true,
//       cacheKey: `articles-${options.page}-${options.limit}`,
//       body: gqlF(
//         `  query ArticlesQuery($page: Int!) {
//               paginatedArticles(page: $page, limit: 25 , lastId : ${
//                 articles ? articles[articles.length - 1].id : 0
//               } ) {
//               articles {
//                 id
//                 description
//                 title
//                 userId
//                 thumbnail
//                 createdAt
//                 updatedAt
//               }
//               total
//             }
//           }`,
//         { page: options.page }
//       ),
//     })

//     setLoading(false)

//     if (response?.data?.paginatedArticles) {
//       setArticles(response.data.paginatedArticles.articles)
//       setOptions({ ...options, total: response.data.paginatedArticles.total })
//     } else handleErrors(response)
//   }

//   if (loading) {
//     return <p>loading</p>
//   }

//   return (
//     <div className="h-screen max-h-screen overflow-y-auto">
//       <Nav
//         currentEstablishment={currentEstablishment}
//         establishemntLogin={() => {}}
//       />
//       {articles ? <EventsPage /> : null}
//     </div>
//   )
// }

// export default EventsPage

export const EventPage = () => {
  return (
    <EventsPageLayout
      Events={<EventsCell />}
      UpcomingEvents={<UpcomingEventsCell />}
      MainContent={
        <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Programs</h2>
              <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                View all<span className="sr-only">, clients</span>
              </a>
            </div>
            <ul role="list" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8">
              {clients.map((client) => (
                <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
                  <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                    <img src={client.imageUrl} alt={client.name} className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
                    <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
                    {/* <Menu as="div" className="relative ml-auto">
                      <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Open options</span>
                        <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a href="#" className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
                                View
                                <span className="sr-only">, {client.name}</span>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a href="#" className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
                                Edit
                                <span className="sr-only">, {client.name}</span>
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu> */}
                  </div>
                  <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                    <div className="flex justify-between gap-x-4 py-3">
                      <dt className="text-gray-500">Next date</dt>
                      <dd className="text-gray-700">
                        <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
                      </dd>
                    </div>
                    <div className="flex justify-between gap-x-4 py-3">
                      <dt className="text-gray-500">Frequency</dt>
                      <dd className="flex items-start gap-x-2">
                        <div className="font-medium text-gray-900">{client.lastInvoice.amount}</div>
                        <div className={classNames(statuses[client.lastInvoice.status], "rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset")}>
                          {client.lastInvoice.status}
                        </div>
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
          <table className="mt-5 w-full whitespace-nowrap text-left text-sm leading-6">
            <colgroup>
              <col className="w-full" />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="border-b border-gray-200 text-gray-900">
              <tr>
                <th scope="col" className="px-0 py-3 font-semibold">
                  Events
                </th>
                <th scope="col" className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">
                  Duration
                </th>
                <th scope="col" className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">
                  Date
                </th>
                <th scope="col" className="py-3 pl-8 pr-0 text-right font-semibold">
                  Preview / Share
                </th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="max-w-0 px-0 py-5 align-top">
                    <div className="truncate font-medium text-gray-900">{item.title}</div>
                    <div className="truncate text-gray-500">{item.description}</div>
                  </td>
                  <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">{item.hours}</td>
                  <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">{item.rate}</td>
                  <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    />
  );
};

function EventsPageLayout(props, { orgUsers }) {
  const { currentEstablishment, loading } = useEstablishment(orgUsers);

  //First name and last name are from user . There should be aservice which fetches it from the user table

  //Placeholder for now
  const firstName = "Derek";
  const secondName = "Sifford";

  if (!currentEstablishment || loading) {
    return <Loader />;
  }

  return (
    <div style={{ height: "100vh" }} className="block min-h-full overflow-y-auto">
      <Nav currentEstablishment={currentEstablishment} orgUsers={orgUsers} establishemntLogin={() => {}} />
      <main className="-mt-[82px]  pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Profile</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              {/* Welcome panel */}
              {/* Actions panel */}
              <section aria-labelledby="quick-links-title">
                <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                  <h2 className="sr-only" id="quick-links-title">
                    Quick links
                  </h2>
                  {actions.map((action, actionIdx) => (
                    <div
                      key={action.name}
                      className={classNames(
                        actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
                        actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                        actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                        actionIdx === actions.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
                        "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500"
                      )}
                    >
                      <div>
                        <span className={classNames(action.iconBackground, action.iconForeground, "inline-flex rounded-lg p-3 ring-4 ring-white")}>
                          <action.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-lg font-medium">
                          <Link
                            href={action.href}
                            // to={
                            //   action.href === "/prayertimes-editor"
                            //     ? routes.PrayerScreen({
                            //         publicId: publicId(currentEstablishment),
                            //       })
                            //     : action.href === "/articles"
                            //     ? routes.articles({
                            //         publicId: publicId(currentEstablishment),
                            //       })
                            //     : action.href === "/events"
                            //     ? routes.events({
                            //         publicId: publicId(currentEstablishment),
                            //       })
                            //     : null
                            // }
                            className="focus:outline-none"
                          >
                            {/* Extend touch target to entire panel */}
                            <span className="absolute inset-0" aria-hidden="true" />
                            {action.name}
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                        </p>
                      </div>
                      <span className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="profile-overview-title">
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <h2 className="sr-only" id="profile-overview-title">
                    Profile Overview
                  </h2>
                  <div className="bg-white">{props.MainContent}</div>
                  <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {stats.map((stat) => (
                      <div key={stat.label} className="px-6 py-5 text-center text-sm font-medium">
                        <span className="text-gray-900">{stat.value}</span> <span className="text-gray-600">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              {/* Announcements */}
              {/* Recent Hires */}
              {props.UpcomingEvents}
              <section aria-labelledby="announcements-title">
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="p-6">
                    {/* <h2
                      className="text-base font-medium text-gray-900"
                      id="announcements-title"
                    >
                      Events
                    </h2> */}
                    <div className="mt-6 flow-root">
                      {props.Events}
                      {/* <ul
                        role="list"
                        className="-my-5 divide-y divide-gray-200"
                      >
                        {announcements.map((announcement) => (
                          <li key={announcement.id} className="py-5">
                            <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                              <h3 className="text-sm font-semibold text-gray-800">
                                <a
                                  href={announcement.href}
                                  className="hover:underline focus:outline-none"
                                >
                                  {/* Extend touch target to entire panel */}
                      {/* <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />
                                  {announcement.title}
                                </a>
                              </h3>
                              <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                                {announcement.preview}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul> */}
                    </div>
                    {/*  */}
                    <CreateEventSideBar />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
            <span className="block sm:inline">&copy; 2023 MosqueICU, Charity No 192281.</span> <span className="block sm:inline">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const stats = [
  // { label: 'Applications', value: 12 },
  // { label: 'Locations', value: 4 },
  // { label: 'Inbox', value: 2 },
];
const actions = [
  {
    icon: ClockIcon,
    name: "Create a Program",
    href: "/prayertimes-editor",
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    icon: CheckBadgeIcon,
    name: "Promote a event",
    href: "/promote",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  // {
  //   icon: UsersIcon,
  //   name: 'Events',
  //   href: '/events',
  //   iconForeground: 'text-sky-700',
  //   iconBackground: 'bg-sky-50',
  // },
  // {
  //   icon: BanknotesIcon,

  //   name: 'Fundraising',
  //   href: '#',
  //   iconForeground: 'text-yellow-700',
  //   iconBackground: 'bg-yellow-50',
  // },
  // {
  //   icon: ReceiptRefundIcon,
  //   name: 'Submit an expense',
  //   href: '#',

  //   iconForeground: 'text-rose-700',
  //   iconBackground: 'bg-rose-50',
  // },
  // {
  //   icon: AcademicCapIcon,
  //   name: 'Training',
  //   href: '#',
  //   iconForeground: 'text-indigo-700',
  //   iconBackground: 'bg-indigo-50',
  // },
];
const recentHires = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Floyd Miles",
    handle: "floydmiles",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
];
const announcements = [
  {
    id: 1,
    title: "Office closed on July 2nd",
    href: "#",
    preview:
      "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
  },
  {
    id: 2,
    title: "New password policy",
    href: "#",
    preview:
      "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
  },
  {
    id: 3,
    title: "Office closed on July 2nd",
    href: "#",
    preview:
      "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function EventsCell(data, loading) {
  //   const { loading, data } = useEvents();

  if (!data) {
    return (
      <div>
        <h2 className="text-base font-semibold leading-6 text-gray-900">Events</h2>
        <p className="mt-1 text-sm text-gray-500">You haven’t got any upcoming events. Get started by selecting a template or start from an empty event.</p>
        <ul role="list" className="mt-6 gap-6 border-b border-t border-gray-200 py-6 ">
          {items.map((item, itemIdx) => (
            <li key={itemIdx} className="m-5 flow-root">
              <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-1 p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                <div className={classNames(item.background, "flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg")}>
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <span>{item.title}</span>
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex">
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Or start from an empty project
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    );
  } else {
    return <>{loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}</>;
  }
}

const invoice = {
  subTotal: "$8,800.00",
  tax: "$1,760.00",
  total: "$10,560.00",
  items: [
    {
      id: 1,
      title: "Logo redesign",
      description: "New logo and digital asset playbook.",
      hours: "20.0",
      rate: "$100.00",
      price: "$2,000.00",
    },
    {
      id: 2,
      title: "Website redesign",
      description: "Design and program new company website.",
      hours: "52.0",
      rate: "$100.00",
      price: "$5,200.00",
    },
    {
      id: 3,
      title: "Business cards",
      description: 'Design and production of 3.5" x 2.0" business cards.',
      hours: "12.0",
      rate: "$100.00",
      price: "$1,200.00",
    },
    {
      id: 4,
      title: "T-shirt design",
      description: "Three t-shirt design concepts.",
      hours: "4.0",
      rate: "$100.00",
      price: "$400.00",
    },
  ],
};

const items = [
  {
    title: "Prayer",
    description: "For one off extra prayers such as janazah.",
    icon: Bars4Icon,
    background: "bg-pink-500",
  },
  {
    title: "Khutba",
    description: "Plan a sermon set a date",
    icon: CalendarIcon,
    background: "bg-yellow-500",
  },
  {
    title: "Sports",
    description: "Great for community, team building and inspiration.",
    icon: PhotoIcon,
    background: "bg-green-500",
  },
  {
    title: "Competition",
    description: "Track tasks in different stages of your project.",
    icon: ViewColumnsIcon,
    background: "bg-blue-500",
  },
  {
    title: "Recital",
    description: "Spectate, Listen, read and practice quran.",
    icon: TableCellsIcon,
    background: "bg-indigo-500",
  },
  {
    title: "Congregation",
    description: "Plan a get together.",
    icon: ClockIcon,
    background: "bg-purple-500",
  },
];

const clients = [
  {
    id: 1,
    name: "Tuple",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$2,000.00",
      status: "Overdue",
    },
  },
  {
    id: 2,
    name: "SavvyCal",
    imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: "$14,000.00",
      status: "Paid",
    },
  },
];

const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};

function UpcomingEventsCell() {
  const [upcoming, setUpcoming] = useState();

  if (!upcoming) {
    return (
      <section aria-labelledby="recent-hires-title">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="lg:col-start-3 lg:row-end-1">
            <h2 className="sr-only">Summary</h2>
            <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
              <dl className="flex flex-wrap">
                <div className="flex-auto pl-6 pt-6">
                  <dt className="text-sm font-semibold leading-6 text-gray-900">Upcoming</dt>
                  <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">$10,560.00</dd>
                </div>
                <div className="flex-none self-end px-6 pt-4">
                  <dt className="sr-only">Status</dt>
                  <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">Paid</dd>
                </div>
                <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                  <dt className="flex-none">
                    <span className="sr-only">Client</span>
                    <UserCircleIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm font-medium leading-6 text-gray-900">Alex Curren</dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt className="flex-none">
                    <span className="sr-only">Due date</span>
                    <CalendarDaysIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-500">
                    <time dateTime="2023-01-31">January 31, 2023</time>
                  </dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt className="flex-none">
                    <span className="sr-only">Status</span>
                    <CreditCardIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-500">Paid with MasterCard</dd>
                </div>
              </dl>
              <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Download receipt <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
}

const team = [
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Whitney Francis",
    email: "whitney.francis@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    email: "leonard.krasner@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Floyd Miles",
    email: "floyd.miles@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emily Selman",
    email: "emily.selman@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function CreateEventSideBar() {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div show={open} as={Fragment}>
        <div as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <div
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="pointer-events-auto w-screen max-w-md">
                    <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                          <div className="flex items-center justify-between">
                            <h1 className="text-base font-semibold leading-6 text-white">New Event</h1>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                          <div className="mt-1">
                            <p className="text-sm text-indigo-300">Get started by filling in the information below to create your new event.</p>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="divide-y divide-gray-200 px-4 sm:px-6">
                            <div className="space-y-6 pb-5 pt-6">
                              <div>
                                <label htmlFor="project-name" className="block text-sm font-medium leading-6 text-gray-900">
                                  Project name
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="project-name"
                                    id="project-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div>
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                  Description
                                </label>
                                <div className="mt-2">
                                  <textarea
                                    id="description"
                                    name="description"
                                    rows={4}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div>
                                {/* <h3 className="text-sm font-medium leading-6 text-gray-900">Team Members</h3>
                              <div className="mt-2">
                                <div className="flex space-x-2">
                                  {team.map((person) => (
                                    <a key={person.email} href={person.href} className="rounded-full hover:opacity-75">
                                      <img
                                        className="inline-block h-8 w-8 rounded-full"
                                        src={person.imageUrl}
                                        alt={person.name}
                                      />
                                    </a>
                                  ))}
                                  <button
                                    type="button"
                                    className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    <span className="sr-only">Add team member</span>
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  </button>
                                </div>
                              </div> */}
                              </div>
                              <fieldset>
                                <legend className="text-sm font-medium leading-6 text-gray-900">Privacy</legend>
                                <div className="mt-2 space-y-4">
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-6 items-center">
                                      <input
                                        id="privacy-public"
                                        name="privacy"
                                        aria-describedby="privacy-public-description"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        defaultChecked
                                      />
                                    </div>
                                    <div className="pl-7 text-sm leading-6">
                                      <label htmlFor="privacy-public" className="font-medium text-gray-900">
                                        Public access
                                      </label>
                                      <p id="privacy-public-description" className="text-gray-500">
                                        Everyone with the link will see this project.
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="relative flex items-start">
                                      <div className="absolute flex h-6 items-center">
                                        <input
                                          id="privacy-private-to-project"
                                          name="privacy"
                                          aria-describedby="privacy-private-to-project-description"
                                          type="radio"
                                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                      </div>
                                      <div className="pl-7 text-sm leading-6">
                                        <label htmlFor="privacy-private-to-project" className="font-medium text-gray-900">
                                          Private to project members
                                        </label>
                                        <p id="privacy-private-to-project-description" className="text-gray-500">
                                          Only members of this project would be able to access.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="relative flex items-start">
                                      <div className="absolute flex h-6 items-center">
                                        <input
                                          id="privacy-private"
                                          name="privacy"
                                          aria-describedby="privacy-private-to-project-description"
                                          type="radio"
                                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                      </div>
                                      <div className="pl-7 text-sm leading-6">
                                        <label htmlFor="privacy-private" className="font-medium text-gray-900">
                                          Private to you
                                        </label>
                                        <p id="privacy-private-description" className="text-gray-500">
                                          You are the only one able to access this project.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                            </div>
                            <div className="pb-6 pt-4">
                              <div className="flex text-sm">
                                <a href="#" className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900">
                                  <LinkIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900" aria-hidden="true" />
                                  <span className="ml-2">Copy link</span>
                                </a>
                              </div>
                              <div className="mt-4 flex text-sm">
                                <a href="#" className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                                  <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                  <span className="ml-2">Learn more about sharing</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-shrink-0 justify-end px-4 py-4">
                        <button
                          type="button"
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-6">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="flex w-full items-center justify-center rounded-md bg-[#3977A4] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
        >
          Create event
        </button>
      </div>
    );
  }
}

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description: "Solid walnut base with rare earth magnets and polycarbonate add-ons.",
  },
  { name: "Dimensions", description: '15" x 3.75" x .75"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  {
    name: "Includes",
    description: "Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder",
  },
  {
    name: "Considerations",
    description: "Made from natural materials. Grain and color vary with each item.",
  },
];

function EventPreview() {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img src="https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg" alt="" className="h-96 w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
          <p className="mt-4 text-gray-500">
            Organize is a system to keep your desk tidy and photo-worthy all day long. Procrastinate your work while you meticulously arrange items into
            dedicated trays.
          </p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
