import { getRandomHadith } from "./main/hadith";

export async function hadith({ language, limit }) {
  const result = await getRandomHadith({ language, limit });
  return result;
}

export async function rss(key) {
  switch (key) {
    case 'append':
      console.log("RSS Secret:", process.env.RSS_SECRET);
      return;

    case 'read':
      console.log("Reading RSS data");
      // Define 'res' before returning it here.
      return res;

case 'retrieve':
      console.log("Reading RSS data");
      // Define 'res' before returning it here.
      return res;


    default:
      // Add logic for handling other cases if needed.
      break;
  }
}
