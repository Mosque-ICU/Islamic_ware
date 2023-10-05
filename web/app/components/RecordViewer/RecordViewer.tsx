import React from 'react';
import DataTable from 'react-data-table-component';
import {
	Settings,
	Table,
} from 'react-feather';

type Props = {
	onPress: () => void;
	addAction: () => void;
	addLabel?: string;
	records: any[];
	onEndReached: () => void;
	labelId?: boolean;
};
function RecordViewer({
	onPress,
	records = [],
	addAction,
	addLabel,
	onEndReached,
	labelId = false,
}: Props) {
	let scrollTimeout =
		React.useRef<any>(null);
	let searchTimeout =
		React.useRef<any>(null);

	const [filterData, setFilterData] =
		React.useState(null);
	const [searchTerm, setSearchTerm] =
		React.useState('');
	const [tableView, setTableView] =
		React.useState(false);
	const [
		selectionData,
		setSelectionData,
	] = React.useState({
		clickPosition: null,
		data: null,
	});

	React.useEffect(() => {
		if (!searchTerm)
			return setFilterData(null);

		if (records.length < 30) {
			const filtered =
				records.filter((r) => {
					if (r.label)
						return r.label
							.toLowerCase()
							.includes(
								searchTerm.toLowerCase()
							);
					else
						return r.title
							.toLowerCase()
							.includes(
								searchTerm.toLowerCase()
							);
				}) as any;
			setFilterData(filtered);
		} else {
			if (searchTimeout.current)
				clearTimeout(
					searchTimeout.current
				);
		}

		// searchTimeout.current && clearTimeout(searchTimeout.current);
		// searchTimeout.current = setTimeout(() => {
		//   const filtered = records.filter((r) => {
		//     return r.title.toLowerCase().includes(filterData.toLowerCase()) || r.description.toLowerCase().includes(filterData.toLowerCase());
		//   });
		//   setFilterData(filtered);
		// }, 300);
	}, [searchTerm]);

	return (
		<div className=' mx-5 min-h-[400px] '>
			<div className='flex items-center justify-between px-5 relative bottom-3'>
				<div className='flex flex-row bg-white/75 rounded-md shadow-md p-1 mt-3 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out'>
					<Table
						className='cursor-pointer  rounded-md '
						size={22}
						onClick={() =>
							setTableView(
								!tableView
							)
						}
					/>
				</div>

				<input
					className='base-input bg-white/75 rounded-md shadow-md p-1  hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out focus:hover:bg-gray-100 focus:shadow-lg focus:scale-105 focus:outline-none'
					placeholder='Search title...'
					type='search'
					onChange={(e) =>
						setSearchTerm(
							e.target.value
						)
					}
				/>
			</div>

			{!tableView ? (
				<div
					onScroll={(e) => {
						if (
							scrollTimeout.current
						)
							clearTimeout(
								scrollTimeout.current
							);
						scrollTimeout.current =
							setTimeout(() => {
								const bottom =
									e.target
										.scrollHeight -
										e.target
											.scrollTop ===
									e.target
										.clientHeight;
								if (bottom) {
									onEndReached();
								}
							}, 100);
					}}
					className='scrollbar-hide  grid grid-cols-1  gap-4 overflow-y-auto px-4  pb-6 pt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4'
				>
					{(
						filterData || records
					).map((screen) => (
						<div
							key={screen.id}
							onClick={() =>
								onPress(
									labelId
										? screen.label
										: screen.id
								)
							}
							className='cursor-pointer overflow-hidden rounded-lg  bg-white shadow-md transition duration-500 ease-in-out hover:scale-105 hover:transform hover:shadow-lg relative group/item '
						>
							<div className='absolute top-0 right-0 p-2 bg-white/50 rounded-bl-md rounded-tr-md shadow-md transition duration-500 ease-in-out hover:scale-105 hover:transform hover:shadow-lg hidden group-hover/item:inline fadeIn'>
								<Settings
									className='cursor-pointer'
									size={20}
									onClick={(
										e
									) => {
										e.stopPropogation();
										setSelectionData(
											{
												clickPosition:
													{
														x: e.clientX,
														y: e.clientY,
													},
												data: screen,
											}
										);
									}}
								/>
							</div>

							{screen.thumbnail && (
								<img
									src={
										screen.thumbnail ||
										screen
											.images[0]
									}
									alt={
										screen.title
									}
									className='h-[150px] w-full object-cover'
								/>
							)}

							<div className='p-3'>
								<h3 className='mb-2 text-lg font-medium'>
									{screen?.title ||
										screen?.label ||
										''}
								</h3>
								{/* <p className="text-sm text-gray-600">{screen.description}</p> */}
								<div className='mt-2 flex items-center'>
									<span className='text-sm text-gray-400'>
										{new Date(
											screen.createdAt
										).toLocaleDateString()}
									</span>
									<span className='mx-2 text-gray-400'>
										•
									</span>
									<span className='overflow-hidden overflow-ellipsis text-sm text-gray-400'>
										{
											screen.description
										}
									</span>
								</div>
							</div>
						</div>
					))}
					<div
						className='flex min-h-[230px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-white/50 transition duration-500 ease-in-out hover:scale-105 hover:transform hover:bg-gray-100 hover:shadow-lg'
						onClick={() =>
							addAction(true)
						}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='mb-2 h-20 w-20 text-gray-400'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M10 2a1 1 0 00-1 1v6H3a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 00-1-1z'
								clipRule='evenodd'
							/>
						</svg>
						<span className='text-lg font-medium text-gray-600'>
							{addLabel || 'Add'}
						</span>
					</div>
				</div>
			) : (
				<div className='mt-2 mx-4 rounded-md shadow-md p-1 bg-gray-50'>
					<DataTable
						columns={[
							{
								name: 'Title',
								selector: (
									row
								) =>
									row.title ||
									row.label,
								sortable: true,
							},
							{
								name: 'Description',
								selector: (
									row
								) =>
									row.description,
								sortable: true,
							},
							{
								name: 'Created At',
								selector: (
									row
								) =>
									new Date(
										row.createdAt
									).toLocaleDateString(),
								sortable: true,
							},
						]}
						pagination
						paginationPerPage={30}
						paginationRowsPerPageOptions={[
							30,
						]}
						responsive
						highlightOnHover
						data={
							filterData ||
							records
						}
						onRowClicked={(row) =>
							onPress(
								labelId
									? row.label
									: row.id
							)
						}
						// what does this mean
					/>
				</div>
			)}
		</div>
	);
}

export default RecordViewer;
