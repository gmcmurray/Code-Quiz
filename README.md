# Code-Quiz
Timed Quiz Program

# Working Files
HTML,CSS Files: https://github.com/gmcmurray/Code-Quiz

Deployed Application: https://gmcmurray.github.io/Code-Quiz/


## Description 

Timed Quiz application which sequences through a
series of questions with four guess options.  User clicks a guess and next question is loaded.
If the guess is incorrect then countdown clock is reduced by 10 seconds.  Game ends when either clock reaches 0 seconds or run out of questions.
Score is the remaining time left on the countdown
clock.  User enters initials to update score history and if a best score is achieved then a variable in localStorage is updated.  

User can retrieve high score at any time by clicking on text in top left of header.  Retrieving high score in top left of header will retrieve a high score if the user initials are found in localStorage or prompt user (first time player?) to finish the game and register initials and score. Countdown clock is displayed in
top left of header.


## Skills and Coding Features
JavaScript was used to create this dynamic web application.  Timer function was implemented to control the start and end of game (js code found
in countdown.js).  Elements were created, removed, appended using Java Script.  Other methods in the DOM object were used to control events.  Event listeners were used to capture user activity and the question refresh
activity used the bubbling up feature of click
events.  Bubbling up of a click event of one of the four radio guess buttons was captured at the
parent element and helped manage the flow of the
timed quiz.  LocalStorage feature was used to store the high scores of a user. High Score storage of multiple users are a feature and distinguished by unique initials.  

## Screen Shots
Screen shots with width of 550 pixels below.

![550 pixel width screen shot of Portfolio.](./assests/Images/Code-Quiz-Page1-550px.png)

Page 1 - Start Page

![550 pixel width screen shot of Portfolio.](./assests/Images/Code-Quiz-Page2-550px.png)

Page 2 - Quiz Page

![550 pixel width screen shot of Portfolio.](./assests/images/Code-Quiz-Page3-550px.png)

Page 3 - End Page

![550 pixel width screen shot of Portfolio.](./assests/images/Code-Quiz-HighScoreRetrieve-550px.png)

High Score Retrieval




