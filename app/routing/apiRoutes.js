// Initialize a variable as a data source holding the array of friends on friends.js
var friendsData = require("../data/friends");  

// Routing
module.exports = function(app) {

    // Add GET route with url /api/friends. This will be used to display JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);  // I had to changed home route in order for this api route to work
    });
/*  ================== POST Instructions ==============================
    Add POST routes /api/friends to handle incoming survey results.
    This route will also be used to handle the compatibility logic.
    =================================================================== */
    app.post("/api/friends", function(req, res) {
        //res.json(friendsData); 

        // access user's input values like a regular object with dot notation 
        var userInput = req.body;
        console.log("user's answers (req.body) = " + userInput);   // terminal => user's answers (req.body) = [object Object]
        var inputScores = userInput.Scores;
        console.log(inputScores);   //terminal => [ '1', '1', '1', '1', '1', '1', '1', '1', '1', '1' ] (test)
        var userName = userInput.Name;  
        console.log(userName);    // works as expected


        // =========== Test user input scores total =====================
        var differences = []; // I want to store all differences to later find the min
        var closestScore = 0; 
        var bestFriend;

        var userInputScoresTotal = eval(inputScores.join('+'));
        console.log(
            "userInputScoresTotal: " + userInputScoresTotal// example: should output 10
          );
        // =========== Test default friends scores total ================
        // here I am looping through the friends array and console logging their total score
        
        for(var i = 0; i < friendsData.length; i++) {
            var defaultFriendScores = eval(friendsData[i].Scores.join('+'))
            console.log("total score: " + defaultFriendScores);
            //return the absolute value of a number abs()method
            var subtraction = Math.abs(userInputScoresTotal - defaultFriendScores);
            console.log("difference compared to user's input: " + subtraction);
            // Now, I want to push the subtraction to differences empty array
            differences.push(subtraction);
            console.log("array of differences: " + differences);  //the array
            closestScore = Math.min.apply(null, differences); 
                console.log("smallest difference: " + closestScore);
            if(subtraction === closestScore) {
                console.log(friendsData[i].Name);
                bestFriend = friendsData[i].Name;
            };
        };  

            
        // Then, find the minimum value
        // notes: The built-in functions Math.max() and Math.min() find the maximum and minimum value
        //var closestScore = Math.min(differences);  //note: These functions will not work as-is with arrays of numbers :'(
            //console.log(closestScore);  //NaN

            /*
            var closestScore = Math.min.apply(null, differences); 
            console.log(closestScore);

            for(var i = 0; i < friendsData.length; i++) {
                if(subtraction === closestScore) {
                    console.log(friendsData[i].Name);
                }
            }
            */

        // now maybe I can loop through friends array difference and match it with closestScore






    /* compare the difference between current user's scores against those from other users, 
    question by question. Add up the differences to calculate the totalDifference. 
            Example:
            User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
            User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
            Total Difference: 2 + 1 + 2 = 5
    */

        
        // loop through friends array
        //for(var i = 0; i < friendsData.length; i++) {
            // find total score of user's input scores
            // while looping through friends array, find the total amount of default friends
            // then, compare the differences and figure out how to find the closest to user's input
        
            // ??? or what if I find the sum of each friend list scores, push the total into a new array
            //then, loop through the new array while findng the difference between default friends and 
            //new friend and push the dirrefences to a new array. Then, find the min number of the final array
        //}



        // push the users input to friends array
        if (friendsData) {
            friendsData.push(userInput);  //req.body = user's input values
            //res.json(true);
        };

        console.log("best friend: " + bestFriend);
        res.json(bestFriend);
    });
};