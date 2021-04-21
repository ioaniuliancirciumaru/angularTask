const mongoose = require('mongoose');

var Patient = mongoose.model("Patient", {
    firstName: {type: String},
    lastName: {type: String},
    dateOfBirth: {type: Number},
    gender: {type: String},
});

module.exports = {Patient};
