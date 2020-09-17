'use strict'
// Set up MySQL connection.
var mysql = require("mysql");
const util = require('util');

//JawsDB
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
var connection = mysql.createConnection({
  host: "	nwhazdrp7hdpd4a4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "kabiqnungh43mors",
  password: "hc5mudnhz9xehqg3",
  database: "	bl7noh8gkl8dt0xo"
});
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection ORM
module.exports = connection;
