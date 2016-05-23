require('app-module-path').addPath(__dirname + '/lib');

const server = require('nodebootstrap-server'),
    appConfig = require('./appConfig'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
    app = require('express')();

app.use(bodyParser.json());
app.use(expressValidator([]));

server.setup(app, appConfig.setup);
