'use client';
import { publicId } from '@/app/_helpers/web/formatters';
import React, {
	useState,
	Fragment,
} from 'react';
import RecordViewer from '../RecordViewer/RecordViewer';
import AddPrayer from './AddPrayer';
import { useRouter } from 'next/navigation';
import PrayersPage from '../../dashboard/prayers/something/PrayersPage';
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
import ExportPrayers from '@/app/dashboard/prayers/something/ExportPrayers';
import ImportPrayers from '@/app/dashboard/prayers/something/ImportPrayers';

/**
 * Prayers Component
 *
 * This component is used to display a list of prayers related to a specific establishment.
 * It provides the ability to view individual prayers and add new prayers.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {Array} props.prayers - An array of prayer objects to display.
 * @param {function} props.refetch - A function to fetch more prayers.
 * @param {number} props.page - The current page of prayers being displayed.
 * @param {Object} props.currentEstablishment - The details of the current establishment.
 * @param {number} props.total - The total number of prayers available.
 * @param {string} props.publicEstablishmentId - The public ID of the establishment.
 * @returns {JSX.Element} The Prayers component.
 */

type Props = {
	prayers: any[];
	refetch: (page: number) => void;
	page: number;
	currentEstablishment: any;
	total: number;
	publicEstablishmentId: string;
};

function classNames(...classes) {
	return classes
		.filter(Boolean)
		.join(' ');
}

function Prayers({
	prayers = [],
	refetch,
	page = 1,
	publicEstablishmentId = '',
	total = 0,
	currentEstablishment,
}: Props) {
	const router = useRouter();

	const [curPrayers, setCurPrayers] =
		React.useState([]);
	const [
		showAddScreen,
		setShowAddScreen,
	] = React.useState(false);

	React.useEffect(() => {
		if (
			prayers &&
			prayers.length > 0
		) {
			setCurPrayers(prayers);
		}
	}, [prayers]);

	const navigateTo = (id) => {
		router.push(
			`/dashboard/prayer/${publicEstablishmentId}?id=${id}`
		);
	};
	// navigates to the indivudial page

	if (!currentEstablishment)
		return null;
	return (
		<>
			<RecordViewer
				records={curPrayers}
				onPress={(id) =>
					navigateTo(id)
				}
				addAction={setShowAddScreen}
				addLabel='Add New Prayer'
				onEndReached={() => {
					if (
						curPrayers.length <
						total
					) {
						refetch(page + 1);
					}
				}}
			/>
			{showAddScreen && (
				<AddPrayer
					open={showAddScreen}
					setOpen={
						setShowAddScreen
					}
					setCurPrayers={
						setCurPrayers
					}
					publicEstablishmentId={
						publicEstablishmentId
					}
					close={() =>
						setShowAddScreen(
							false
						)
					}
				/>
			)}
		</>
	);
}

export default Prayers;
