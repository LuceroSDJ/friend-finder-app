# friend-finder-app
Friend Finder is a compatibility-based full-stack site. It simulates a dating app.

```
This app uses the popular Express; "a lightweight module that wraps the functionality of 
the Node.js http module in a simple to use interface."
In addition, Express make it easier for us to design server routes and handle responses.
```

## GOAL
Friend Finder's goal is to match you up with other users based on your answers to selected questions.  The app will take in results from your survey, then compare your answers with those from other users. As a result,the name and picture of the user with the best overall match will be displayed.

### `friend-finder-app` HAS BEEN LINKED TO MY PORTFOLIO
* [Please visit my porfolio page](https://lucerosdj.github.io/Portfolio/)

### TECHNOLOGIES
* node.js
* Express
* JavaScript
* BOOTSTRAP
* HTML

### MODULES
* Express
* dotenv

### ORGANIZED FILES AND DIRECTORIES
 ```
  friend-finder-app
    - .gitignore
    - app
      - data
        - friends.js
      - public 
        - home.html
        - survey.html
        - assets
            - images
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

### FUNCTIONALITY
#### 1. `Identify yourself & complete the Survey.`
* You will be `required` to provide your name and a link to your portrait picture. 
    `MODIFICATION: choose a gender from the drop down menu instead of providing a link.`
* If any of these two questions is left blank or you add unauthorized characters, an alert message will remind you to provide an answer.
    `only alphanumeric characters and spaces will be accepted`
* When you are ready to find your new best friend, click on the button below. It will present the survey in a modal.
* Your survey has 10 questions with a scale of 1 to 5 based on how much you agree or disagree with a question.
![identifyYourself](https://user-images.githubusercontent.com/44692872/55022621-f12fb580-4fc8-11e9-9d27-fec0f77f1f42.png)
![surveyQuestionsNroute](https://user-images.githubusercontent.com/44692872/55025224-8b462c80-4fce-11e9-96bc-9a352e950079.png)

#### 2. `Meet your new best friend!`
* Once you submit your answers, you will be added to the existing list of friends. Therefore, other users will be able to find you.
* Then, your answers are compared with other users' answers.
* Congratulations! Your most compatible friend's name and picture will be displayed in a modal.
![addedToListOfFriends](https://user-images.githubusercontent.com/44692872/55024412-ca737e00-4fcc-11e9-97e6-6fa19b9e654e.png)
![meetYourFriend](https://user-images.githubusercontent.com/44692872/55024489-f7279580-4fcc-11e9-9c2e-f7a264e57ab0.png)
![friendsArray](https://user-images.githubusercontent.com/44692872/55025335-bd578e80-4fce-11e9-9c19-15db10d9acb5.png)

### THE MAGIC!
* `server.js` file requires the basic npm packages: express and path.
* `htmlRoutes.js` file includes our GET routes to survey & home.
* `apiRoutes.js` file contains A GET & POST route with the url /api/friends used to display a JSON of all possible friends & handle incoming survey results, respectively.

## DEBUGGING: WORK IN PROGRESS
* I am currently dealing with the following error message:
```
    Cross-Origin Read Blocking (CORB) blocked cross-origin response 
    https://www.pexels.com/photo/[imageRoutePath]/ with MIME type text/html. 
    See https://www.chromestatus.com/feature/5629709824032768 for more details.
```
* Since my app appears to be rejecting the links to pictures (for security), I saved the existing friends' portrait photos in assets/images directories to successfully display your new friend's picture.
* I will try to get rid of CORB error in order for my app to accept the link to your photo. If unable to 
remove the error, I will try to find an alternative way of displaying an image.
* `I have included a directory inside of images directory with screen shots of CORB error message.`
```
    =================== ERROR #1 UPDATE ====================
    For the purpose of deploying to Heroku for a grade, I am implementing an alternative way 
    for users to provide an image prior to completing the survey.
        * I changed the photo link input field to a `select/option type of question`.
        * Users must select a gender: female, male or non-binaty.
        * Each option has a default image assigned to it, which is a gender silhouette portrait.
    When time permits, I will continue working on this app for my personal and professional growth.
```
### `MODIFIED APP IMAGES`
![selectImgRequired](https://user-images.githubusercontent.com/44692872/55043248-599b8880-5003-11e9-9d46-5469bbdf79ae.png)
![luceroNamesilhouette](https://user-images.githubusercontent.com/44692872/55043267-6d46ef00-5003-11e9-9330-5c624cc02390.png)
![luceroObjectPNG](https://user-images.githubusercontent.com/44692872/55043283-7afc7480-5003-11e9-8bcf-f532814a51cc.png)