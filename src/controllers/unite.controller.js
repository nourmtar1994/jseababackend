"use strict";

const Unite = require("../models/unite.model");

exports.findAll = function (req, res) {
  Unite.findAll(function (err, unite) {
    if (err) res.send(err);
    console.log("res", unite);
    res.status(200).json(unite);
  });
};
