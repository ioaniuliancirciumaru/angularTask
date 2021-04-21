const express = require('express')
const bodyParser = require('body-parser')

const { mongoose } = require('./db.js');
const {MongoClient} = require('./db.js')
var patientController = require('./controllers/patientController.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log("Server started at port: 3000"));

app.use('/patients', patientController);

