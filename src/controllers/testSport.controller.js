const testSport = require("../models/testSport.model");

exports.findAll = async (req, res) => {
  await testSport.findAll((err, testSport) => {
    if (err) res.send(err);

    res.send(testSport);
  });
};

exports.findById = async (req, res) => {
  const { id } = req.params;
  await testSport.findById(id, (err, testSport) => {
    if (err) res.send(err);
    res.send(testSport);
  });
};

exports.create = async (req, res) => {
  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    console.log(req.body);

    await testSport.create(req.body, (err, testSport) => {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Note added successfully!",
        data: testSport,
      });
    });
  }
};
