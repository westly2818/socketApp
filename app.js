const express = require('express');
const app = express();
const http = require('http');
var route = require('./routes/datafetch');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(cors({
    origin: true
}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', route)

module.exports = app; // Export the app module
