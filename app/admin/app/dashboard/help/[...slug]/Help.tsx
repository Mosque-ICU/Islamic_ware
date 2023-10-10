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

const faqs = [
	{
		question:
			'How do you make holy water?',
		answer:
			'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
	// More questions...
];

function Example() {
	return (
		<div className='bg-white'>
			<header className='bg-gray-50 p-8 rounded-full'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
					<div className='min-w-0 flex-1'>
						<h1 className='mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
							Help Center
						</h1>
						<div className='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-8'>
							{/* <p className='mt-2 flex items-center text-sm text-gray-500'>
								<BriefcaseIcon
									className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
									aria-hidden='true'
								/>
								A schedule of
								<b className=' text-blue-600 font-bold px-1'>
									obligatory
								</b>
								prayers
								conducted at the
								mosque.{' '}
							</p> */}
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
					{/* <div className='mt-5 flex xl:ml-4 xl:mt-0'>
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
					{/* <Menu
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
					</div> */}
				</div>
			</header>
			<div className='mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40'>
				<div className='lg:grid lg:grid-cols-12 lg:gap-8'>
					<div className='lg:col-span-5'>
						<h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
							Frequently asked
							questions
						</h2>
						<p className='mt-4 text-base leading-7 text-gray-600'>
							Can’t find the
							answer you’re
							looking for? Reach
							out to our{' '}
							<a
								href='#'
								className='font-semibold text-indigo-600 hover:text-indigo-500'
							>
								customer support
							</a>{' '}
							team.
						</p>
					</div>
					<div className='mt-10 lg:col-span-7 lg:mt-0'>
						<dl className='space-y-10'>
							{faqs.map(
								(faq) => (
									<div
										key={
											faq.question
										}
									>
										<dt className='text-base font-semibold leading-7 text-gray-900'>
											{
												faq.question
											}
										</dt>
										<dd className='mt-2 text-base leading-7 text-gray-600'>
											{
												faq.answer
											}
										</dd>
									</div>
								)
							)}
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}

// const Example = () => {
// 	return (
// 		<div className='bg-gray-100 min-h-screen'>
// 			<header className='bg-blue-500 p-4 text-white'>
// 				<h1 className='text-2xl font-semibold'>
// 					Help Center
// 				</h1>
// 			</header>

// 			<main className='max-w-4xl mx-auto mt-8 p-4'>
// 				<section className='mb-8'>
// 					<h2 className='text-xl font-semibold mb-4'>
// 						Frequently Asked
// 						Questions
// 					</h2>
// 					<ul className='list-disc pl-4'>
// 						<li className='mb-2'>
// 							How do I reset my
// 							password?
// 						</li>
// 						<li className='mb-2'>
// 							Can I change my
// 							email address?
// 						</li>
// 						<li className='mb-2'>
// 							What payment
// 							methods are
// 							accepted?
// 						</li>
// 					</ul>
// 				</section>

// 				<section className='mb-8'>
// 					<h2 className='text-xl font-semibold mb-4'>
// 						Join Our Community
// 					</h2>
// 					<p className='mb-4'>
// 						Join our Discord
// 						community to connect
// 						with other users and
// 						get help from our
// 						community members and
// 						support team.
// 					</p>
// 					<a
// 						href='https://discordapp.com/invite/YOUR_DISCORD_INVITE_LINK'
// 						target='_blank'
// 						rel='noopener noreferrer'
// 						className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
// 					>
// 						Join Discord
// 					</a>
// 				</section>

// 				<section>
// 					<h2 className='text-xl font-semibold mb-4'>
// 						Other Communities
// 					</h2>
// 					<p className='mb-4'>
// 						Apart from Discord,
// 						you can also find our
// 						community on other
// 						platforms. Join us on:
// 					</p>
// 					<ul className='list-disc pl-4'>
// 						<li className='mb-2'>
// 							<a
// 								href='https://www.whatsapp.com/'
// 								target='_blank'
// 								rel='noopener noreferrer'
// 								className='text-blue-500 hover:underline'
// 							>
// 								WhatsApp
// 							</a>
// 						</li>
// 						{/* Add more community links here */}
// 					</ul>
// 				</section>
// 			</main>
// 		</div>
// 	);
// };

export default function HelpPage({
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
