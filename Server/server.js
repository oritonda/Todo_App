//Imports
const express = require("express");
const route = require("./routes/route.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/route", route);

//Connecting to the database
mongoose.connect("mongodb://localhost/TodoDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection
  .once("open", () => {
    console.log("Connected to database");
  })
  .on("error", (error) => {
    console.log("Error: ", error);
  });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
