import { capitalFirstLetter } from '../util/capitalFirstLetter';
import { hadithLanguages } from '../constants/languages';
import { main_getHadith } from '../scripts/getHadith';

// Function to shuffle an array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function isValidHadith(result) {
  return (
    result &&
    result.hadiths[0].text.length > 5 &&
    result.metadata &&
    result.hadiths[0].grades.length > 0
  );
}

async function fetchAndPushHadith(language, resultArray) {
  try {
    const result = await main_getHadith(capitalFirstLetter(language));
    if (await isValidHadith(result)) {
      console.log(`Valid result for language ${language}:`, result);
      resultArray.push(result);
    } else {
      console.log(`Invalid result for language ${language}:`, result);
    }
  } catch (error) {
    console.error(`Error fetching data for ${language}:`, error);
  }
}

export async function getRandomHadith({ limit, language }) {
  const resultArray = [];
  const languagesToFetch = language ? [language, ...hadithLanguages] : [...hadithLanguages];
  shuffleArray(languagesToFetch);

  for (const lang of languagesToFetch) {
    await fetchAndPushHadith(lang, resultArray);
    if (limit && resultArray.length >= limit) {
      break;
    }
  }

  return resultArray;
}
