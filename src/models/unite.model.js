"use strict";
var dbConn = require("../../config/db.config");

//Personnel object create
var Unite = function (personnel) {
  this.unite = unite.unite;
};

Unite.findAll = function (result) {
  dbConn.query("SELECT  * FROM sport_db.unite", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("unite : ", res);
      result(null, res);
    }
  });
};

module.exports = Unite;
