# Welcome to Rock.Paper.Scissors!

A colourful and retro take on the classic game; rock, paper, scissors. This is for anyone looking to pass a small bit of time, whether on the commute to work, taking a small break from their daily do-to-do, or just fancy a challenge against the computer! This is the game to play. 

## Users
This game was made for anyone and everyone of all ages. 
Users will learn to play this classic game whilst challenge them to rely on their instincts and decision making skills to play against the computer. The end result is to simply have fun. 

(Device screen images here) 

![device screen image](assets/images/device.screens.png)

![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

## Features

### Existing features;

* Header;

Featured at the top of the page, the header displays the title of the game in big and bold text to give emphasis on the name, as well as making it clear to the user what they are playing. 
(Image of header here)

* Game area;
In the centre of the page, the game area is where the action takes place! It is divided into two sectionss; one for Player 1 (the user) and the other for the Computer. In each section there is a title, an icon and a score bar;
The title defines the player section and visually indicates to the user the section they’ll be playing in and the section the Computer will be playing. 

(Image of game section here) 

The icon displays an image of what the player and computer select simultaneously  (rock, paper or scissors)
The score bar shows the score of each player. The first score bar to fill up will win the game! This is done with bright contrasting colours to make it fun and engaging for the user. 

* Select area;
This is at the bottom of the page and is the main area where the user will physically interact with the game. The title at the top of this section prompts the user to select their “weapon” of choice. Depending on what the user wants to play, the user can click ‘R’ for rock, ‘P’ for paper or ’S’ for scissors. The buttons are meant to be simple, fun and engaging for the user. 

* Alert window
The alert window pops up after either player 1 or the Computer wins the game. If Player 1 wins the game, the alert Windows will congratulate the user and prompt them to play again. If the Computer wins, the alert window will encourage the user to ‘Try Again’.

* Game refresh
After the user has clicked ‘ok’ in the alert window the game will reset, the score bars will revert back to being empty ready for the user to play again!

* Fav icon
This is for desktop users. The fav icon will allow the user to easily find the game easily and effectively.


##Technologies used:
* HTML
* CSS 
* JAVASCRIPT

## Testing
* I tested the game works on the following browsers: Chrome and Safri
* I confirmed the score bar works correctly every time time a round is won. 
* I confirmed this project is responsive, looks good and functions on all screen sizes using the devtools device toolbar 
* I confirmed the colours, icons and fonts chosen are easy to read and accessible by running it through lightest in dev tools

(Image of lighthouse results) 

## Bugs
* During testing, I discovered that when the game was displayed on smaller screen devices, and after the user clicking on a button in the section area, the background image in the player icon would revert back to its original size making it unclear to see the image inside it’s container. I fixed this by targeting the background size in my script.js file. 

* I discovered that on mobile devices, the alert window did not pop up when the score bar reached its limit/filled up. I fixed this by adding a detect screen size function in my script.js file.

* During development, I discovered the timing of the alert pop up window was off (it was popping up before the scoreboard had reached its max). I fixed this by adding the setTimeout function in my script.js file.

* When deployed, I discovered the icon images were disappearing after the user’s first click, I fixed this by XXXX

## Bugs unfixed 

No unfixed bugs 

## Validator testing;

* HTML; No errors were returned when passing the code through the official W3C validator.
* CSS: No errors were found when passing through the official (Jigsaw) validator.
* JAVASCRIPT: No errors were found when passing through the JSHint JavaScript validator. 
* Accessibility; I confirmed that the colours and fonts selected are easy to read and accessibly by running it through lighthouse in devtools.

## Deployment

* The website was deployed to GitHub Pages using the following steps;
    * In the Github repository, navigate to the Setting Tab 
    *From the source section drop-down menu, select ‘Main’
    *Once the Master Branch has been selected, refresh the page and the page provided the link the completed website 
    *The link to the live site is here - https://esteph27.github.io/rock-paper-scissors/

## Credits

###C ontents;

* The code for detecting mobile screens is from JavaScript Plain English (https://javascript.plainenglish.io/)
Jquery elements inspired from jquery.com

### Media;
* The photos used in this site were obtained from vecteezy.com


![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)


