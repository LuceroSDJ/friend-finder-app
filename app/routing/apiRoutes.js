// Initialize a variable as a data source holding the array of friends on friends.js
var friends = require("../data/friends");  

// Routing
module.exports = function(app) {

    // Add GET route with url /api/friends. This will be used to display JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friends);  // I am not getting my response as expected 
    });

    // Add POST routes /api/friends to handle incoming survey results.
    // This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        res.json(friends);  // I am not getting my response as expected 
    });
};