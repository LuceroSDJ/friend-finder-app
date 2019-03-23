// Initialize a variable as a data source holding the array of friends on friends.js
var friendsList = require("../app/data/friends");  

// Routing
module.exports = function(app) {
    // Add GET route with url /api/friends. This will be used to display JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friendsList);  // I am not getting my response as expected 
    });
};