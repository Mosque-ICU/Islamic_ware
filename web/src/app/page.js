//text-[#05A89D] old text
//bg-[#84c3be9f] old bg

// import { Dialog, Disclosure } from "@headlessui/react";
import DisclosureComp from './disclosure';
import {
	ArrowPathIcon,
	CheckIcon,
	CloudArrowUpIcon,
	Cog6ToothIcon,
	FingerPrintIcon,
	LockClosedIcon,
	ServerIcon,
} from '@heroicons/react/20/solid';
import {
	ChevronRightIcon,
	StarIcon,
} from '@heroicons/react/20/solid';
import Header from './Header';
import Faq from './Faq';
const features = [
	{
		name: '97% reliability.',
		description:
			'Rest assured, your website will remain functional with globally distributed data centers.',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'SSL certificates.',
		description:
			'Security and encryption for your websites. Boost confidence and protect their data.',
		icon: LockClosedIcon,
	},
	{
		name: 'Continuous Improvement.',
		description: `We're committed to evolving and enhancing our services to meet your changing needs.`,
		icon: ArrowPathIcon,
	},
	{
		name: 'Advanced design tools.',
		description:
			'Personalize your website and tailor it to your needs.',
		icon: FingerPrintIcon,
	},
	{
		name: 'Powerful API.',
		description:
			'Utilize cURL to access your data via various API endpoints.',
		icon: Cog6ToothIcon,
	},
	{
		name: 'Instant Deployment.',
		description: `Swiftly deploy your web projects and get them up and running in no time.`,
		icon: ServerIcon,
	},
];
const tiers = [
	{
		name: 'Ummah plan',
		id: 'tier-hobby',
		href: '#',
		priceMonthly: 'Free',
		description:
			"The perfect plan if you're just getting started with our product.",
		features: [
			'Free website',
			'Domain name management',
			'Prayer display software',
			'48-hour support response time',
		],
		featured: false,
	},
	// {
	//   name: "Enterprise",
	//   id: "tier-enterprise",
	//   href: "#",
	//   priceMonthly: "$49",
	//   description: "Dedicated support and infrastructure for your company.",
	//   features: [
	//     "Unlimited products",
	//     "Unlimited subscribers",
	//     "Advanced analytics",
	//     "Dedicated support representative",
	//     "Marketing automations",
	//     "Custom integrations",
	//   ],
	//   featured: true,
	// },
];

function classNames(...classes) {
	return classes
		.filter(Boolean)
		.join(' ');
}

const stats = [
	{ label: 'Founded', value: '2023' },
	// { label: "Employees", value: "5" },
	{ label: 'Beta Users', value: '0' },
	{ label: 'Raised', value: '$0' },
];
const logos = [
	{
		name: 'Transistor',
		url: 'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg',
	},
	{
		name: 'Mirage',
		url: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
	},
	{
		name: 'Tuple',
		url: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg',
	},
	{
		name: 'Laravel',
		url: 'https://tailwindui.com/img/logos/laravel-logo-gray-400.svg',
	},
	{
		name: 'StaticKit',
		url: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg',
	},
	{
		name: 'Workcation',
		url: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg',
	},
];

