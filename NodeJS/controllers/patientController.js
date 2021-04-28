const express = require('express');
var dateFormat = require('dateformat');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Patient} = require('../models/patient');

// Display all patients

router.get('/', (req, res) => {
    Patient.find((err, docs) => {
        if (!err) {res.send(docs);}
        else {console.log("Error is retrieving Patients: " + JSON.stringify(err, undefined, 2));}
    })
})

// Display patient by id

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    Patient.findById(req.params.id, (err, doc) => {
        if (!err) {res.send(doc);}
        else {console.log("Error in retrieving Patient: " + JSON.stringify(err, undefined, 2));}
    });
});

// Create a patient

router.post('/', (req, res) => {
    var pat = new Patient({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
    });
    // dateFormat(Patient.dateOfBirth, "shortTime");
    pat.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log("Error in adding a patient: " + JSON.stringify(err, undefined, 2)); }
    })
})

// Update a patient

router.put("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    var pat = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
    };
    Patient.findByIdAndUpdate(req.params.id, {$set: pat}, {new: true}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log("Error in adding a patient: " + JSON.stringify(err, undefined, 2)); }
    });
})

// Delete a patient

router.delete("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    Patient.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Patient Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;
