/* =========== NOTES =====================
    Routes must be defined before the server can begin accepting requests.
    The route describes how to handle the path portion of the URL in the HTTP request to the Express server. 
    First part of defining the route: HTTP request method (ex. GET or POST)
    Second part: the path specified in the URL (ex. '/' for the root of the website). (Node.js; Dayley-Second Edition)
*/

// =========== Require/import Dependencies ===============
// path package sets the correct file path for html files
    //var express = require("express");  //test line
var path = require('path');
//var express = require("express");
// Set up the Express App
//var app = express();


// ====== ROUTES ===========
// syntax: app.<method>(path,[middleware or callback], callback)
// Middleware parameter are 0 or more middleware functions applied before executing the callback function.

module.exports = function(app) {
  // Include a GET Route to /survey which should display the survey page.
  app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  // Add a default, catch-all route that leads to home.html which displays the home page.
  // app.get('/', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../public/home.html'));
  // });
  
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  }); 

};