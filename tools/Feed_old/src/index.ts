import * as http from 'http';
import { promises as fsPromises } from 'fs'; // Import fs.promises for async file operations
import * as path from 'path';
import { chronJobs } from './chronJobs';
import { hadithLanguages } from './constants/languages';

const server: http.Server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
  // Set the content type to XML
  res.setHeader('Content-Type', 'application/xml');

  if (req.url?.startsWith('/hadith/')) {
    const lang = req.url?.split('/')[2]; // Extract the language from the URL

    if (hadithLanguages.includes(lang)) {
      try {
        // Read the XML file for the requested language and send it as the response
        const data = await fsPromises.readFile(path.join(__dirname, 'data', `./hadith/${lang}.xml`));
        res.statusCode = 200; // OK
        res.end(data);
      } catch (err) {
        // Handle errors here
        console.error(err);
        res.statusCode = 500; // Internal Server Error
        res.end('Error serving XML file');
      }
    } else {
      // Handle invalid language request
      res.statusCode = 400; // Bad Request
      res.end('Invalid language specified');
    }
  }
});

const PORT: number = 8910;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// chronJobs schedules jobs to update RSS feeds periodically
chronJobs()
