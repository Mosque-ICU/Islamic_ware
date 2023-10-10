'use client';
import { useEstablishment } from '@/app/_helpers/web/hooks/useEstablishment';
import Prayers from '@/app/components/Prayers/Prayers';
import ExportPrayers from '@/app/dashboard/prayers/something/ExportPrayers';
import ImportPrayers from '@/app/dashboard/prayers/something/ImportPrayers';
import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
	BriefcaseIcon,
	CalendarIcon,
	CheckCircleIcon,
	CheckIcon,
	ChevronDownIcon,
	ChevronRightIcon,
	CloudArrowDownIcon,
	CloudArrowUpIcon,
	CurrencyDollarIcon,
	EnvelopeIcon,
	LinkIcon,
	MagnifyingGlassIcon,
	MapPinIcon,
	PencilIcon,
	PlusIcon,
} from '@heroicons/react/20/solid';
import {
	Disclosure,
	Listbox,
	Menu,
	Transition,
} from '@headlessui/react';
import Loader from '@/app/components/Loader/Loader';
import Nav from '@/app/components/Nav/Nav';
import SideBarLayout from '@/app/components/__Layouts/homesidebar';
import React, { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';
import PrayersSidebar from '../something/PrayersSidebar';
import loading from './loading';

/**
 * PrayersPage component.
 *
 * @param {Object} data - Data passed as props.
 *
 * Renders the Prayers page.
 * - Gets currentEstablishment and publicEstablishmentId from useEstablishment hook.
 * - Initializes and updates state for options and prayers.
 * - Renders SideBarLayout with Prayers component inside.
 * - Passes prayers data, pagination options etc as props to Prayers.
 * - Allows updating pagination options to fetch new pages of data.
 */

function PrayersPage({ data }: any) {
	const {
		currentEstablishment,
		publicEstablishmentId,
	} = useEstablishment();
	const [options, setOptions] =
		React.useState({
			page: 1,
			total: 0,
			limit: 25,
		});
	const [prayers, setPrayers] =
		React.useState(data);

	return (
		<SideBarLayout
			// sideBar={<PrayersSidebar />}
			currentEstablishment={
				currentEstablishment
			}
			loading={loading}
		>
			<>
				{!currentEstablishment && (
					<Loader />
				)}
				<Toaster />
				<header className='bg-gray-50 mb-20 p-8 rounded-full'>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
						<div className='min-w-0 flex-1'>
							<h1 className='mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
								Prayers
							</h1>
							<div className='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-8'>
								<p className='mt-2 flex items-center text-sm text-gray-500'>
									<BriefcaseIcon
										className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
										aria-hidden='true'
									/>
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
							<ExportPrayers
								button={
									<span className='hidden sm:block'>
										<button
											type='button'
											className='inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
										>
											<CloudArrowUpIcon
												className='-ml-0.5 h-5 w-5 text-gray-400'
												aria-hidden='true'
											/>
											Export
										</button>
									</span>
								}
							/>

							<ImportPrayers
								button={
									<span className='ml-3 hidden sm:block'>
										<button
											type='button'
											className='inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
										>
											<CloudArrowDownIcon
												className='-ml-0.5 h-5 w-5 text-gray-400'
												aria-hidden='true'
											/>
											Import
										</button>
									</span>
								}
							/>

							<div className=' ml-3 inline-flex divide-x divide-purple-600 rounded-md shadow-sm'>
								<div className='inline-flex divide-x divide-purple-600 rounded-md shadow-sm'>
									<button
										onClick={() => {
											setShowAddScreen(
												!showAddScreen
											);
										}}
										className='inline-flex items-center gap-x-1.5 rounded-md bg-purple-500 px-3 py-2 hover:bg-purple-600 text-white shadow-sm'
									>
										<PlusIcon
											className='-ml-0.5 h-5 w-5'
											aria-hidden='true'
										/>
										<p className='text-sm font-semibold'>
											Create
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
				<div className='pt-10 min-h-screen'>
					{prayers ? (
						<div className='page-wrapper'>
							<Prayers
								prayers={
									prayers
								}
								total={
									options.total
								} //@ts-ignore
								publicEstablishmentId={
									publicEstablishmentId
								}
								page={
									options.page
								}
								currentEstablishment={
									currentEstablishment
								}
								refetch={(
									page
								) => {
									setOptions({
										...options,
										page,
									});
								}}
							/>
						</div>
					) : null}
				</div>
			</>
		</SideBarLayout>
	);
}

export default PrayersPage;
