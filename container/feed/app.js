const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const type = ['quran', 'hadith',]
const languages = ['arabic', 'bengali', 'english', 'french', 'indonesian', 'russian', 'tamil', 'turkish', 'urdu'];
const hadithBooks = ['Sahih al-Bukhari', 'Sahih Muslim', 'Sunan Abu Dawood', 'Sunan at-Tirmidhi'];

// Route for a Hadith book in a specific language
// app.get('/:language/hadith/:book', (req, res) => {
//   const { language, book } = req.params;
//   res.send(`Welcome to the ${language} language page for ${book}`);
// });
// you can access routes like /arabic/hadith/Sahih al-Bukhari, /english/hadith/Sunab Abu Dawood

// Route for a Hadith or quran in a specific language
const path = require('path'); // Import the 'path' module

app.get('/:language/:type/', (req, res) => {
  const { language, type } = req.params;
  const xmlFilePath = path.join(__dirname, 'data', 'feeds', language, `${type}.xml`);
  res.type('xml').sendFile(xmlFilePath);
});

// you can access routes like /arabic/hadith/Sahih al-Bukhari, /english/hadith/Sunab Abu Dawood

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`
