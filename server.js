const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Require personnel  routes
const personnelRoutes = require("./src/routes/personnel.routes");
const uniteRoutes = require("./src/routes/unite.routes");
const testsportRoutes = require("./src/routes/testSport.routes");

// using as middleware
app.use("/api/v1/personnel", personnelRoutes);
app.use("/api/v1/unite", uniteRoutes);
app.use("/api/v1/testsport", testsportRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
