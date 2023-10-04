//index.js
import { hadithLanguages } from './constants/languages';
import { main_getHadith } from './scripts/getHadith';
import { capitalFirstLetter } from './util/capitalFirstLetter';

export async function hadith(key) {
	switch (key) {
		case 'random':
			var res;
			async function getRandomHadith() {
				const promises =
					hadithLanguages.map(
						async (language) => {
							try {
								const result =
									await main_getHadith(
										capitalFirstLetter(
											language
										)
									);
								if (
									result &&
									result
										.hadiths[0]
										.text
										.length >
										5 &&
									result.metadata &&
									result
										.hadiths[0]
										.grades
										.length >
										0
								) {
									console.log(
										result
									);
									res = result;
								}
							} catch (error) {
								console.error(
									`Error fetching data for ${language}:`,
									error
								);
							}
						}
					);

				await Promise.all(promises);
			}
			getRandomHadith() 
			return res;
			break;

		default:
			// this can have get using key var
			break;
	}
}
