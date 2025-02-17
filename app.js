var express = require('express');
var app = express();

var webRouter = require("./lib/web_router");
var serverRestApi = require("./lib/rest_api/server");
var config = require('./lib/config').config;
var serverPort = config.serverPort;
var server = require('http').createServer(app);
var serverUse=require('./lib/serverUse');

serverUse.on(app);
webRouter.on(app);
serverRestApi.on(app);
server.listen(process.env.PORT||serverPort);
console.log("現在使用" + serverPort + "port");
