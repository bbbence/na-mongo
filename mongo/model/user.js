const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    bd: Date
});

module.exports = mongoose.model('users', userSchema);