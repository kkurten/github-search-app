require('app-module-path').addPath(__dirname + '/lib');

const server = require('nodebootstrap-server'),
    appConfig = require('./appConfig'),
    app = require('express')();

server.setup(app, appConfig.setup);
