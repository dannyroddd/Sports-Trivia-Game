# Sports Trivia Game 

### Technologies used
1. HTML
2. CSS
3. JavaScript
4. jQuery
5. Contentful API - Headless CMS

### Features
1. Connects to a Headless CMS in using Contentful API to retrieve data from 30 Random Sports Trivia Questions I came up with.
2. Two people can get together and answer sports trivia questions and receive points
3. The game ends and resets when one player reaches 15 points and the winner message pops up.
4. The reset button automatically resets all points and restarts the game at Player One's turn

## What was researched for use
1. How to use trim for white spaces in the API data = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

2. How to use CSS media queries = https://www.w3schools.com/css/css_rwd_mediaqueries.asp

3. Contentful API = https://cdn.contentful.com/spaces/0pgg3owegtt8/environments/master/entries?access_token=nU633R4z0XlML3L6u_6hLTxBQq11TVtEi_i2K_98EAo&content_type=sportsTriviaQuestions

## How it was made
1. Used Contentful API to create my question data as well as ajax to retrieve the questions used for the game.
2. Began with HTML boiler plate and created each game element.
3. Created the object for the game state with two players, questions, and answers.
4. Began the JavaScript game logic using jQuery and created variables for each DOM element
5. Created a function to set and reset the game board according to the current state of the game.
6. Created a turns system and allowed two players to alternate turns and earn points after each question is click and answered using a answer checking function and if statements.
7. Created functions to reset the game board and allow messages to pop up and let players know who's turn it is.
8. Began CSS styling using flex box features to try to cater to mobile devices and smaller screens.
9. Used CSS media queries to change styling for certain device screen sizes.

## Unsolved Problems
1. Would like to make the CSS more presentable for each and every mobile device screen size. As of now the website catered to most devices but certain screen sizes still have CSS issues. 
2. Would like to add a lot more questions as game tends to retrieve the same random question two times in a row sometimes. 


## Stretch Goals 
1. Would like to give the CSS more animations such as hovering questions and fading to the next question as well as give the game logic a timer for each question.
2. Would like to make it so the game has a home page, game page, and winning results page instead of everything happening on the same page. 