export default function Example() {
	// const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className='bg-white h-screen w-full'>
			{/* Header */}
			{/* <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5"></a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5"></a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header> */}
			<Header />
			<div className='bg-white'>
				<main>
					{/* Hero section */}
					<div className='overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48'>
						<div className='mx-auto max-w-md px-6 sm:max-w-3xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8'>
							<div>
								<div>
									<img
										className='h-11 w-auto bg-white rounded-md shadow-xl'
										// logo
										// src="https://i.ibb.co/myBJgZB/symbol-82.png"
										src='./logo.png'
										alt='Your Company'
									/>
								</div>
								<div className='mt-20'>
									<div>
										<a
											href='#'
											className='inline-flex space-x-4'
										>
											<span className='rounded bg-indigo-100 px-2.5 py-1 text-sm font-semibold text-indigo-500'>
												What's
												new
											</span>
											<span className='inline-flex items-center space-x-1 text-sm font-medium text-indigo-500'>
												<span>
													Just
													shipped
													v0.1.0
												</span>
												<ChevronRightIcon
													className='h-5 w-5'
													aria-hidden='true'
												/>
											</span>
										</a>
									</div>
									<div className='mt-6 sm:max-w-xl'>
										<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
											Digital
											prayer
											times
											for
											growing
											mosques
										</h1>
										<p className='mt-6 text-xl text-gray-500'>
											Provide
											a
											seamless
											and
											accurate
											way to
											inform
											the
											congregation
											about
											the
											timing
											of each
											prayer
											throughout
											the
											day.
										</p>
									</div>
									<form
										action='#'
										className='mt-12 sm:flex sm:w-full sm:max-w-lg'
									>
										<div className='min-w-0 flex-1'>
											<label
												htmlFor='hero-email'
												className='sr-only'
											>
												Email
												address
											</label>
											<input
												id='hero-email'
												type='email'
												className='block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-800 bg-gray-100 placeholder-gray-500 shadow-sm focus:border-[#05A89D] focus:ring-[#05A89D]'
												placeholder='Enter your email'
											/>
										</div>
										<div className='mt-4 sm:ml-3 sm:mt-0'>
											<button
												type='submit'
												className='block w-full rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-offset-2 sm:px-10 hover: transition duration-500 ease-in-out transform hover:scale-105'
											>
												Notify
												me
											</button>
										</div>
									</form>
									<div className='mt-6'>
										<div className='inline-flex items-center divide-x divide-gray-300'>
											<div className='flex flex-shrink-0 pr-5'>
												<StarIcon
													className='h-5 w-5 text-yellow-400'
													aria-hidden='true'
												/>
												<StarIcon
													className='h-5 w-5 text-yellow-400'
													aria-hidden='true'
												/>
												<StarIcon
													className='h-5 w-5 text-yellow-400'
													aria-hidden='true'
												/>
												<StarIcon
													className='h-5 w-5 text-yellow-400'
													aria-hidden='true'
												/>
												<StarIcon
													className='h-5 w-5 text-yellow-400'
													aria-hidden='true'
												/>
											</div>
											<div className='min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3'>
												<span className='font-medium text-gray-900'>
													Rated
													5
													stars
												</span>{' '}
												by
												over{' '}
												<span className='font-medium text-indigo-500'>
													0
													beta
													users
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='sm:mx-auto sm:max-w-3xl sm:px-6'>
							<div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
								<div className='hidden sm:block'>
									<div className='absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full' />
									<svg
										className='absolute right-1/2 top-8 -mr-3 lg:left-0 lg:m-0'
										width={
											404
										}
										height={
											392
										}
										fill='none'
										viewBox='0 0 404 392'
									>
										<defs>
											<pattern
												id='837c3e70-6c3a-44e6-8854-cc48c737b659'
												x={
													0
												}
												y={
													0
												}
												width={
													20
												}
												height={
													20
												}
												patternUnits='userSpaceOnUse'
											>
												<rect
													x={
														0
													}
													y={
														0
													}
													width={
														4
													}
													height={
														4
													}
													className='text-gray-200'
													fill='currentColor'
												/>
											</pattern>
										</defs>
										<rect
											width={
												404
											}
											height={
												392
											}
											fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)'
										/>
									</svg>
								</div>
								<div className='relative -mr-40 pl-6 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12'>
									<img
										className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none'
										src='./screen.png'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
					{/* Testimonial/stats section */}
					{/* uncomment soon */}
					{/* <div className="relative mt-20">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
              <div className="relative sm:py-16 lg:py-0">
                <div
                  aria-hidden="true"
                  className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
                >
                  <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
                  <svg
                    className="absolute left-1/2 top-8 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                    width={404}
                    height={392}
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={392}
                      fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                    />
                  </svg>
                </div>
                <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
                  {/* Testimonial card*/}
					{/* <div className="relative overflow-hidden rounded-2xl pb-10 pt-64 shadow-xl">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src="https://en.islamway.net/uploads/authors/muhammad-jibreel.jpg"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-indigo-300 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-indigo-700 opacity-90" />
                    <div className="relative px-8">
                      <div>
                        <img
                          className="h-12"
                          src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                          alt="Workcation"
                        />
                      </div>
                      <blockquote className="mt-8">
                        <div className="relative text-lg font-medium text-white md:flex-grow">
                          <svg
                            className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-[#1a3230]"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="relative">
                            Tincidunt integer commodo, cursus etiam aliquam
                            neque, et. Consectetur pretium in volutpat, diam.
                            Montes, magna cursus nulla feugiat dignissim id
                            lobortis amet.
                          </p>
                        </div>

                        <footer className="mt-4">
                          <p className="text-base font-semibold text-rose-200">
                            placeholder
                          </p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
                {/* Content area */}
					{/* <div className="pt-12 sm:pt-16 lg:pt-20">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    On a mission to empower institutions
                  </h2>
                  <div className="mt-6 space-y-6 text-gray-500">
                    <p className="text-base leading-7">
                      {`
                      Our mission is driven by a steadfast commitment to empower
                      institutions, especially mosques, with the tools they
                      deserve. Witnessing the disparity in the quality of
                      software that mosques often have to contend with, we've
                      dedicated ourselves to rectifying this imbalance. Our
                      diligent efforts have been focused on simplifying and
                      streamlining essential services, ensuring they are
                      intuitive and readily accessible to those who require
                      them. By providing user-friendly and high-quality software
                      solutions, we aim to uplift mosques and enable them to
                      thrive in the digital age, all while fostering a sense of
                      unity and purpose within their communities.`}
                    </p>
                    <p className="text-base leading-7">
                      {` As our journey unfolds, we remain steadfast in our pursuit
                      of creating meaningful change. Guided by a deep sense of
                      purpose, we recognize the transformative potential of
                      technology for mosques and their communities. This
                      recognition fuels our ongoing commitment to further
                      elevate the software landscape for these vital
                      institutions. By bridging the gap between complex
                      technology and user-friendly applications, we're enabling
                      mosques to harness the full benefits of digital tools
                      without the burden of complexity.`}
                    </p>
                    <p className="text-base leading-7">
                      {`
                      Our dedicated team continually innovates, driven by the
                      belief that every mosque, regardless of size or resources,
                      should have access to top-tier software tailored to their
                      unique needs. The journey to digital empowerment involves
                      more than just technology – it's about fostering a sense
                      of inclusion and connectivity. By crafting solutions that
                      seamlessly integrate into the daily lives of mosques,
                      we're not only enhancing their operational efficiency but
                      also fostering a deeper sense of community.`}
                    </p>
                    <p className="text-base leading-7">
                      In a rapidly changing world, staying true to tradition
                      while embracing innovation can be a delicate balance. Our
                      approach respects the heritage and values of mosques while
                      ushering them into the digital age. We remain resolute in
                      our pledge to stand by mosques every step of the way,
                      serving as a reliable partner on their path to digital
                      transformation.
                    </p>
                  </div>
                </div>

                {/* Stats section */}
					{/* <div className="mt-10">
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="border-t-2 border-gray-100 pt-6"
                      >
                        <dt className="text-base font-medium text-gray-500">
                          {stat.label}
                        </dt>
                        <dd className="text-3xl font-bold tracking-tight text-gray-900">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-10">
                    <a
                      href="#"
                      className="text-base font-medium text-indigo-500"
                    >
                      Learn more about how we're changing the world &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
					{/* uncomment soon  */}
					{/*  */}
					{/* Logo cloud section */}
					{/* un comment soon */}
					<div className='mt-32'>
						<div className='mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8'>
							<div className='lg:grid lg:grid-cols-2 lg:items-center lg:gap-24'>
								<div>
									<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
										Explore a
										suite of
										applications
									</h2>
									<p className='mt-6 max-w-3xl text-lg leading-7 text-gray-500'>
										{`  This achievement has been made achievable thanks to the
                    invaluable support of local Mosques that have embarked on
                    this journey alongside us. Through their collaboration,
                    we've been able to develop software that addresses their
                    diverse requirements. We remain open to insights and
                    perspectives as we continually strive to enhance our
                    offerings.`}
									</p>
									<div className='mt-6'>
										<a
											href='https://github.com/mosque-icu/islamic-ware'
											className='text-base font-medium text-indigo-500'
										>
											See us
											on
											github
										</a>
									</div>
								</div>
								<div className='mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2'>
									{logos.map(
										(
											logo
										) => (
											<div
												key={
													logo.name
												}
												className='col-span-1 flex justify-center bg-gray-50 px-8 py-8'
											>
												<img
													className='max-h-12'
													src={
														logo.url
													}
													alt={
														logo.name
													}
												/>
											</div>
										)
									)}
								</div>
							</div>
						</div>
					</div>
					{/* uncomment soon */}
					{/* CTA section */}
					<div className='relative mt-24 sm:mt-32 sm:py-16'>
						<div
							aria-hidden='true'
							className='hidden sm:block'
						>
							<div className='absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50' />
							<svg
								className='absolute left-1/2 top-8 -ml-3'
								width={404}
								height={392}
								fill='none'
								viewBox='0 0 404 392'
							>
								<defs>
									<pattern
										id='8228f071-bcee-4ec8-905a-2a059a2cc4fb'
										x={0}
										y={0}
										width={20}
										height={
											20
										}
										patternUnits='userSpaceOnUse'
									>
										<rect
											x={0}
											y={0}
											width={
												4
											}
											height={
												4
											}
											className='text-gray-200'
											fill='currentColor'
										/>
									</pattern>
								</defs>
								<rect
									width={404}
									height={392}
									fill='url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)'
								/>
							</svg>
						</div>
						<div className='mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8'>
							<div className='relative overflow-hidden rounded-2xl bg-indigo-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20'>
								<div
									aria-hidden='true'
									className='absolute inset-0 -mt-72 sm:-mt-32 md:mt-0'
								>
									<svg
										className='absolute inset-0 h-full w-full'
										preserveAspectRatio='xMidYMid slice'
										fill='none'
										viewBox='0 0 1463 360'
									>
										<path
											className='text-rose-400 text-opacity-40'
											fill='currentColor'
											d='M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z'
										/>
										<path
											className='text-rose-600 text-opacity-40'
											fill='currentColor'
											d='M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z'
										/>
									</svg>
								</div>
								<div className='relative'>
									<div className='sm:text-center'>
										<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
											Stay in
											the
											loop!
										</h2>
										<p className='mx-auto mt-6 max-w-2xl text-lg text-rose-100'>
											Join
											our
											newsletter
											and
											receive
											the
											latest
											updates.
										</p>
									</div>
									<form
										action='#'
										className='mt-12 sm:mx-auto sm:flex sm:max-w-lg'
									>
										<div className='min-w-0 flex-1'>
											<label
												htmlFor='cta-email'
												className='sr-only'
											>
												Email
												address
											</label>
											<input
												id='cta-email'
												type='email'
												className='block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-800 bg-gray-100 placeholder-gray-500 shadow-sm focus:border-[#05A89D] focus:ring-[#05A89D]'
												placeholder='Enter your email'
											/>
										</div>
										<div className='mt-4 sm:ml-3 sm:mt-0'>
											<button
												type='submit'
												className='block w-full rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#05A89D] sm:px-10'
											>
												Notify
												me
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>

			<main>
				{/* Hero section */}

				{/* Feature section */}
				<div className='pt-20 bg-white'>
					<div className='mx-auto max-w-7xl px-6 lg:px-8'>
						<div className='mx-auto max-w-2xl sm:text-center'>
							<h2 className='sm:pt-10 text-base font-semibold leading-7 text-indigo-500'>
								Everything you
								need
							</h2>
							<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
								No website? No
								problem.
							</p>
							<p className='mt-6 text-lg leading-8 text-gray-600'>
								Launch your
								website swiftly
								using our
								intuitive
								website builder.
								Get online in a
								matter of
								moments!
							</p>
						</div>
					</div>
					<div className='relative overflow-hidden pt-16'>
						<div className='mx-auto max-w-7xl px-6 lg:px-8'>
							<img
								src='https://i.ibb.co/qF3Kw72/Screenshot-2023-08-31-at-05-14-49.png'
								alt='App screenshot'
								className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10'
								width={2432}
								height={1442}
							/>
							<div
								className='relative'
								aria-hidden='true'
							>
								<div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]' />
							</div>
						</div>
					</div>
					<div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
						<dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
							{features.map(
								(feature) => (
									<div
										key={
											feature.name
										}
										className='relative pl-9'
									>
										<dt className='inline font-semibold text-gray-900'>
											<feature.icon
												className='absolute left-1 top-1 h-5 w-5 text-indigo-500'
												aria-hidden='true'
											/>
											{
												feature.name
											}
										</dt>{' '}
										<dd className='inline'>
											{
												feature.description
											}
										</dd>
									</div>
								)
							)}
						</dl>
					</div>
				</div>

				{/* Testimonial section */}
				{/* uncomment soon */}
				{/* <div className='relative z-10 mt-32 bg-gray-500 pb-20 sm:mt-56 sm:pb-24 xl:pb-0'>
					<div
						className='absolute inset-0 overflow-hidden'
						aria-hidden='true'
					>
						<div className='absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl'>
							<div
								className='aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-25'
								style={{
									clipPath:
										'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
								}}
							/>
						</div>
					</div>
					<div className='mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch'>
						<div className='-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none'>
							<div className='relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto'>
								<img
									className='absolute inset-0 h-full w-full rounded-2xl bg-gray-200 object-cover shadow-2xl'
									src='https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80'
									alt=''
								/>
							</div>
						</div>
						<div className='w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24'>
							<figure className='relative isolate pt-6 sm:pt-12'>
								<svg
									viewBox='0 0 162 128'
									fill='none'
									aria-hidden='true'
									className='absolute left-0 top-0 -z-10 h-32 stroke-white/20'
								>
									<path
										id='b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb'
										d='M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z'
									/>
									<use
										href='#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb'
										x={86}
									/>
								</svg>
								<blockquote className='text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9'>
									<p>
										Gravida
										quam mi
										erat
										tortor
										neque
										molestie.
										Auctor
										aliquet at
										porttitor
										a enim
										nunc
										suscipit
										tincidunt
										nunc. Et
										non lorem
										tortor
										posuere.
										Nunc eu
										scelerisque
										interdum
										eget
										tellus non
										nibh
										scelerisque
										bibendum.
									</p>
								</blockquote>
								<figcaption className='mt-8 text-base'>
									<div className='font-semibold text-white'>
										placeholder
									</div>
									<div className='mt-1 text-gray-400'>
										CEO of
										nothing
									</div>
								</figcaption>
							</figure>
						</div>
					</div>
				</div> */}
				{/* uncomment soon */}

				{/* Pricing section */}
				<div className='relative isolate mt-32 bg-white px-6 sm:mt-56 lg:px-8'>
					<div
						className='absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl'
						aria-hidden='true'
					>
						<div
							className='mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-indigo-500 to-[#0c2c2a86] opacity-30'
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
					<div className='mx-auto max-w-2xl  text-center lg:max-w-4xl'>
						<h2 className='text-base font-semibold leading-7 text-indigo-500'>
							Pricing
						</h2>
						<p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
							The right price for
							you, whoever you
							are
						</p>
					</div>
					<p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600'>
						Be a part of our
						initiative to forever
						create free software
						for institutions and
						join us in this
						ongoing commitment.
					</p>
					<div className='mx-auto mt-16 grid max-w-full grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl '>
						{tiers.map(
							(
								tier,
								tierIdx
							) => (
								<div
									key={tier.id}
									className={classNames(
										tier.featured
											? 'relative bg-gray-700 shadow-2xl'
											: 'bg-white/60 sm:mx-8 lg:mx-0',
										tier.featured
											? ''
											: tierIdx ===
											  0
											? 'rounded-3xl'
											: 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
										'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
									)}
								>
									<h3
										id={
											tier.id
										}
										className={classNames(
											tier.featured
												? 'text-indigo-400'
												: 'text-indigo-500',
											'text-base font-semibold leading-7'
										)}
									>
										{
											tier.name
										}
									</h3>
									<p className='mt-4 flex items-baseline gap-x-2'>
										<span
											className={classNames(
												tier.featured
													? 'text-white'
													: 'text-gray-900',
												'text-5xl font-bold tracking-tight'
											)}
										>
											{
												tier.priceMonthly
											}
										</span>
										<span
											className={classNames(
												tier.featured
													? 'text-gray-400'
													: 'text-gray-500',
												'text-base'
											)}
										>
											/month
										</span>
									</p>
									<p
										className={classNames(
											tier.featured
												? 'text-gray-300'
												: 'text-gray-600',
											'mt-6 text-base leading-7'
										)}
									>
										{
											tier.description
										}
									</p>
									<ul
										role='list'
										className={classNames(
											tier.featured
												? 'text-gray-300'
												: 'text-gray-600',
											'mt-8 space-y-3 text-sm leading-6 sm:mt-10'
										)}
									>
										{tier.features.map(
											(
												feature
											) => (
												<li
													key={
														feature
													}
													className='flex gap-x-3'
												>
													<CheckIcon
														className={classNames(
															tier.featured
																? 'text-indigo-400'
																: 'text-indigo-500',
															'h-6 w-5 flex-none'
														)}
														aria-hidden='true'
													/>
													{
														feature
													}
												</li>
											)
										)}
									</ul>
									<a
										href={
											tier.href
										}
										aria-describedby={
											tier.id
										}
										className={classNames(
											tier.featured
												? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
												: 'text-indigo-500 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-[#05A89D]',
											'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
										)}
									>
										Get
										started
										today
									</a>
								</div>
							)
						)}
					</div>
				</div>

				{/* FAQ section */}
				<div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-56 bg-white lg:px-8'>
					<div className='mx-auto max-w-4xl divide-y divide-gray-900/10'>
						<h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
							Frequently asked
							questions
						</h2>
						<dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
							<Faq />
						</dl>
					</div>
				</div>
			</main>

			{/* Footer */}

			<footer
				className='bg-white'
				aria-labelledby='footer-heading'
			>
				<h2
					id='footer-heading'
					className='sr-only'
				>
					Footer
				</h2>
				<div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
					<div className='xl:grid xl:grid-cols-3 xl:gap-8'>
						<div className='space-y-8'>
							<img
								className='h-11'
								src='logo.png'
								alt='Company name'
							/>
							<p className='text-sm leading-6 text-gray-600'>
								"Who is it that
								would lend Allah
								a goodly loan so
								He may multiply
								it for him many
								times over? And
								it is Allah who
								withholds and
								grants
								abundance, and
								to Him you will
								be returned." -
								Quran, Surah
								Al-Baqarah,
								2:245
							</p>
							<div className='flex space-x-6'>
								{footerNavigation.social.map(
									(item) => (
										<a
											key={
												item.name
											}
											href={
												item.href
											}
											className='text-gray-400 hover:text-gray-500'
										>
											<span className='sr-only'>
												{
													item.name
												}
											</span>
											<item.icon
												className='h-6 w-6'
												aria-hidden='true'
											/>
										</a>
									)
								)}
							</div>
						</div>
						<div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
							<div className='md:grid md:grid-cols-2 md:gap-8'>
								<div>
									<h3 className='text-sm font-semibold leading-6 text-gray-900'>
										Solutions
									</h3>
									<ul
										role='list'
										className='mt-6 space-y-4'
									>
										{footerNavigation.solutions.map(
											(
												item
											) => (
												<li
													key={
														item.name
													}
												>
													<a
														href={
															item.href
														}
														className='text-sm leading-6 text-gray-600 hover:text-gray-900'
													>
														{
															item.name
														}
													</a>
												</li>
											)
										)}
									</ul>
								</div>
								<div className='mt-10 md:mt-0'>
									<h3 className='text-sm font-semibold leading-6 text-gray-900'>
										Support
									</h3>
									<ul
										role='list'
										className='mt-6 space-y-4'
									>
										{footerNavigation.support.map(
											(
												item
											) => (
												<li
													key={
														item.name
													}
												>
													<a
														href={
															item.href
														}
														className='text-sm leading-6 text-gray-600 hover:text-gray-900'
													>
														{
															item.name
														}
													</a>
												</li>
											)
										)}
									</ul>
								</div>
							</div>
							<div className='md:grid md:grid-cols-2 md:gap-8'>
								<div>
									<h3 className='text-sm font-semibold leading-6 text-gray-900'>
										Company
									</h3>
									<ul
										role='list'
										className='mt-6 space-y-4'
									>
										{footerNavigation.company.map(
											(
												item
											) => (
												<li
													key={
														item.name
													}
												>
													<a
														href={
															item.href
														}
														className='text-sm leading-6 text-gray-600 hover:text-gray-900'
													>
														{
															item.name
														}
													</a>
												</li>
											)
										)}
									</ul>
								</div>
								<div className='mt-10 md:mt-0'>
									<h3 className='text-sm font-semibold leading-6 text-gray-900'>
										Legal
									</h3>
									<ul
										role='list'
										className='mt-6 space-y-4'
									>
										{footerNavigation.legal.map(
											(
												item
											) => (
												<li
													key={
														item.name
													}
												>
													<a
														href={
															item.href
														}
														className='text-sm leading-6 text-gray-600 hover:text-gray-900'
													>
														{
															item.name
														}
													</a>
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
						<p className='text-xs leading-5 text-gray-500'>
							&copy; 2023
							MosqueICU, Limited.
							All rights
							reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

const footerNavigation = {
	solutions: [
		{ name: 'XDisplay', href: '#' },
		{
			name: 'QuikBuilder',
			href: '#',
		},
		// { name: "Commerce", href: "#" },
		// { name: "Insights", href: "#" },
	],
	support: [
		{
			name: 'Pricing',
			href: '#pricing',
		},
		{
			name: 'Documentation',
			href: 'https://documentation.mosque.icu',
		},
		{ name: 'Guides', href: '#' },
		{
			name: 'API Status',
			href: 'https://documentation.mosque.icu?p=status',
		},
	],
	company: [
		{ name: 'About', href: '#about' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Jobs', href: '/jobs' },
		{ name: 'Press', href: '/press' },
		{
			name: 'Partners',
			href: '/partners',
		},
	],
	legal: [
		{
			name: 'Claim',
			href: '/policy/claims',
		},
		{
			name: 'Privacy',
			href: '/policy/privacy',
		},
		{
			name: 'Terms',
			href: '/policy/terms',
		},
	],
	social: [
		{
			name: 'Facebook',
			href: '#',
			icon: (props) => (
				<svg
					fill='currentColor'
					viewBox='0 0 24 24'
					{...props}
				>
					<path
						fillRule='evenodd'
						d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: 'Instagram',
			href: '#',
			icon: (props) => (
				<svg
					fill='currentColor'
					viewBox='0 0 24 24'
					{...props}
				>
					<path
						fillRule='evenodd'
						d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: 'Twitter',
			href: '#',
			icon: (props) => (
				<svg
					fill='currentColor'
					viewBox='0 0 24 24'
					{...props}
				>
					<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
				</svg>
			),
		},
		{
			name: 'GitHub',
			href: '#',
			icon: (props) => (
				<svg
					fill='currentColor'
					viewBox='0 0 24 24'
					{...props}
				>
					<path
						fillRule='evenodd'
						d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: 'YouTube',
			href: '#',
			icon: (props) => (
				<svg
					fill='currentColor'
					viewBox='0 0 24 24'
					{...props}
				>
					<path
						fillRule='evenodd'
						d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
	],
};
