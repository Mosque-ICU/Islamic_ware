import * as fs from "fs";
import * as xml2js from "xml2js";
export function addToRSSFeed(feedPath, newItem) {
    return new Promise((resolve, reject) => {
        // Read the existing RSS feed XML
        fs.readFile(feedPath, "utf-8", (err, data) => {
            if (err) {
                console.error("Error reading RSS feed:", err);
                reject(err);
                return;
            }
            // Parse the XML to JSON
            xml2js.parseString(data, (err, result) => {
                if (err) {
                    console.error("Error parsing RSS feed:", err);
                    reject(err);
                    return;
                }
                // Access the RSS feed JSON object
                const rssFeed = result.rss;
                if (!rssFeed) {
                    console.error("Invalid RSS feed structure.");
                    reject(new Error("Invalid RSS feed structure."));
                    return;
                }
                // Add the new item to the channel's items array
                rssFeed.channel[0].item.push(newItem);
                // Convert the modified JSON back to XML
                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);
                // Write the updated XML to the feed file
                fs.writeFile(feedPath, xml, (err) => {
                    if (err) {
                        console.error("Error writing updated RSS feed:", err);
                        reject(err);
                    }
                    else {
                        console.log("Item added to RSS feed successfully.");
                        resolve('ok');
                    }
                });
            });
        });
    });
}
