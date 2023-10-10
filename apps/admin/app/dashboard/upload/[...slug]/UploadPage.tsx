'use client';
import React from 'react';

import {
	useState,
	Fragment,
} from 'react';
import {
	Disclosure,
	Listbox,
	Menu,
	Transition,
} from '@headlessui/react';
import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
	BriefcaseIcon,
	CalendarIcon,
	CheckCircleIcon,
	CheckIcon,
	ChevronDownIcon,
	ChevronRightIcon,
	CurrencyDollarIcon,
	EnvelopeIcon,
	LinkIcon,
	MagnifyingGlassIcon,
	MapPinIcon,
	PencilIcon,
} from '@heroicons/react/20/solid';
import FileSidebar from './FileSidebar';
import UploadPageCell from './UploadPageCell';
import UploadMobileSearch from './UploadMobileSearch';
import { useEstablishment } from '@/app/_helpers/web/hooks/useEstablishment';
import Nav from '@/app/components/Nav/Nav';
import SideBarLayout from '@/app/components/__Layouts/homesidebar';
import Loading from '../../account/[...slug]/loading';
import { Toaster } from 'react-hot-toast';

function UploadPageLayout(props) {
	return (
		<>
			<div
				className='flex h-full pt-20'
				style={{
					marginTop: '-5rem',
				}}
			>
				{/* Mobile menu */}
				{/* {props.nav.mobile} */}

				{/* Content area */}
				<div className='flex flex-1 flex-col overflow-hidden'>
					{props.nav.default}

					<div className='flex flex-1 items-stretch overflow-hidden'>
						{/* Main content */}
						{props.mainLayout}
						{/* Details sidebar */}
						{props.sideBar}
					</div>
				</div>
			</div>
		</>
	);
}

