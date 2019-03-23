// Require dependencies
var express = require("express");
var path = require("path");

// Set up the Express App & create an instance of express to act as the HTTP server for this application.
var app = express();
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ====== test =======
app.get('/', function (req, res) {
    res.send('Hello World')   //✓
})


    // Include a GET Route to /survey which should display the survey page.
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
})

// router 
    //require("./app/routing/apiRoutes.js")(app);
//require("./app/routing/htmlRoutes.js");
//var survey = require("./app/routing/htmlRoutes")(app);
//require(path.join(__dirname, './routing/htmlRoutes'))(app);
// ====== ERROR ========
//' CANNOT FIND MODULE'/'REQUIRE IS NOT A FUNCITON' : try creating a variable = require() => gave me another error
    //var friends = require("./app/data/friends.js");   //checar esta line ?


// listener 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);  //app listening ✓
});