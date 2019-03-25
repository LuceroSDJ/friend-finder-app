// DATA
// This data will hold a list of available friends.
var friends = [
    {
        Name: "Shakira",
        Photo: "images/test.jpeg",      
        // ^======Error: test.jpeg:1 GET http://localhost:3000/assets/images/test.jpeg 404 (Not Found)
        Scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] //need to find the sum
    },
    {
        Name: "Bruno",
        Photo: "images/testImg.jpeg",
        Scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    }
];
// Export the array.
module.exports = friends;