const UploadPage = () => {
	const {
		currentEstablishment,
		publicEstablishmentId,
	} = useEstablishment();
	const [currentTab, setCurrentTab] =
		useState('Recently Added');
	const [
		mobileMenuOpen,
		setMobileMenuOpen,
	] = useState(false);
	const [currentFile, setCurrentFile] =
		useState();
	// const { pathname, search, g } = useLocation();

	let search = '';
	let pathname = '';
	let hash = '';

	const [uploads, setUploads] =
		useState({
			images: [],
			videos: [],
			audio: [],
			other: [],
		});
	const [options, setOptions] =
		React.useState({
			page: 1,
			total: 0,
		});

	return (
		<>
			<SideBarLayout
				// sideBar={<PrayersSidebar />}
				currentEstablishment={
					currentEstablishment
				}
				loading={Loading}
			>
				<header className='bg-gray-50  p-8 rounded-full'>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
						<div className='min-w-0 flex-1'>
							<h1 className='mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
								Uploads
							</h1>
							<div className='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-8'>
								<p className='mt-2 flex items-center text-sm text-gray-500'>
									{/* <BriefcaseIcon
									className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
									aria-hidden='true'
								/> */}
									A schedule of
									<b className=' text-blue-600 font-bold px-1'>
										obligatory
									</b>
									prayers
									conducted at
									the mosque.{' '}
								</p>
								{/* <div className='mt-2 flex items-center text-sm text-gray-500'>
								<MapPinIcon
									className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
									aria-hidden='true'
								/>
								Remote
							</div> */}
								{/* <div className='mt-2 flex items-center text-sm text-gray-500'>
								<CurrencyDollarIcon
									className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
									aria-hidden='true'
								/>
								$120k &ndash;
								$140k
							</div> */}
								{/* <div className='mt-2 flex items-center text-sm text-gray-500'>
								<CalendarIcon
									className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
									aria-hidden='true'
								/>
								Closing on
								January 9, 2020
							</div> */}
							</div>
						</div>
						<div className='mt-5 flex xl:ml-4 xl:mt-0'>
							<div className=' ml-3 inline-flex divide-x divide-purple-600 rounded-md shadow-sm'>
								<div className='inline-flex divide-x divide-purple-600 rounded-md shadow-sm'>
									<button
										// onClick={() => {
										// 	setShowAddScreen(
										// 		!showAddScreen
										// 	);
										// }}
										className='inline-flex items-center gap-x-1.5 rounded-md bg-purple-500 px-3 py-2 hover:bg-purple-600 text-white shadow-sm'
									>
										{/* <PlusIcon
										className='-ml-0.5 h-5 w-5'
										aria-hidden='true'
									/> */}
										<p className='text-sm font-semibold'>
											Add
											user
										</p>
									</button>
								</div>
							</div>

							{/* Dropdown */}
							<Menu
								as='div'
								className='relative ml-3 sm:hidden'
							>
								<Menu.Button className='inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400'>
									More
									<ChevronDownIcon
										className='-mr-1 h-5 w-5 text-gray-400'
										aria-hidden='true'
									/>
								</Menu.Button>

								<Transition
									as={Fragment}
									enter='transition ease-out duration-200'
									enterFrom='transform opacity-0 scale-95'
									enterTo='transform opacity-100 scale-100'
									leave='transition ease-in duration-75'
									leaveFrom='transform opacity-100 scale-100'
									leaveTo='transform opacity-0 scale-95'
								>
									<Menu.Items className='absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
										<Menu.Item>
											{({
												active,
											}) => (
												<a
													href='#'
													className={classNames(
														active
															? 'bg-gray-100'
															: '',
														'block px-4 py-2 text-sm text-gray-700'
													)}
												>
													Edit
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({
												active,
											}) => (
												<a
													href='#'
													className={classNames(
														active
															? 'bg-gray-100'
															: '',
														'block px-4 py-2 text-sm text-gray-700'
													)}
												>
													View
												</a>
											)}
										</Menu.Item>
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					</div>
				</header>
				<Toaster />
				<UploadPageLayout
					nav={
						search != '?true' && {
							mobile: (
								<UploadMobileSearch
									mobileMenuOpen={
										mobileMenuOpen
									}
									setMobileMenuOpen={
										setMobileMenuOpen
									}
								/>
							),
							default:
								// header comment at bottom of file
								null,
						}
					}
					mainLayout={
						hash ==
						('#Photos' ||
							'#Videos' ||
							'#Audio' ||
							'#Other') ? (
							<main className=' overflow-y-auto'>
								<UploadPageCell
									setCurrentFile={
										setCurrentFile
									}
									currentFile={
										currentFile
									}
									suspense={
										<>
											<div className='mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow'>
												<div className='flex animate-pulse space-x-4'>
													<div className='h-10 w-10 rounded-full bg-slate-700'></div>
													<div className='flex-1 space-y-6 py-1'>
														<div className='h-2 rounded bg-slate-700'></div>
														<div className='space-y-3'>
															<div className='grid grid-cols-3 gap-4'>
																<div className='col-span-2 h-2 rounded bg-slate-700'></div>
																<div className='col-span-1 h-2 rounded bg-slate-700'></div>
															</div>
															<div className='h-2 rounded bg-slate-700'></div>
														</div>
													</div>
												</div>
											</div>
										</>
									}
									title={hash.replace(
										'#',
										''
									)}
								/>
								)
							</main>
						) : (
							<main className='  flex-1 overflow-y-auto'>
								{['Photos'].map(
									(
										value,
										index,
										array
									) => {
										return (
											<>
												<UploadPageCell
													setCurrentFile={
														setCurrentFile
													}
													currentFile={
														currentFile
													}
													key={
														index
													}
													title={
														'Uploads'
													}
													currentTab={
														currentTab
													}
													setCurrentTab={
														setCurrentTab
													}
													uploads={
														uploads
													}
													setUploads={
														setUploads
													}
													options={
														options
													}
													setOptions={
														setOptions
													}
													suspense={
														<>
															<div className='mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow'>
																<div className='flex animate-pulse space-x-4'>
																	<div className='h-10 w-10 rounded-full bg-slate-700'></div>
																	<div className='flex-1 space-y-6 py-1'>
																		<div className='h-2 rounded bg-slate-700'></div>
																		<div className='space-y-3'>
																			<div className='grid grid-cols-3 gap-4'>
																				<div className='col-span-2 h-2 rounded bg-slate-700'></div>
																				<div className='col-span-1 h-2 rounded bg-slate-700'></div>
																			</div>
																			<div className='h-2 rounded bg-slate-700'></div>
																		</div>
																	</div>
																</div>
															</div>
														</>
													}
												/>
											</>
										);
									}
								)}
							</main>
						)
					}
					sideBar={
						(search == '?true' ||
							currentFile) && (
							<FileSidebar
								currentFile={
									currentFile
								}
								setCurrentFile={
									setCurrentFile
								}
								hash={hash}
								pathname={
									pathname
								}
								setUploads={
									setUploads
								}
								setOptions={
									setOptions
								}
							/>
						)
					}
				></UploadPageLayout>
			</SideBarLayout>
		</>
	);
};

