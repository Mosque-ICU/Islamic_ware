import {capitalFirstLetter} from '../util/capitalFirstLetter'; // Assuming you have this import
import { hadithLanguages } from '../constants/languages';
import { main_getHadith } from '../scripts/getHadith';

export async function getRandomHadith(){
  let res; // Initialize the result variable


  const promises = hadithLanguages.map(async (language) => {
    try {
      const result = await main_getHadith(capitalFirstLetter(language));

      if (
        result &&
        result.hadiths[0].text.length > 5 &&
        result.metadata &&
        result.hadiths[0].grades.length > 0
      ) {
        console.log(result);
        res = result;
      }
    } catch (error) {
      console.error(`Error fetching data for ${language}:`, error);
    }
  });

  await Promise.all(promises);

  return res; // Return the result after all promises are resolved
};

