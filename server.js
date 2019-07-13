// ================= Require/import Dependencies =============
var express = require("express");
var path = require("path"); 
require("dotenv").config();

/* ================= NOTES ============================
    In order to implement Express as the HTTP server for this node.js app,
    we must create an instance of Express and begin listening on a port (add app.listen(port) at the end of this file)
*/
// Set up the Express App & create the required instance of Express to act as the HTTP server for this application.
var app = express();
// Define localhost PORT we want to listen to
var PORT = process.env.PORT || 3000;

//Set up the Express app to handle data parsing
//Bind application-level middleware to an instance of the app object by using the app.use() [expressjs.com]
/* express.urlencoded([options]) parses incoming requests with urlencoded payloads and is based on body-parser.
A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body),
or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.
This object will contain key-value pairs, 
where the value can be a string or array (when extended is false), 
or any type (when extended is true).
URL Encoding is used when placing text in a query string to avoid it being confused with the URL itself.
*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // It parses incoming requests with JSON payloads and is based on body-parser

/*  ====== test ==============
app.get('/', function (req, res) {
    res.send('Hello from Express!') 
}) ============================ */
app.use(express.static('app/public/assets')); //static assets directory
// routes
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

/* ============ NOTES ===================
    'The app.listen(port) call binds the underlying HTTP connection 
    to the port and begins listening on it. */

app.listen(process.env.PORT || 3000, function() {
    console.log("App listening on PORT: " + PORT);  //app listening ✓
});