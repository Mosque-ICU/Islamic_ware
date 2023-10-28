'use client';

import React from 'react';
import { EventPage } from './EventPage';
import { Toaster } from 'react-hot-toast';
// import SideBarLayout from '.../../../app/components/__Layouts/homesidebar';
import { Loader } from 'react-feather';
import loading from '../../account/[...slug]/loading';
import { useEstablishment } from '../../../_helpers/web/hooks/useEstablishment';
import SideBarLayout from '@/app/components/__Layouts/homesidebar';

function page() {
	const {
		currentEstablishment,
		publicEstablishmentId,
	} = useEstablishment();
	return (
		<SideBarLayout
			// sideBar={<PrayersSidebar />}
			currentEstablishment={
				currentEstablishment
			}
			loading={loading}
		>

				<Toaster />
				<EventPage />
		</SideBarLayout>
	);
}

export default page;
