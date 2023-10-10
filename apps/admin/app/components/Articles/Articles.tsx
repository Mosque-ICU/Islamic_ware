'use client';
import { publicId } from '@/app/_helpers/web/formatters';
import React, { Fragment } from 'react';
import RecordViewer from '../RecordViewer/RecordViewer';
import AddArticle from './AddArticle';
import { useRouter } from 'next/navigation';

type Props = {
	articles: any[];
	refetch: (page: number) => void;
	page: number;
	currentEstablishment: any;
	total: number;
	publicEstablishmentId: string;
};

function Articles({
	articles = [],
	refetch,
	page = 1,
	publicEstablishmentId = '',
	total = 0,
	currentEstablishment,
}: Props) {
	const router = useRouter();
	const [curArticles, setCurArticles] =
		React.useState([]);
	const [
		showAddScreen,
		setShowAddScreen,
	] = React.useState(false);

	React.useEffect(() => {
		if (
			articles &&
			articles.length > 0
		) {
			setCurArticles(articles);
		}
	}, [articles]);

	const navigateTo = (id) => {
		router.push(
			`/dashboard/article/${publicEstablishmentId}?id=${id}`
		);
	};

	if (!currentEstablishment)
		return null;
	return (
		<>
			<RecordViewer
				records={curArticles}
				onPress={(id) =>
					navigateTo(id)
				}
				addAction={setShowAddScreen}
				addLabel='Add New Article'
				onEndReached={() => {
					if (
						curArticles.length <
						total
					) {
						refetch(page + 1);
					}
				}}
			/>
			{showAddScreen && (
				<AddArticle
					setCurArticles={
						setCurArticles
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

export default Articles;
