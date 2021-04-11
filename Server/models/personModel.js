const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and model

const TodoSchema = new Schema({
  activity: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

const TodoModel = mongoose.model("TodoModel", TodoSchema);

module.exports = TodoModel;
