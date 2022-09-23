"use strict";
var dbConn = require("../../config/db.config");

exports.findAll = (result) => {
  dbConn.query("Select * from qualification", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Personnel : ", res);
      result(null, res);
    }
  });
};

exports.findById = (id, result) => {
  dbConn.query(
    "Select * from qualification where id = ?",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Personnel : ", res);
        result(null, res);
      }
    }
  );
};
exports.create = (newInter, result) => {
  dbConn.query(
    "INSERT INTO sport_db.qualification set ?",
    newInter,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    }
  );
};
