import React from "react";
import { Fragment, useState, useEffect } from "react";

import { XMarkIcon } from "@heroicons/react/20/solid";
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { toHijri } from "hijri-date/lib/safe";

import ImageOptions from "../ImageOptions";
import { TemplateProps } from "../PrayerTimesScreen";
import PrayerTimeTable from "../PrayerTimeTable/PrayerTimeTable";

const pages = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];

export function Breadcrumb() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex space-x-4 divide-y divide-gray-700 rounded-md bg-[#1D2431] px-6  shadow-inner">
        <li className="flex">
          <div className="flex items-center">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              {/* <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" /> */}
              {/* <span className="sr-only">Home</span> */}
            </a>
          </div>
        </li>

        <div style={{ flexDirection: "column" }} className="flex h-full items-center p-4">
          <a className="text-center text-xl font-medium text-gray-400 hover:text-gray-700">Majid Quba</a>
          <a className="text-center text-3xl font-medium text-gray-100 hover:text-gray-700">12:11</a>
        </div>
      </ol>
    </nav>
  );
}

const features = [
  {
    name: "Push to deploy",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description: "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export function MiddleSection() {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    // Calculate the time remaining until Fajr prayer (in seconds)
    const now = new Date();
    const fajrTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5, 0, 0); // Replace with actual Fajr prayer time
    const timeRemaining = Math.max(0, Math.floor((fajrTime - now) / 1000));
    setCountdown(timeRemaining);

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => Math.max(0, prevCountdown - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatCountdown = () => {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative isolate w-full overflow-hidden bg-gray-900 shadow-2xl">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="flex h-full items-center justify-center">
        <div className="mx-auto max-w-full   lg:flex lg:pb-40">
          <div className="align-center mx-auto max-w-full flex-shrink-0 justify-center lg:mx-0 lg:max-w-xl ">
            <h1 style={{ fontSize: "150px" }} className="text-6xl font-bold tracking-tight text-white sm:text-6xl">
              {formatCountdown()}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Silence Your Phone, Find Serenity: Please switch off your phone and maintain silence in the mosque. Let's create a peaceful and respectful
              environment for all worshippers. Thank you.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            {/* Your image or content here */}
          </div>
        </div>
      </div>
    </div>
  );
}

// export function MiddleSection() {
//   const [countdown, setCountdown] = useState(0)

//   useEffect(() => {
//     // Calculate the time remaining until Fajr prayer (in seconds)
//     const now = new Date()
//     const fajrTime = new Date(
//       now.getFullYear(),
//       now.getMonth(),
//       now.getDate(),
//       5,
//       0,
//       0
//     ) // Replace with actual Fajr prayer time
//     const timeRemaining = Math.max(0, Math.floor((fajrTime - now) / 1000))
//     setCountdown(timeRemaining)

//     const interval = setInterval(() => {
//       setCountdown((prevCountdown) => Math.max(0, prevCountdown - 1))
//     }, 1000)

//     return () => clearInterval(interval)
//   }, [])

//   const formatCountdown = () => {
//     const hours = Math.floor(countdown / 3600)
//     const minutes = Math.floor((countdown % 3600) / 60)
//     const seconds = countdown % 60
//     return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds
//       .toString()
//       .padStart(2, '0')}`
//   }

//   return (
//     <div className="flex h-full items-center justify-center bg-gray-900">
//       <div className="text-center">
//         <h2 className="text-base font-semibold leading-7 text-indigo-400">
//           {/* {`The call to prayer for Fajr is in...`} */}
//           The call to prayer for Fajir is in
//         </h2>
//         <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
//           {formatCountdown()}
//         </p>
//         <p className="mt-6 text-lg leading-8 text-gray-300">
//           Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
//           Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
//           In mi viverra elit nunc.
//         </p>
//       </div>
//     </div>
//   )
// }
// export function Example() {
//   const [show, setShow] = useState(true)

//   return (
//     <>
//       {/* Global notification live region, render this permanently at the end of the document */}
//       <div
//         aria-live="assertive"
//         className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
//       >
//         <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
//           {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
//           <Transition
//             show={show}
//             as={Fragment}
//             enter="transform ease-out duration-300 transition"
//             enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
//             enterTo="translate-y-0 opacity-100 sm:translate-x-0"
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//               <div className="p-4">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <CheckCircleIcon
//                       className="h-6 w-6 text-green-400"
//                       aria-hidden="true"
//                     />
//                   </div>
//                   <div className="ml-3 w-0 flex-1 pt-0.5">
//                     <p className="text-sm font-medium text-gray-900">
//                       Welcome to our masjid
//                     </p>
//                     <p className="mt-1 text-sm text-gray-500">
//                       Kindly ensure a quiet environment by switching off your
//                       mobile phones.
//                     </p>
//                   </div>
//                   {/* <div className="ml-4 flex flex-shrink-0">
//                     <button
//                       type="button"
//                       className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                       onClick={() => {
//                         setShow(false)
//                       }}
//                     >
//                       <span className="sr-only">Close</span>
//                       <XMarkIcon className="h-5 w-5" aria-hidden="true" />
//                     </button>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </Transition>
//         </div>
//       </div>
//     </>
//   )
// }

function AvalancheScreenTemplate({
  theme,
  showTopMessageEditor,
  showSubMessageEditor,
  setShowTopMessageEditor,
  setShowSubMessageEditor,
  showImageEditor,
  editOptions,
  images,
  onlyShowTimings,
  styles,
  setShowImageEditor,
  topMessage,
  subMessage,
  currentImage,
  currentTime,
  prayerTime,
  nextPrayer,
  prayerTimes,
}: TemplateProps) {
  const HijriDate = toHijri(new Date(prayerTime?.date));
  const stats = [
    { name: "Fajir", value: "3:65", unit: "Enters 2:21" },
    { name: "Duhur", value: "3:65", unit: "Enters 2:21" },
    { name: "Asr", value: "3:65", unit: "Enters 2:21" },
    { name: "Mahgrib", value: "3:65", unit: "Enters 2:21", active: true },
    { name: "Isha", value: "3:65", unit: "Enters 2:21" },
  ];
  return (
    <div style={{ justifyContent: "center" }} className="flex h-full w-full ">
      {/* <Example /> */}
      <div className=" absolute left-20 top-20 z-10">
        <Breadcrumb />
      </div>
      <MiddleSection />
      <div className="absolute bottom-0 w-full">
        <div className="bg-gray-900">
          <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat) => (
              <div
                style={stat.active && { backgroundColor: "purple" }}
                key={stat.name}
                // className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8"
                className="bg-gray-[#1A212F] px-4 py-6 shadow-inner sm:px-6 lg:px-8"
              >
                <p className="text-2xl font-medium leading-6 text-gray-400">{stat.name}</p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-6xl font-semibold tracking-tight text-white">{stat.value}</span>
                  {stat.unit ? <span className="text-lg text-gray-400">{stat.unit}</span> : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvalancheScreenTemplate;

// <div
//   onClick={() => {
//     showTopMessageEditor && setShowTopMessageEditor(false)
//     showSubMessageEditor && setShowSubMessageEditor(false)
//   }}
//   className={`flex h-full w-full flex-row ${styles.wrapper} `}
//   style={{ backgroundColor: theme.backgroundColor, overflow: 'auto' }}
// >
//   {showImageEditor && (
//     <ImageOptions
//       setImages={editOptions.setImages}
//       images={images}
//       setShowImageEditor={setShowImageEditor}
//     />
//   )}

//   {!onlyShowTimings && (
//     <div
//       className={` shadow ${styles.leftView} `}
//       style={{ backgroundColor: theme.backgroundColor }}
//     >
//       <div
//         className="mb-1 mt-5 flex items-center justify-center text-center"
//         style={{ color: theme.textColor }}
//       >
//         <p dangerouslySetInnerHTML={{ __html: topMessage }}></p>
//         {editOptions?.setTopMessage && (
//           <PencilSquareIcon
//             className="ml-2 mr-2 h-5 w-5 cursor-pointer text-indigo-500 hover:text-gray-700"
//             aria-hidden="true"
//             title='Edit "Top Message"'
//             onClick={() => setShowTopMessageEditor(true)}
//           />
//         )}
//       </div>

//       {showTopMessageEditor && (
//         <div
//           className="absolute left-0 top-[10%] z-50 m-4 h-fit  w-[60%] rounded-lg bg-white shadow-lg"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <Editor
//             title="Edit Top Message"
//             value={topMessage}
//             onChange={(content) => {
//               editOptions.setTopMessage(content)
//             }}
//             onCancel={() => setShowTopMessageEditor(false)}
//           />
//         </div>
//       )}

//       <div className="relative mt-10">
//         {editOptions?.setImages && (
//           <PencilSquareIcon
//             className="absolute right-[6px] ml-2 mr-2 h-5 w-5 cursor-pointer text-indigo-500 hover:text-gray-700"
//             aria-hidden="true"
//             title='Edit "Top Message"'
//             onClick={() => setShowImageEditor(true)}
//           />
//         )}
//         <img
//           src={images[currentImage]}
//           alt={`Image ${currentImage + 1}`}
//           className="mx-auto w-full rounded-lg object-contain shadow-md"
//           style={{ minHeight: '75vh', maxHeight: '75vh' }}
//         />
//       </div>

//       <div className="mt-10 flex flex flex-row justify-center">
//         <p
//           style={{ color: theme.textColor }}
//           dangerouslySetInnerHTML={{ __html: subMessage }}
//         ></p>
//         {editOptions?.setSubMessage && (
//           <PencilSquareIcon
//             className="ml-2 mr-2 h-5 w-5 cursor-pointer text-indigo-500 hover:text-gray-700"
//             aria-hidden="true"
//             title='Edit "Sub Message"'
//             onClick={() => setShowSubMessageEditor(true)}
//           />
//         )}
//       </div>
//     </div>
//   )}
//   {showSubMessageEditor && (
//     <div
//       className="absolute bottom-[60px] left-0 z-50 m-4 h-fit  w-[60%] rounded-lg bg-white shadow-lg"
//       onClick={(e) => e.stopPropagation()}
//     >
//       <Editor
//         title="Edit Top Message"
//         value={subMessage}
//         onChange={(content) => {
//           editOptions.setSubMessage(content)
//         }}
//         onCancel={() => showSubMessageEditor(false)}
//       />
//     </div>
//   )}
//   <div
//     className={`h-full  overflow-hidden  shadow sm:rounded-lg ${
//       onlyShowTimings ? styles.fullView : styles.rightView
//     } `}
//     style={{ backgroundColor: theme.backgroundColor }}
//   >
//     <div className="container  mx-auto">
//       <div
//         className="m-4 rounded-lg p-1 shadow-lg"
//         style={{
//           color: theme.timeCardTextColor,
//           backgroundColor: theme.timeCardColor,
//         }}
//       >
//         <h1
//           className="mb-1 mt-2 text-center font-bold  "
//           style={{ fontSize: '3vw' }}
//         >
//           <span>{currentTime}</span>
//         </h1>
//         <p
//           className="f mb-8 text-center"
//           style={{ color: theme.timeCardTextColor, fontSize: '2vw' }}
//         >
//           {prayerTime?.date} - {HijriDate.date}/{HijriDate.month}/
//           {HijriDate.year}
//         </p>
//       </div>

//       <PrayerTimeTable
//         prayerTime={prayerTime}
//         theme={theme}
//         nextPrayer={nextPrayer}
//         editOptions={editOptions}
//         prayerTimes={prayerTimes}
//         currentTime={currentTime}
//       />
//       <hr />
//       <div className="mt-5">
//         <h1
//           style={{ color: theme.textColor, fontSize: '1.5vw' }}
//           className="mb-1 text-center font-bold "
//         >
//           Next Jamaat dijfdsiojfodi
//         </h1>
//         <h2
//           className="f mb-5 text-center "
//           style={{ color: theme.textColor, fontSize: '2.5vw' }}
//         >
//           {nextPrayer.name} - {nextPrayer.time}
//         </h2>

//         <h2
//           className="f mb-5 text-center "
//           style={{ color: theme.textColor, fontSize: '1.5vw' }}
//         >
//           {prayerTime?.bottom_message}
//         </h2>
//       </div>
//     </div>
//   </div>
// </div>
