// ================= Require/import Dependencies =============
var express = require("express");
var path = require("path"); 

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

// ====== test ==============
/*
app.get('/', function (req, res) {
    res.send('Hello from Express!')   //✓
})
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/survey.html"));
});  //Not working as expected
*/
// ============================

/*
    // Include a GET Route to /survey which should display the survey page.
app.use('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, 'app/public/survey.html'));
})
*/

// routes
//var htmlRoutes = require("./app/routing/htmlRoutes")(app);
//require("./app/routing/htmlRoutes")(app);


/* After defining routes in htmlroutes.js, load the router module in the app (server.js)
    example: var birds = require('./birds')
    ...
    app.use('/birds', birds)
    var survey = require('app/public/survey.html');
    app.use('app/public/survey.html', survey);
   */


// router (requiered route as demonstrated in class activities)
//require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// ====== ERROR ========
//' CANNOT FIND MODULE'/'REQUIRE IS NOT A FUNCITON' : try creating a variable = require() => gave me another error
    //var friends = require("./app/data/friends.js");   //checar esta line ?

// ====== ERROR ========
// Error: ENOENT: no such file or directory, stat '/Users/shanmugasundarammanickam/Desktop/REPOS/friend-finder-app/app/public/survey.html'

/* ============ NOTES ===================
    'The app.listen(port) call binds the inderlying HTTP connection 
    to the port and begins listening on it. 
*/

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);  //app listening ✓
});