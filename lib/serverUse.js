exports.on = function(app) {
  let express = require('express');
  let bodyParser = require("body-parser");
  let path = require('path');
  let preWebPath = path.join(__dirname, '../client');
  // 中間件來處理請求並印出 headers
  app.use((req, res, next) => {
    console.log(req.headers); // 印出所有的請求頭
    next(); // 繼續執行其他中間件或路由處理
  });
  app.use('/resource', express.static(path.join(__dirname, '../client/resource')))
  app.use('/scripts', express.static(path.join(__dirname, '../client/scripts')))
  app.use('/stylesheets', express.static(path.join(__dirname, '../client/stylesheets')))
  app.use('/mergeImage', express.static(path.join(__dirname, '../client/mergeImage')))
  app.use('/mergeImageResult', express.static(path.join(__dirname, '../client/mergeImageResult')))
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(bodyParser.raw());
}
