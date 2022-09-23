"use strict";

const Personnel = require("../models/personnel.model");

exports.findAll = function (req, res) {
  Personnel.findAll(function (err, personnel) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", personnel);
    res.send(personnel);
  });
};

exports.create = function (req, res) {
  // const new_personnel = new Personnel(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    console.log(res.body);
    Personnel.create(req.body, function (err, personnel) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "personnel added successfully!",
        data: personnel,
      });
    });
  }
};

exports.findById = function (req, res) {
  Personnel.findById(req.params.id, function (err, personnel) {
    if (err) res.send(err);
    res.json(personnel[0]);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Personnel.update(
      req.params.id,
      new Personnel(req.body),
      function (err, personnel) {
        if (err) res.send(err);
        res.json({ error: false, message: "personnel successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
  Personnel.delete(req.params.id, function (err, personnel) {
    if (err) res.send(err);
    res.json({ error: false, message: "personnel successfully deleted" });
  });
};

exports.addInterpometrie = function (req, res) {
  Interpometrie.create(req.body, req.id, () => {
    if (err) res.send(err);
    res.json({ error: false, message: "added successfully" });
  });
};
