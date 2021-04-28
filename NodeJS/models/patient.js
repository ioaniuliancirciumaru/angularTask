const mongoose = require('mongoose');

var Patient = mongoose.model("Patient", {
    firstName: {type: String},
    lastName: {type: String},
    dateOfBirth: {type: Date},
    gender: {type: String},
});

module.exports = {Patient};
