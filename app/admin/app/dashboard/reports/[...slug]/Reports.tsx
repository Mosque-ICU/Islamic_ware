'use client';
import { useEstablishment } from '@/app/_helpers/web/hooks/useEstablishment';
import Prayers from '@/app/components/Prayers/Prayers';

import Loader from '@/app/components/Loader/Loader';
import Nav from '@/app/components/Nav/Nav';
import SideBarLayout from '@/app/components/__Layouts/homesidebar';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import PrayersSidebar from '../something/PrayersSidebar';
import loading from './loading';

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
import { useState } from 'react';
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
import {
	Bars3Icon,
	BellIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';

const user = {
	name: 'Whitney Francis',
	email: 'whitney.francis@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
	{
		name: 'Dashboard',
		href: '#',
		current: true,
	},
	{
		name: 'Jobs',
		href: '#',
		current: false,
	},
	{
		name: 'Applicants',
		href: '#',
		current: false,
	},
	{
		name: 'Company',
		href: '#',
		current: false,
	},
];
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
];
const tabs = [
	{
		name: 'Assets ',
		href: '#',
		count: '2',
		current: false,
	},
	{
		name: 'Maintenance',
		href: '#',
		count: '4',
		current: false,
	},
	{
		name: 'Procuremnet',
		href: '#',
		count: '6',
		current: true,
	},
	{
		name: 'Renewals',
		href: '#',
		current: false,
	},
	{
		name: 'Role',
		href: '#',
		current: false,
	},
];
const candidates = [
	{
		name: 'Emily Selman',
		email: 'emily.selman@example.com',
		imageUrl:
			'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		applied: 'January 7, 2020',
		appliedDatetime:
			'2020-07-01T15:34:56',
		status:
			'Completed phone screening',
	},
	// More candidates...
];
const publishingOptions = [
	{
		name: 'Published',
		description:
			'This job posting can be viewed by anyone who has the link.',
		current: true,
	},
	{
		name: 'Draft',
		description:
			'This job posting will no longer be publicly accessible.',
		current: false,
	},
];

import { Fragment } from 'react';

const locations = [
	{
		name: 'Edinburgh',
		people: [
			{
				name: 'Lindsay Walton',
				title: 'Front-end Developer',
				email: 'lindsay.walton@example.com',
				role: 'Member',
			},
			{
				name: 'Courtney Henry',
				title: 'Designer',
				email: 'courtney.henry@example.com',
				role: 'Admin',
			},
		],
	},
	// More people...
];

function classNames(...classes) {
	return classes
		.filter(Boolean)
		.join(' ');
}

function Example() {
	return (
		<>
			<header className='bg-gray-50  p-8 rounded-full'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
					<div className='min-w-0 flex-1'>
						<h1 className='mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
							Reports
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
								conducted at the
								mosque.{' '}
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
										Add user
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

			<div className='px-4 sm:px-6 lg:px-8'>
				{/* <div className='sm:flex sm:items-center'>
					<div className='sm:flex-auto'>
						<h1 className='text-base font-semibold leading-6 text-gray-900'>
							Reports
						</h1>
						<p className='mt-2 text-sm text-gray-700'>
							A list of all the
							users in your
							account including
							their name, title,
							email and role.
						</p>
					</div>
					<div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
						<button
							type='button'
							className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Add user
						</button>
					</div>
				</div> */}
				<div className='mt-8 flow-root'>
					<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
						<div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
							<table className='min-w-full'>
								<thead className='bg-white'>
									<tr>
										<th
											scope='col'
											className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3'
										>
											Name
										</th>
										<th
											scope='col'
											className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
										>
											Issue
										</th>
										<th
											scope='col'
											className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
										>
											Note
										</th>
										<th
											scope='col'
											className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
										>
											Status
										</th>
										<th
											scope='col'
											className='relative py-3.5 pl-3 pr-4 sm:pr-3'
										>
											<span className='sr-only'>
												Edit
											</span>
										</th>
									</tr>
								</thead>
								<tbody className='bg-white'>
									{locations.map(
										(
											location
										) => (
											<Fragment
												key={
													location.name
												}
											>
												<tr className='border-t border-gray-200'>
													<th
														colSpan={
															5
														}
														scope='colgroup'
														className='bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3'
													>
														{
															location.name
														}
													</th>
												</tr>
												{location.people.map(
													(
														person,
														personIdx
													) => (
														<tr
															key={
																person.email
															}
															className={classNames(
																personIdx ===
																	0
																	? 'border-gray-300'
																	: 'border-gray-200',
																'border-t'
															)}
														>
															<td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3'>
																{
																	person.name
																}
															</td>
															<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
																{
																	person.title
																}
															</td>
															<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
																{
																	person.email
																}
															</td>
															<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
																{
																	person.role
																}
															</td>
															<td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3'>
																<a
																	href='#'
																	className='text-indigo-600 hover:text-indigo-900'
																>
																	Edit
																	<span className='sr-only'>
																		,{' '}
																		{
																			person.name
																		}
																	</span>
																</a>
															</td>
														</tr>
													)
												)}
											</Fragment>
										)
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default function ReportsPage({
	data,
}: any) {
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
				<div className=' min-h-screen'>
					{/* {prayers ? (
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
					) : null} */}
					<Example />
				</div>
			</>
		</SideBarLayout>
	);
}
