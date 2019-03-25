// ================= Require/import Dependencies =============
var express = require("express");
//var path = require("path"); 

/* ================= NOTES ============================
    In order to implement Express as the HTTP server for this node.js app,
    we must create an instance of Express and begin listening on a port (add app.listen(port) at the end of this file)
*/
// Set up the Express App & create the required instance of Express to act as the HTTP server for this application.
var app = express();
// Define localhost PORT we want to listen to
var PORT = process.env.PORT || 3000;

//Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*  ====== test ==============
app.get('/', function (req, res) {
    res.send('Hello from Express!') 
}) ============================ */
app.use(express.static('app/public/assets')); //static assets 
// routes
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

/* ============ NOTES ===================
    'The app.listen(port) call binds the underlying HTTP connection 
    to the port and begins listening on it. */

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);  //app listening ✓
});