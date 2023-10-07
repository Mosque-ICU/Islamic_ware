import { hadith } from 'sacred_texts';
import cron from 'node-cron';

export function chronJobs() {
  cron.schedule(
    '*/10 * * * * *',
    () => {
      console.log('Cron job hadith executed every 10 seconds!');
      hadithJob();
    }
  );
  // quranJob(); // You can call this function if needed.
}

async function hadithJob() {
  try {
    const result = await hadith({ limit: 2, language: 'english' });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// The getRandomQuran function was empty, so it's removed for simplicity.
