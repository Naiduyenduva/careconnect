const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    phoneNumber: Number,
    location: String,
    treatment: String
});

const userModel = mongoose.model("user",userSchema);

module.exports = {
    userModel
}