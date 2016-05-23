require('app-module-path').addPath(__dirname + '/lib');
const bodyParser = require('body-parser'),
    expressValidator = require('express-validator');

exports.setup = function (runningApp, callback) {
    runningApp.use(bodyParser.json());
    runningApp.use(expressValidator([]));

    // Nothing ever comes from "x-powered-by", but a security hole
    runningApp.disable("x-powered-by");

    //---- Mounting well-encapsulated application modules (so-called: "mini-apps")
    //---- See: http://expressjs.com/guide/routing.html and http://vimeo.com/56166857
    // runningApp.use('/hello', require('hello')); // attach to sub-route

    // API endpoint attached to root route
    runningApp.use('/api/v1/search/repositories', require('api/search/repository')); // attach to root route


    if (typeof callback === 'function') {
        callback(runningApp);
    }
};
