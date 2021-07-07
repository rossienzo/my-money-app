// bodyParser application
const bodyParser = require('body-parser');

// express application
const express = require('express');
const server = express();

// habilita o cors
const allowCors = require('./cors');

// Application port
const port = 3003;


// Middleware
/*
server.use(function (req, res, next) {
    console.log('Time:', Date());
    next();
});
*/

server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());
server.use(allowCors); // faz uso do cors

server.listen(port, function() {
    console.log(`Backend na porta ${port}`);
});

module.exports = server;