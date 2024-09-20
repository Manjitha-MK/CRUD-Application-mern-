const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Use mongoose.Schema instead of SchemaType

const regiSchema = new Schema({
  name: {
    type: String, // dataType
    required: true, // validation
  },
  gmail: {
    type: String, // dataType
    required: true, // validation
  },
  password: {
    type: String, // dataType
    required: true, // validation
  },
});

module.exports = mongoose.model(
  "Register", // Model name
  regiSchema // Schema
);
