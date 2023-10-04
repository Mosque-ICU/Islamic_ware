import { hadith } from '@mosque-icu/sacred_texts';
const cron = require('node-cron');

export function chronJobs() {
	cron.schedule(
		'*/10 * * * * *',
		() => {
			console.log(
				`Cron job hadith executed every 10 seconds!`
			);
			hadith_Job();
		}
	);
	// quran_Job();
}

async function hadith_Job() {
	try {
		await hadith('random');
		console.log(
			await hadith('random')
		);
	} catch (error) {
		console.log(error);
	}
}

function quran_Job() {
	function getRandomQuran() {
		console.log(
			'Getting random Quran verse...'
		);
	}
}
