const fetch = require('node-fetch');

export async function main_getHadith(langauge:string) {
  // Usage example
   return  await listEditions(langauge);
}

async function getRandomHadith(editions:any) {
  // Select a random book
  const randomBook = editions[Math.floor(Math.random() * editions.length)];

  // Generate a random Hadith number (assuming the book has at least 1035 Hadiths)
  var randomHadithNo = Math.floor(Math.random() * 11035) + 1;

// Construct the URL for the random Hadith
const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${randomBook.collection[0].name}/${randomHadithNo}.json`;

  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const hadith = await response.json();
      // console.log(`Random Hadith from ${randomBook.bookName}:`);
      // console.log(hadith);
      return hadith
    } else {
      console.log(url)
      console.error(`Error fetching Hadith: ${response.statusText}`);
      randomHadithNo = Math.floor(Math.random() * 1035) + 1;
      return getRandomHadith(editions)
    }
  } catch (error ) {
    console.error(`Error: ${error.message}`);
  }
}

function sortByLanguage(data:any, langauge:string) {
  const editions = [];

  for (const key in data) {
    const edition = data[key];
    if (edition.collection.some(item => item.language === langauge)) {
      // Check if the edition has the desired language in its collection
      const language = edition.language;


      // Push the edition object into the 'editions[language]' array
      editions.push({
        name: edition.name,
        collection: edition.collection.filter(item => item.language === langauge),
      });
    }
  }

  return  getRandomHadith(editions)
}

async function listEditions(langauge:string) {
  try {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions.json';

    // Use the fetch function to make the GET request
    const response = await fetch(url);

    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();
// Call sortByLanguage with the desired language (e.g., 'English')
return sortByLanguage(data, langauge);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
}


