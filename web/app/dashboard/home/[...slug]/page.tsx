'use client';
import React from 'react';

import SideBarLayout from '../../../components/__Layouts/homesidebar';
import { useEstablishment } from '@/app/_helpers/web/hooks/useEstablishment';
import {
	Fragment,
	useState,
} from 'react';
import {
	Dialog,
	Menu,
	Transition,
} from '@headlessui/react';
import {
	ArrowDownCircleIcon,
	ArrowPathIcon,
	ArrowUpCircleIcon,
	Bars3Icon,
	EllipsisHorizontalIcon,
	PlusSmallIcon,
} from '@heroicons/react/20/solid';
import {
	BellIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';

const navigation = [
	{ name: 'Home', href: '#' },
	{ name: 'Invoices', href: '#' },
	{ name: 'Clients', href: '#' },
	{ name: 'Expenses', href: '#' },
];
const secondaryNavigation = [
	{
		name: 'Last 7 days',
		href: '#',
		current: true,
	},
	{
		name: 'Last 30 days',
		href: '#',
		current: false,
	},
	{
		name: 'All-time',
		href: '#',
		current: false,
	},
];
const stats = [
	{
		name: 'Revenue',
		value: '$405,091.00',
		change: '+4.75%',
		changeType: 'positive',
	},
	{
		name: 'Overdue invoices',
		value: '$12,787.00',
		change: '+54.02%',
		changeType: 'negative',
	},
	{
		name: 'Outstanding invoices',
		value: '$245,988.00',
		change: '-1.39%',
		changeType: 'positive',
	},
	{
		name: 'Expenses',
		value: '$30,156.00',
		change: '+10.18%',
		changeType: 'negative',
	},
];
const statuses = {
	Paid: 'text-green-700 bg-green-50 ring-green-600/20',
	Withdraw:
		'text-gray-600 bg-gray-50 ring-gray-500/10',
	Overdue:
		'text-red-700 bg-red-50 ring-red-600/10',
};
const days = [
	{
		date: 'Today',
		dateTime: '2023-03-22',
		transactions: [
			{
				id: 1,
				invoiceNumber: '00012',
				href: '#',
				amount: '$7,600.00 USD',
				tax: '$500.00',
				status: 'Paid',
				client: 'Reform',
				description:
					'Website redesign',
				icon: ArrowUpCircleIcon,
			},
			{
				id: 2,
				invoiceNumber: '00011',
				href: '#',
				amount: '$10,000.00 USD',
				status: 'Withdraw',
				client: 'Tom Cook',
				description: 'Salary',
				icon: ArrowDownCircleIcon,
			},
			{
				id: 3,
				invoiceNumber: '00009',
				href: '#',
				amount: '$2,000.00 USD',
				tax: '$130.00',
				status: 'Overdue',
				client: 'Tuple',
				description: 'Logo design',
				icon: ArrowPathIcon,
			},
		],
	},
	{
		date: 'Yesterday',
		dateTime: '2023-03-21',
		transactions: [
			{
				id: 4,
				invoiceNumber: '00010',
				href: '#',
				amount: '$14,000.00 USD',
				tax: '$900.00',
				status: 'Paid',
				client: 'SavvyCal',
				description:
					'Website redesign',
				icon: ArrowUpCircleIcon,
			},
		],
	},
];
const clients = [
	{
		id: 1,
		name: 'Tuple',
		imageUrl:
			'https://tailwindui.com/img/logos/48x48/tuple.svg',
		lastInvoice: {
			date: 'December 13, 2022',
			dateTime: '2022-12-13',
			amount: '$2,000.00',
			status: 'Overdue',
		},
	},
	{
		id: 2,
		name: 'SavvyCal',
		imageUrl:
			'https://tailwindui.com/img/logos/48x48/savvycal.svg',
		lastInvoice: {
			date: 'January 22, 2023',
			dateTime: '2023-01-22',
			amount: '$14,000.00',
			status: 'Paid',
		},
	},
	{
		id: 3,
		name: 'Reform',
		imageUrl:
			'https://tailwindui.com/img/logos/48x48/reform.svg',
		lastInvoice: {
			date: 'January 23, 2023',
			dateTime: '2023-01-23',
			amount: '$7,600.00',
			status: 'Paid',
		},
	},
];

function classNames(...classes) {
	return classes
		.filter(Boolean)
		.join(' ');
}

function Example() {
	const [
		mobileMenuOpen,
		setMobileMenuOpen,
	] = useState(false);

	return (
		<>
			<main>
				<div className='space-y-16 pb-16 xl:space-y-20'>
					{/* Recent activity table */}
					<div>
						<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
							<h2 className='mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none'>
								Recent activity
							</h2>
						</div>
						<div className='mt-6 overflow-hidden border-t border-gray-100'>
							<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
								<div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
									<table className='w-full text-left'>
										<thead className='sr-only'>
											<tr>
												<th>
													Amount
												</th>
												<th className='hidden sm:table-cell'>
													Client
												</th>
												<th>
													More
													details
												</th>
											</tr>
										</thead>
										<tbody>
											{days.map(
												(
													day
												) => (
													<Fragment
														key={
															day.dateTime
														}
													>
														<tr className='text-sm leading-6 text-gray-900'>
															<th
																scope='colgroup'
																colSpan={
																	3
																}
																className='relative isolate py-2 font-semibold'
															>
																<time
																	dateTime={
																		day.dateTime
																	}
																>
																	{
																		day.date
																	}
																</time>
																<div className='absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50' />
																<div className='absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50' />
															</th>
														</tr>
														{day.transactions.map(
															(
																transaction
															) => (
																<tr
																	key={
																		transaction.id
																	}
																>
																	<td className='relative py-5 pr-6'>
																		<div className='flex gap-x-6'>
																			<transaction.icon
																				className='hidden h-6 w-5 flex-none text-gray-400 sm:block'
																				aria-hidden='true'
																			/>
																			<div className='flex-auto'>
																				<div className='flex items-start gap-x-3'>
																					<div className='text-sm font-medium leading-6 text-gray-900'>
																						{
																							transaction.amount
																						}
																					</div>
																					<div
																						className={classNames(
																							statuses[
																								transaction
																									.status
																							],
																							'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
																						)}
																					>
																						{
																							transaction.status
																						}
																					</div>
																				</div>
																				{transaction.tax ? (
																					<div className='mt-1 text-xs leading-5 text-gray-500'>
																						{
																							transaction.tax
																						}{' '}
																						tax
																					</div>
																				) : null}
																			</div>
																		</div>
																		<div className='absolute bottom-0 right-full h-px w-screen bg-gray-100' />
																		<div className='absolute bottom-0 left-0 h-px w-screen bg-gray-100' />
																	</td>
																	<td className='hidden py-5 pr-6 sm:table-cell'>
																		<div className='text-sm leading-6 text-gray-900'>
																			{
																				transaction.client
																			}
																		</div>
																		<div className='mt-1 text-xs leading-5 text-gray-500'>
																			{
																				transaction.description
																			}
																		</div>
																	</td>
																	<td className='py-5 text-right'>
																		<div className='flex justify-end'>
																			<a
																				href={
																					transaction.href
																				}
																				className='text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500'
																			>
																				View
																				<span className='hidden sm:inline'>
																					{' '}
																					transaction
																				</span>
																				<span className='sr-only'>
																					,
																					invoice
																					#
																					{
																						transaction.invoiceNumber
																					}

																					,{' '}
																					{
																						transaction.client
																					}
																				</span>
																			</a>
																		</div>
																		<div className='mt-1 text-xs leading-5 text-gray-500'>
																			Invoice{' '}
																			<span className='text-gray-900'>
																				#
																				{
																					transaction.invoiceNumber
																				}
																			</span>
																		</div>
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

					{/* Recent client list*/}
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						<div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
							<div className='flex items-center justify-between'>
								<h2 className='text-base font-semibold leading-7 text-gray-900'>
									Recent
									clients
								</h2>
								<a
									href='#'
									className='text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
								>
									View all
									<span className='sr-only'>
										, clients
									</span>
								</a>
							</div>
							<ul
								role='list'
								className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8'
							>
								{clients.map(
									(client) => (
										<li
											key={
												client.id
											}
											className='overflow-hidden rounded-xl border border-gray-200'
										>
											<div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6'>
												<img
													src={
														client.imageUrl
													}
													alt={
														client.name
													}
													className='h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10'
												/>
												<div className='text-sm font-medium leading-6 text-gray-900'>
													{
														client.name
													}
												</div>
												<Menu
													as='div'
													className='relative ml-auto'
												>
													<Menu.Button className='-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500'>
														<span className='sr-only'>
															Open
															options
														</span>
														<EllipsisHorizontalIcon
															className='h-5 w-5'
															aria-hidden='true'
														/>
													</Menu.Button>
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
														<Menu.Items className='absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
															<Menu.Item>
																{({
																	active,
																}) => (
																	<a
																		href='#'
																		className={classNames(
																			active
																				? 'bg-gray-50'
																				: '',
																			'block px-3 py-1 text-sm leading-6 text-gray-900'
																		)}
																	>
																		View
																		<span className='sr-only'>
																			,{' '}
																			{
																				client.name
																			}
																		</span>
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
																				? 'bg-gray-50'
																				: '',
																			'block px-3 py-1 text-sm leading-6 text-gray-900'
																		)}
																	>
																		Edit
																		<span className='sr-only'>
																			,{' '}
																			{
																				client.name
																			}
																		</span>
																	</a>
																)}
															</Menu.Item>
														</Menu.Items>
													</Transition>
												</Menu>
											</div>
											<dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
												<div className='flex justify-between gap-x-4 py-3'>
													<dt className='text-gray-500'>
														Last
														invoice
													</dt>
													<dd className='text-gray-700'>
														<time
															dateTime={
																client
																	.lastInvoice
																	.dateTime
															}
														>
															{
																client
																	.lastInvoice
																	.date
															}
														</time>
													</dd>
												</div>
												<div className='flex justify-between gap-x-4 py-3'>
													<dt className='text-gray-500'>
														Amount
													</dt>
													<dd className='flex items-start gap-x-2'>
														<div className='font-medium text-gray-900'>
															{
																client
																	.lastInvoice
																	.amount
															}
														</div>
														<div
															className={classNames(
																statuses[
																	client
																		.lastInvoice
																		.status
																],
																'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
															)}
														>
															{
																client
																	.lastInvoice
																	.status
															}
														</div>
													</dd>
												</div>
											</dl>
										</li>
									)
								)}
							</ul>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default function page({
	orgUsers,
}) {
	const {
		currentEstablishment,
		loading,
	} = useEstablishment(orgUsers);

	return (
		<SideBarLayout
			currentEstablishment={
				currentEstablishment
			}
			loading={loading}
		>
			<div>
				<Example />
			</div>
		</SideBarLayout>
	);
}
