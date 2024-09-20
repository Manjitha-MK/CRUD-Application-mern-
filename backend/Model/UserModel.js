const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Use mongoose.Schema instead of SchemaType

const userSchema = new Schema({
    name: {
        type: String, // dataType
        required: true, // validation
    },
    gmail: {
        type: String, // dataType
        required: true, // validation
    },
    age: {
        type: Number, // dataType
        required: true, // validation
    },
    address: {
        type: String, // dataType
        required: true, // validation
    }
});

module.exports = mongoose.model(
    "User", // Model name
    userSchema // Schema
);
