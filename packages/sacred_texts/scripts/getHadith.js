const fetch = require('node-fetch');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchHadithByEdition(randomBook, randomHadithNo) {
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${randomBook.collection[0].name}/${randomHadithNo}.json`;
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      return fetchHadithByEdition(randomBook, randomHadithNo);
    }
  } catch (error) {
    return null;
  }
}

function filterEditionsByLanguage(data, language) {
  return Object.values(data).flatMap(edition => {
    const filteredCollection = edition.collection.filter(item => item.language === language);
    return filteredCollection.length > 0 ? [{
      name: edition.name,
      collection: filteredCollection
    }] : [];
  });
}

async function listEditions(language) {
  try {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions.json';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const filteredEditions = filterEditionsByLanguage(data, language);
    return filteredEditions.length > 0 ? await fetchHadithByEdition(filteredEditions[0], getRandomInt(1, 11035)) : null;
  } catch (error) {
    return null;
  }
}

export async function main_getHadith(language) {
  return await listEditions(language);
}
