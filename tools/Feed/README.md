# Simple XML Server with Cron Job

This Node.js application creates a basic HTTP server that serves an XML file and runs a cron job every 5 minutes. It uses the `http`, `fs.promises`, and `path` modules for serving XML data and the `node-cron` package for scheduling tasks.

## Prerequisites

Before running this application, ensure you have Node.js installed on your system.

## Installation

1. Clone or download the repository to your local machine.

2. Open your terminal and navigate to the project directory.

3. Install the required dependencies by running:

   ```bash
   npm install
   ```

## Usage

1. To start the server, run the following command in your terminal:

   ```bash
   node server.js
   ```

   The server will start and listen on port 8910.

2. Access the XML feed by opening a web browser or making an HTTP GET request to `http://localhost:8910/`.

3. The cron job is scheduled to run every 5 minutes, and you will see the message "Cron job executed every 5 minutes." logged in the terminal each time it runs.

## Configuration

You can modify the following aspects of the application to suit your needs:

- **XML File**: Replace the content of the `my_feed.xml` file in the `data` folder with your desired XML data.

- **Cron Schedule**: If you want to change the cron schedule, update the `cron.schedule` function call to your preferred schedule using [cron syntax](https://crontab.guru/).

- **Port**: If you want to use a different port, change the `PORT` constant value in the `server.js` file.

## License

This project is licensed under the MIT License. Feel free to modify and use it according to your requirements.


If you have any questions or need further assistance, please feel free to reach out.

Enjoy using this simple XML server with a cron job!
