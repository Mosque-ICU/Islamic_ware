const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  development: {
    client: "mysql2",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
};

// module.exports = {
//   development: {
//     client: "pg",
//     connection: {
//       host: "127.0.0.1",
//       user: "postgres",
//       password: "pass",
//       database: "trello",
//       charset: "utf8",
//     },
//     migrations: {
//       directory: __dirname + "/migrations",
//     },
//     seeds: {
//       directory: __dirname + "/seeds",
//     },
//   },
// };
