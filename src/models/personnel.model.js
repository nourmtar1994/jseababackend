"use strict";
var dbConn = require("../../config/db.config");

//Personnel object create

exports.findAll = function (result) {
  dbConn.query("Select * from employees", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Personnel : ", res);
      result(null, res);
    }
  });
};

exports.create = function (newPers, result) {
  dbConn.query("INSERT INTO vw_personnel set ?", newPers, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

exports.findById = function (id, result) {
  dbConn.query(
    "Select * from vw_personnel where CIN = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

exports.update = function (id, personnel, result) {
  dbConn.query(
    "UPDATE sport_test SET cin=?,modele8=?,note_bomb=?,note_updos=?,note_course=?  WHERE id = ?",
    [
      personnel.first_name,
      personnel.last_name,
      personnel.email,
      personnel.phone,
      personnel.organization,
      personnel.designation,
      personnel.salary,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
exports.delete = function (id, result) {
  dbConn.query(
    "DELETE FROM sport_test WHERE id = ?",
    [id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
