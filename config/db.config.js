"user strict";

const mysql = require("mysql");

//local mysql db connection
const dbConn = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "",
  database: "node_mysql_crud_db",
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
