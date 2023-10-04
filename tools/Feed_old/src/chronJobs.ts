import { main_getHadith } from './scripts/getHadith';
import { addToRSSFeed } from './appendFeed';
import * as path from 'path';
import { capitalFirstLetter } from '../util/capitalFirstLetter';
import { hadithLanguages } from './constants/languages';
const cron = require('node-cron');

export function chronJobs()
{
  hadith_Job()
  quran_Job()
}


function hadith_Job() {
  async function getRandomHadith() {
    const promises = hadithLanguages.map(async (language:string) => {
      try {
        const result = await main_getHadith(capitalFirstLetter(language));
        if (result &&  result.hadiths[0].text.length > 5 &&result.metadata && result.hadiths[0].grades.length > 0) {
          const feed_result = await addToRSSFeed(path.join(__dirname, 'data', `./hadith/${language}.xml`), {
            title: result.metadata.name,
            link: 'https://www.mosque.icu',
            description:`<b> ${Object.keys(result.metadata.section)[0]} </b>  ${Object.values(result.metadata.section)[0]}
 <br></br>
 <b>
Hadith ${result.hadiths[0].hadithnumber}
</b>
 <br> </br>
   ${result.hadiths[0].text} <br></br>  <b> Grades of authenticity </b> ${result.hadiths[0].grades.map(data => `${data.name}(${data.grade})`).join(', ')}`,
            pubDate: new Date().toUTCString(),
          });
          console.log(feed_result,);
        } else {
          console.error(`Error fetching data for ${language}: Invalid result`);
        }
      } catch (error) {
        console.error(`Error fetching data for ${language}:`, error);
      }
    });

    await Promise.all(promises);
  }

  // Schedule the cron job to run every 10 seconds
  cron.schedule('*/10 * * * * *', () => {
    console.log(`Cron job 'hadith' executed every 10 seconds!`);
    getRandomHadith();
  });
}



function quran_Job()
{

  function getRandomQuran()
  {
    console.log('Getting random Quran verse...');
  }

  // Schedule the cron job to run every 10 seconds
  cron.schedule('*/10 * * * * *', (() =>
  {
    console.log(`Cron job hadith executed every 10 seconds!`);
    getRandomQuran();
  }))
}

