/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/******************************************************
 Lecture 48 - First DOM Access and Manipulation
    
 We will Learn:
 - How to create our fundamental game variables 
 - How to generate a random number 
 - How to manipulate the DOM
 - How to read the DOM
 - How to change css styles
 
*/

// important variables

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random()*6) + 1;
// console.log(dice);

//call the document object. add queryselctor method with the ID and type cohersion then .textContent change the PLAIN TEXT to the value of dice
// document.querySelector('#current-' + activePlayer).textContent = dice;

// Do the same but with the innerHTML method whih need to have a string of HTML passed through it
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; // open and close html elements with the dice var inside so that would render <em>6</em>

// We are happy to use plainText as it will have the style of the div.
document.querySelector('#current-' + activePlayer).textContent = dice;

// this bit of code reads the DOM and stores the text content value of the query selected the DIV with the ID of Score-0 and stored it in x. the log x
var x = document.querySelector('#score-0').textContent;
console.log(x);

// Here we are selcting the img with the class dice, then changing the css using the style method.property you want to change = 'new value in a string'
document.querySelector('.dice').style.display = 'none';