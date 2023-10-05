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

import {
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
} from '@heroicons/react/24/outline';

import { useState } from 'react';

import {
	Menu,
	Transition,
	Disclosure,
	Listbox,
} from '@headlessui/react';

import {
	Bars3Icon,
	BellIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';

import { Fragment } from 'react';

import {
	ChevronLeftIcon,
	EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid';

const meetings = [
	{
		id: 1,
		date: 'January 10th, 2022',
		time: '5:00 PM',
		datetime: '2022-01-10T17:00',
		name: 'Leslie Alexander',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		location: 'Starbucks',
	},
	// More meetings...
];
const days = [
	{ date: '2021-12-27' },
	{ date: '2021-12-28' },
	{ date: '2021-12-29' },
	{ date: '2021-12-30' },
	{ date: '2021-12-31' },
	{
		date: '2022-01-01',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-02',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-03',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-04',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-05',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-06',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-07',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-08',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-09',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-10',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-11',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-12',
		isCurrentMonth: true,
		isToday: true,
	},
	{
		date: '2022-01-13',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-14',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-15',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-16',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-17',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-18',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-19',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-20',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-21',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-22',
		isCurrentMonth: true,
		isSelected: true,
	},
	{
		date: '2022-01-23',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-24',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-25',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-26',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-27',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-28',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-29',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-30',
		isCurrentMonth: true,
	},
	{
		date: '2022-01-31',
		isCurrentMonth: true,
	},
	{ date: '2022-02-01' },
	{ date: '2022-02-02' },
	{ date: '2022-02-03' },
	{ date: '2022-02-04' },
	{ date: '2022-02-05' },
	{ date: '2022-02-06' },
];

const publishingOptions = [
	{
		name: 'Upcoming',
		description:
			'This job posting can be viewed by anyone who has the link.',
		current: true,
	},
	{
		name: 'Day',
		description:
			'This job posting will no longer be publicly accessible.',
		current: false,
	},
	{
		name: 'Week',
		description:
			'This job posting will no longer be publicly accessible.',
		current: false,
	},
	{
		name: 'Month',
		description:
			'This job posting will no longer be publicly accessible.',
		current: false,
	},
	{
		name: 'Year',
		description:
			'This job posting will no longer be publicly accessible.',
		current: false,
	},
];

function classNames(...classes) {
	return classes
		.filter(Boolean)
		.join(' ');
}

function Example() {
	const [selected, setSelected] =
		useState(publishingOptions[0]);
	return (
		<>
			<header className='bg-gray-50 p-8 rounded-full'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
					<div className='min-w-0 flex-1'>
						<h1 className='mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
							Scheduling
						</h1>
						{/* <div className='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-8'>
								<div className='mt-2 flex items-center text-sm text-gray-500'>
									<BriefcaseIcon
										className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
										aria-hidden='true'
									/>
									Full-time
								</div>
								<div className='mt-2 flex items-center text-sm text-gray-500'>
									<MapPinIcon
										className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
										aria-hidden='true'
									/>
									Remote
								</div>
								<div className='mt-2 flex items-center text-sm text-gray-500'>
									<CurrencyDollarIcon
										className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
										aria-hidden='true'
									/>
									$120k &ndash;
									$140k
								</div>
								<div className='mt-2 flex items-center text-sm text-gray-500'>
									<CalendarIcon
										className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
										aria-hidden='true'
									/>
									Closing on
									January 9,
									2020
								</div>
							</div> */}
					</div>
					<div className='mt-5 flex xl:ml-4 xl:mt-0'>
						<span className='hidden sm:block'>
							<button
								type='button'
								className='inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
							>
								<PencilIcon
									className='-ml-0.5 h-5 w-5 text-gray-400'
									aria-hidden='true'
								/>
								Edit
							</button>
						</span>

						<span className='ml-3 hidden sm:block'>
							<button
								type='button'
								className='inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
							>
								<LinkIcon
									className='-ml-0.5 h-5 w-5 text-gray-400'
									aria-hidden='true'
								/>
								View
							</button>
						</span>

						<Listbox
							as='div'
							value={selected}
							onChange={
								setSelected
							}
							className='sm:ml-3'
						>
							{({ open }) => (
								<>
									<Listbox.Label className='sr-only'>
										Change
										published
										status
									</Listbox.Label>
									<div className='relative'>
										<div className='inline-flex divide-x divide-purple-600 rounded-md shadow-sm'>
											<div className='inline-flex divide-x divide-purple-600 rounded-md shadow-sm'>
												<div className='inline-flex items-center gap-x-1.5 rounded-l-md bg-purple-500 px-3 py-2 text-white shadow-sm'>
													<CalendarIcon
														className='-ml-0.5 h-5 w-5'
														aria-hidden='true'
													/>
													<p className='text-sm font-semibold'>
														{
															selected.name
														}
													</p>
												</div>
												<Listbox.Button className='inline-flex items-center rounded-l-none rounded-r-md bg-purple-500 p-2 hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50'>
													<span className='sr-only'>
														Change
														published
														status
													</span>
													<ChevronDownIcon
														className='h-5 w-5 text-white'
														aria-hidden='true'
													/>
												</Listbox.Button>
											</div>
										</div>

										<Transition
											show={
												open
											}
											as={
												Fragment
											}
											leave='transition ease-in duration-100'
											leaveFrom='opacity-100'
											leaveTo='opacity-0'
										>
											<Listbox.Options className='absolute left-0 z-10 -mr-1 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:left-auto sm:right-0'>
												{publishingOptions.map(
													(
														option
													) => (
														<Listbox.Option
															key={
																option.name
															}
															className={({
																active,
															}) =>
																classNames(
																	active
																		? 'bg-purple-500 text-white'
																		: 'text-gray-900',
																	'cursor-default select-none p-4 text-sm'
																)
															}
															value={
																option
															}
														>
															{({
																selected,
																active,
															}) => (
																<div className='flex flex-col'>
																	<div className='flex justify-between'>
																		<p
																			className={
																				selected
																					? 'font-semibold'
																					: 'font-normal'
																			}
																		>
																			{
																				option.name
																			}
																		</p>
																		{selected ? (
																			<span
																				className={
																					active
																						? 'text-white'
																						: 'text-purple-500'
																				}
																			>
																				<CheckIcon
																					className='h-5 w-5'
																					aria-hidden='true'
																				/>
																			</span>
																		) : null}
																	</div>
																	<p
																		className={classNames(
																			active
																				? 'text-purple-200'
																				: 'text-gray-500',
																			'mt-2'
																		)}
																	>
																		{
																			option.description
																		}
																	</p>
																</div>
															)}
														</Listbox.Option>
													)
												)}
											</Listbox.Options>
										</Transition>
									</div>
								</>
							)}
						</Listbox>

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
			<div className='p-10'>
				<h2 className='text-base font-semibold leading-6 text-gray-900'>
					Upcoming meetings
				</h2>
				<div className='lg:grid lg:grid-cols-12 lg:gap-x-16 p-10'>
					<div className='mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9'>
						<div className='flex items-center text-gray-900'>
							<button
								type='button'
								className='-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
							>
								<span className='sr-only'>
									Previous
									month
								</span>
								<ChevronLeftIcon
									className='h-5 w-5'
									aria-hidden='true'
								/>
							</button>
							<div className='flex-auto text-sm font-semibold'>
								January
							</div>
							<button
								type='button'
								className='-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
							>
								<span className='sr-only'>
									Next month
								</span>
								<ChevronRightIcon
									className='h-5 w-5'
									aria-hidden='true'
								/>
							</button>
						</div>
						<div className='mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500'>
							<div>M</div>
							<div>T</div>
							<div>W</div>
							<div>T</div>
							<div>F</div>
							<div>S</div>
							<div>S</div>
						</div>
						<div className='isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200'>
							{days.map(
								(
									day,
									dayIdx
								) => (
									<button
										key={
											day.date
										}
										type='button'
										className={classNames(
											'py-1.5 hover:bg-gray-100 focus:z-10',
											day.isCurrentMonth
												? 'bg-white'
												: 'bg-gray-50',
											(day.isSelected ||
												day.isToday) &&
												'font-semibold',
											day.isSelected &&
												'text-white',
											!day.isSelected &&
												day.isCurrentMonth &&
												!day.isToday &&
												'text-gray-900',
											!day.isSelected &&
												!day.isCurrentMonth &&
												!day.isToday &&
												'text-gray-400',
											day.isToday &&
												!day.isSelected &&
												'text-indigo-600',
											dayIdx ===
												0 &&
												'rounded-tl-lg',
											dayIdx ===
												6 &&
												'rounded-tr-lg',
											dayIdx ===
												days.length -
													7 &&
												'rounded-bl-lg',
											dayIdx ===
												days.length -
													1 &&
												'rounded-br-lg'
										)}
									>
										<time
											dateTime={
												day.date
											}
											className={classNames(
												'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
												day.isSelected &&
													day.isToday &&
													'bg-indigo-600',
												day.isSelected &&
													!day.isToday &&
													'bg-gray-900'
											)}
										>
											{day.date
												.split(
													'-'
												)
												.pop()
												.replace(
													/^0/,
													''
												)}
										</time>
									</button>
								)
							)}
						</div>

						<button
							type='button'
							className='mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Add event
						</button>
						<button
							type='button'
							className='mt-4 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							View iteniery
						</button>
					</div>

					<ol className='mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8'>
						{meetings.map(
							(meeting) => (
								<li
									key={
										meeting.id
									}
									className='relative flex space-x-6 py-6 xl:static'
								>
									<img
										src={
											meeting.imageUrl
										}
										alt=''
										className='h-14 w-14 flex-none rounded-full'
									/>
									<div className='flex-auto'>
										<h3 className='pr-10 font-semibold text-gray-900 xl:pr-0'>
											{
												meeting.name
											}
										</h3>
										<dl className='mt-2 flex flex-col text-gray-500 xl:flex-row'>
											<div className='flex items-start space-x-3'>
												<dt className='mt-0.5'>
													<span className='sr-only'>
														Date
													</span>
													<CalendarIcon
														className='h-5 w-5 text-gray-400'
														aria-hidden='true'
													/>
												</dt>
												<dd>
													<time
														dateTime={
															meeting.datetime
														}
													>
														{
															meeting.date
														}{' '}
														at{' '}
														{
															meeting.time
														}
													</time>
												</dd>
											</div>
											<div className='mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5'>
												<dt className='mt-0.5'>
													<span className='sr-only'>
														Location
													</span>
													<MapPinIcon
														className='h-5 w-5 text-gray-400'
														aria-hidden='true'
													/>
												</dt>
												<dd>
													{
														meeting.location
													}
												</dd>
											</div>
										</dl>
									</div>
									<Menu
										as='div'
										className='absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center'
									>
										<div>
											<Menu.Button className='-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600'>
												<span className='sr-only'>
													Open
													options
												</span>
												<EllipsisHorizontalIcon
													className='h-5 w-5'
													aria-hidden='true'
												/>
											</Menu.Button>
										</div>

										<Transition
											as={
												Fragment
											}
											enter='transition ease-out duration-100'
											enterFrom='transform opacity-0 scale-95'
											enterTo='transform opacity-100 scale-100'
											leave='transition ease-in duration-75'
											leaveFrom='transform opacity-100 scale-100'
											leaveTo='transform opacity-0 scale-95'
										>
											<Menu.Items className='absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
												<div className='py-1'>
													<Menu.Item>
														{({
															active,
														}) => (
															<a
																href='#'
																className={classNames(
																	active
																		? 'bg-gray-100 text-gray-900'
																		: 'text-gray-700',
																	'block px-4 py-2 text-sm'
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
																		? 'bg-gray-100 text-gray-900'
																		: 'text-gray-700',
																	'block px-4 py-2 text-sm'
																)}
															>
																Cancel
															</a>
														)}
													</Menu.Item>
												</div>
											</Menu.Items>
										</Transition>
									</Menu>
								</li>
							)
						)}
					</ol>
				</div>
			</div>
		</>
	);
}

export default function SchedulingPage({
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
