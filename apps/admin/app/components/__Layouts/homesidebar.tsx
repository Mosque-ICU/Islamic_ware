'use client';
// const SideBarLayout = ({ children }) => {
//   return <>{children}</>
// }

// export default SideBarLayout

import {
	Fragment,
	useState,
	useEffect,
} from 'react';
import { useRouter } from 'next/navigation';

import {
	Bars3Icon,
	CalendarIcon,
	ChartPieIcon,
	DocumentDuplicateIcon,
	FolderIcon,
	HomeIcon,
	UsersIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { removeFromCache } from '@/app/_helpers/web/requestHandler';
import { ChevronLeft } from 'react-feather';
// import { useEstablishment } from "src/lib/hooks/useEstablishment";

const navigation = [
	{
		name: 'Sites',
		href: 'sites',
		icon: HomeIcon,
		current: true,
	},
	{
		name: 'Prayer screens',
		href: 'prayerscreens',
		icon: HomeIcon,
		current: true,
	},
	{
		name: 'Articles',
		href: 'articles',
		icon: HomeIcon,
		current: true,
	},
	{
		name: 'Uploads',
		href: 'upload',
		icon: UsersIcon,
		current: false,
	},
	{
		name: 'Prayers',
		href: 'prayers',
		icon: UsersIcon,
		current: false,
	},

	// {
	// 	name: 'Commerce',
	// 	href: 'sites',
	// 	icon: UsersIcon,
	// 	current: false,
	// },
	{
		name: 'Marketing',
		href: 'events',
		icon: FolderIcon,
		current: false,
	},
	{
		name: 'Scheduling',
		href: 'scheduling',
		icon: CalendarIcon,
		current: false,
	},
	{
		name: 'Assets',
		href: 'assets',
		icon: DocumentDuplicateIcon,
		current: false,
	},
	{
		name: 'Reports',
		href: 'reports',
		icon: ChartPieIcon,
		current: false,
	},
	{
		name: 'Analytics',
		href: 'analytics',
		icon: ChartPieIcon,
		current: false,
	},
	{
		name: 'Settings',
		href: 'settings',
		icon: ChartPieIcon,
		current: false,
	},
	{
		name: 'Help',
		href: 'help',
		icon: ChartPieIcon,
		current: false,
	},
];
const apps = [
	{
		id: 1,
		name: 'Website Builder',
		href: '#',
		icon: ChartPieIcon,
		current: false,
	},
	{
		id: 2,
		name: 'Mosque Screen',
		href: '#',
		icon: ChartPieIcon,
		current: false,
	},
];

function classNames(...classes) {
	return classes
		.filter(Boolean)
		.join(' ');
}

const publicId = (
	currentEstablishment
) => {
	console.log(
		'currentEstablishment',
		currentEstablishment
	);
	return (
		currentEstablishment?.establishmentName ||
		currentEstablishment?.name
	);
};

export default function SideBarLayout(
	props
) {
	// const { currentEstablishment, loading } = useEstablishment(orgUsers)

	const router = useRouter();

	const [sidebarOpen, setSidebarOpen] =
		useState(false);
	const [
		animationProp,
		setAnimationProp,
	] = useState({ status: false });
	const [
		showMobileMenu,
		setShowMobileMenu,
	] = useState(false);

	// this is the animation prop so when a animation needs to be made we change this to show,hide ect
	// I made this to allow us to remotely activate animations and diverse animations

	//First name and last name are from user . There should be aservice which fetches it from the user table

	async function userNavigationFunctionHandler(
		func
	) {
		switch (func) {
			case 'logOut':
				// console.log('logging out')
				localStorage.removeItem(
					publicId(
						props.currentEstablishment
					)
				);
				localStorage.removeItem(
					'currentUser'
				);
				removeFromCache(
					publicId(
						props.currentEstablishment
					)
				);
				await logOut();
				router.push('/login');
				break;
			case 'home':
				router.push(
					'/dashboard/home/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			case 'prayerscreens':
				router.push(
					'/dashboard/prayerscreens/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			case 'articles':
				router.push(
					'/dashboard/articles/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			case 'upload':
				router.push(
					'/dashboard/upload/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			case 'sites':
				router.push(
					'/dashboard/sites/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			case 'prayers':
				router.push(
					'/dashboard/prayers/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			case 'events':
				router.push(
					'/dashboard/events/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			case 'analytics':
				router.push(
					'/dashboard/analytics/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			case 'settings':
				router.push(
					'/dashboard/settings/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			case 'reports':
				router.push(
					'/dashboard/reports/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			case 'assets':
				router.push(
					'/dashboard/assets/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			case 'scheduling':
				router.push(
					'/dashboard/scheduling/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			case 'help':
				// navigate(routes.events({ publicId: publicId(currentEstablishment) }))
				router.push(
					'/dashboard/help/' +
						publicId(
							props.currentEstablishment
						)
				);
				break;
			default:
				break;
		}
	}

	// if (!currentEstablishment || loading) {
	//   return <Loader />
	// }

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-[#F8F9FA]">
        <body class="h-full">
        ```
      */}
			<div>
				<div>
					{showMobileMenu ? (
						<div className='relative z-50 lg:hidden slideLeft'>
							<div
								enter='transition-opacity ease-linear duration-300'
								enterFrom='opacity-0'
								enterTo='opacity-100'
								leave='transition-opacity ease-linear duration-300'
								leaveFrom='opacity-100'
								leaveTo='opacity-0'
							>
								<div
									className='fixed inset-0 bg-gray-900/80'
									onClick={() =>
										setShowMobileMenu(
											false
										)
									}
								></div>
							</div>

							<div className='fixed inset-0 flex'>
								<div
									enter='transition ease-in-out duration-300 transform'
									enterFrom='-translate-x-full'
									enterTo='translate-x-0'
									leave='transition ease-in-out duration-300 transform'
									leaveFrom='translate-x-0'
									leaveTo='-translate-x-full'
								>
									<div className='relative mr-16 flex w-full max-w-xs flex-1'>
										<div
											enter='ease-in-out duration-300'
											enterFrom='opacity-0'
											enterTo='opacity-100'
											leave='ease-in-out duration-300'
											leaveFrom='opacity-100'
											leaveTo='opacity-0'
										>
											<div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
												<button
													type='button'
													className='-m-2.5 p-2.5'
													onClick={() =>
														setShowMobileMenu(
															false
														)
													}
												>
													<span className='sr-only'>
														Close
														sidebar
													</span>
													<XMarkIcon
														className='h-6 w-6 text-white'
														aria-hidden='true'
													/>
												</button>
											</div>
										</div>
										{/* Sidebar component, swap this element with another sidebar if you like */}
										<div className='flex grow flex-col gap-y-5 overflow-y-auto bg-[#F8F9FA] px-6 pb-2'>
											<div className='flex h-16 shrink-0 items-center'>
												<img
													className='h-8 w-auto'
													src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
													alt='Your Company'
												/>
											</div>
											<nav className='flex flex-1 flex-col'>
												<ul className='group block flex-1 flex-col gap-y-7 transition duration-300 ease-in-out'>
													<li>
														<SidebarFadeAnimation
															sideBar={
																props.sideBar
															}
															setAnimationProp={
																setAnimationProp
															}
															trigger={
																animationProp?.status
															}
															enter={
																'transition-opacity duration-700'
															}
															enterFrom={
																'opacity-0'
															}
															enterTo={
																'opacity-100'
															}
															leave={
																'transition-opacity duration-300'
															}
															leaveFrom={
																'opacity-100'
															}
															leaveTo={
																'opacity-0'
															}
														>
															{props.sideBar ? (
																<>
																	{
																		props.sideBar
																	}
																</>
															) : (
																<ul className='-mx-2 space-y-1 h-screen'>
																	{navigation.map(
																		(
																			item
																		) => (
																			<li
																				key={
																					item.name
																				}
																				onClick={() =>
																					userNavigationFunctionHandler(
																						item.href
																					)
																				}
																			>
																				<p className='group text-3xl transition duration-300 hover:text-indigo-600 cursor-pointer mb-2'>
																					{
																						item.name
																					}
																				</p>
																			</li>
																		)
																	)}
																</ul>
															)}
														</SidebarFadeAnimation>
													</li>

													{/* <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your apps
                          </div>
                          <ul className="-mx-2 mt-2 space-y-1">
                            {apps.map((app) => (
                              <li key={app.name}>
                                <a
                                  href={app.href}
                                  className={classNames(
                                    app.current
                                      ? 'bg-gray-50 text-indigo-600'
                                      : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                  )}
                                >
                                  <app.icon
                                    className={classNames(
                                      app.current
                                        ? 'text-indigo-600'
                                        : 'text-gray-400 group-hover:text-indigo-600',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="truncate">{app.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li> */}
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : null}
				</div>

				{/* Static sidebar for desktop */}
				<div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className='flex grow flex-col gap-y-5 overflow-hidden  border-r border-gray-200 bg-[#F8F9FA] px-6'>
						<div className='fadeIn flex h-16 shrink-0 items-center'>
							<img
								className='h-8 w-auto'
								src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
								alt='Your Company'
							/>
						</div>
						<nav className='flex flex-1 flex-col'>
							<ul className='flex flex-1 flex-col gap-y-7  pt-10'>
								<li>
									<SidebarFadeAnimation
										sideBar={
											props.sideBar
										}
										setAnimationProp={
											setAnimationProp
										}
										trigger={
											animationProp?.status
										}
										enter={
											'transition-opacity duration-700'
										}
										enterFrom={
											'opacity-0'
										}
										enterTo={
											'opacity-100'
										}
										leave={
											'transition-opacity duration-300'
										}
										leaveFrom={
											'opacity-100'
										}
										leaveTo={
											'opacity-0'
										}
									>
										{props.sideBar ? (
											<>
												{
													props.sideBar
												}
											</>
										) : (
											<>
												<ul className='mx-2'>
													{navigation.map(
														(
															item
														) => (
															<div
																key={
																	item
																}
															>
																<button
																	onClick={() =>
																		userNavigationFunctionHandler(
																			item.href
																		)
																	}
																	style={{
																		whiteSpace:
																			'nowrap',
																	}}
																	className='group cursor-pointer text-2xl font-semibold text-black subpixel-antialiased transition duration-300 hover:text-indigo-600'
																>
																	{
																		item.name
																	}
																	<span className='block h-0.5 max-w-0 rounded-md bg-[#474748] transition-all duration-700 group-hover:max-w-full'></span>
																</button>
															</div>
														)
													)}
												</ul>
											</>
										)}
									</SidebarFadeAnimation>
								</li>

								<li
									onClick={() => {
										router.push(
											'/dashboard/account/' +
												publicId(
													props.currentEstablishment
												)
										);
									}}
									className='slideIn -mx-6 mt-auto'
								>
									<a
										href='#'
										className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50'
									>
										<img
											className='h-8 w-8 rounded-full bg-gray-50'
											src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
											alt=''
										/>
										<span className='sr-only'>
											Your
											profile
										</span>
										<div className='flex-col'>
											<span aria-hidden='true'>
												Tom
												Cook
											</span>
											<p
												style={{
													fontWeight:
														'100',
													color: '#474748',
												}}
											>
												Hossamsulleman@gmail.com
											</p>
										</div>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className='sticky top-0 z-40 flex items-center gap-x-6 bg-[#F8F9FA] px-4 py-4 shadow-sm sm:px-6 lg:hidden'>
					<button
						type='button'
						className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
						onClick={() =>
							setShowMobileMenu(
								true
							)
						}
					>
						<span className='sr-only'>
							Open sidebar
						</span>
						<Bars3Icon
							className='h-6 w-6'
							aria-hidden='true'
						/>
					</button>
					<div className='flex-1 text-sm font-semibold leading-6 text-gray-900'>
						Dashboard
					</div>
					<p>
						<span className='sr-only'>
							Your profile
						</span>
						<img
							className='h-8 w-8 rounded-full bg-gray-50'
							src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''
						/>
					</p>
				</div>

				<main className='py-10 lg:pl-72'>
					<div className='px-4 sm:px-6 lg:px-8'>
						{props.children}
					</div>
				</main>
			</div>
		</>
	);
}

function SidebarFadeAnimation(props) {
	useEffect(() => {
		props.setAnimationProp(true);
	}, []);

	const [isShowing, setIsShowing] =
		useState(true);

	return (
		<div>
			{props.sideBar ? (
				<button
					className='mb-10 flex align-center'
					onClick={() =>
						window.history.back()
					}
				>
					<ChevronLeft /> Go back
				</button>
			) : null}
			<div
				show={isShowing}
				enter='transition-opacity duration-700'
				enterFrom='opacity-0'
				enterTo='opacity-100'
				leave='transition ease-in-out duration-800 transform'
				leaveFrom='translate-x-0'
				leaveTo='-translate-x-full'
			>
				{props.children}
			</div>
			{/* {props.children} */}
		</div>
	);
}

function logOut() {
	throw new Error(
		'Function not implemented.'
	);
}
// function SidebarAnimation(props) {
//   // useEffect(() => {
//   //   setIsShowing(true)
//   // }, [])

//   return (
//     <div>
//       {/* <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
//         Toggle
//       </button> */}
//       <Transition
//         show={props.trigger}
//         enter={props.enter}
//         enterFrom="opacity-0"
//         enterTo="opacity-100"
//         leave="transition-opacity duration-300"
//         leaveFrom="opacity-100"
//         leaveTo="opacity-0"
//       >
//         {props.children}
//       </Transition>
//       {/* {props.children} */}
//     </div>
//   )
// }