export default UploadPage;

// <header className="w-full">
//   <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
//     <button
//       type="button"
//       className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
//       onClick={() => setMobileMenuOpen(true)}
//     >
//       <span className="sr-only">Open sidebar</span>
//       <Bars3BottomLeftIcon
//         className="h-6 w-6"
//         aria-hidden="true"
//       />
//     </button>
//     <div className="flex flex-1 justify-between px-4 sm:px-6">
//       <div className="flex flex-1">
//         <Form
//           className="flex w-full md:ml-0"
//           // action="#"
//           // method="GET"
//         >
//           <label
//             htmlFor="desktop-search-field"
//             className="sr-only"
//           >
//             Search all files
//           </label>
//           <label
//             htmlFor="mobile-search-field"
//             className="sr-only"
//           >
//             Search all files
//           </label>
//           <div className="relative w-full text-gray-400 focus-within:text-gray-600">
//             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
//               <MagnifyingGlassIcon
//                 className="h-5 w-5 flex-shrink-0"
//                 aria-hidden="true"
//               />
//             </div>
//             <input
//               name="mobile-search-field"
//               id="mobile-search-field"
//               className="h-full w-full border-0 py-2 pl-8 pr-3 text-base text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:hidden"
//               placeholder="Search"
//               type="search"
//             />
//             <input
//               name="desktop-search-field"
//               id="desktop-search-field"
//               className="hidden h-full w-full border-0 py-2 pl-8 pr-3 text-sm text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:block"
//               placeholder="Search all files"
//               type="search"
//             />
//           </div>
//         </Form>
//       </div>
//       <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
//         {/* Profile dropdown */}
//         <Menu as="div" className="relative flex-shrink-0">
//           {/* <div>
//         <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
//           <span className="sr-only">Open user menu</span>
//           <img
//             className="h-8 w-8 rounded-full"
//             src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
//             alt=""
//           />
//         </Menu.Button>
//       </div> */}
//           <Transition
//             as={Fragment}
//             enter="transition ease-out duration-100"
//             enterFrom="transform opacity-0 scale-95"
//             enterTo="transform opacity-100 scale-100"
//             leave="transition ease-in duration-75"
//             leaveFrom="transform opacity-100 scale-100"
//             leaveTo="transform opacity-0 scale-95"
//           >
//             <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//               {userNavigation.map((item) => (
//                 <Menu.Item key={item.name}>
//                   {({ active }) => (
//                     <a
//                       href={item.href}
//                       className={classNames(
//                         active ? 'bg-gray-100' : '',
//                         'block px-4 py-2 text-sm text-gray-700'
//                       )}
//                     >
//                       {item.name}
//                     </a>
//                   )}
//                 </Menu.Item>
//               ))}
//             </Menu.Items>
//           </Transition>
//         </Menu>

//         <a
//           href="?true#Create"
//           type="button"
//           className="rounded-full bg-indigo-600 p-1.5 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           <PlusIcon className="h-5 w-5" aria-hidden="true" />
//           <span className="sr-only">Add file</span>
//         </a>
//       </div>
//     </div>
//   </div>
// </header>
