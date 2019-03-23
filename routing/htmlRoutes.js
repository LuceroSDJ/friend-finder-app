// Require dependencies
// path package sets the correct file path for html files
var express = require("express");  //test line
var path = require('path');

// Set up the Express App
var app = express();


// ====== ROUTES ===========
module.export = function(app) {
  // Include a GET Route to /survey which should display the survey page.
  app.get('/survey', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/survey.html'));
  });
  
  // Add a default, catch-all route that leads to home.html which displays the home page.
  // app.get('/', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../public/home.html'));
  // });
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

};