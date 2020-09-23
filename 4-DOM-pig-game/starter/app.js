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

/******************************************************
 Lecture 49 -  Events and Event Handling: Rolling the Dice
    
 Events: Notifications that are sent to notify the code that something has happened on the webpage 
    - Examples - clicking a button, resizing a window, scrolling down or pressing a key
    - Event listeners are functions that perform an action based on a certain event. They wait for a certain event to happen.
    - Event listeners are functions so they get there own execution stack
    - MOved dice var into click event listner
    
We will learn
    - How to setup an event handler
    - What a callback function is 
    - What an anonymous functio is
    - Another way to select elements by ID
    - How to change the image in an <img> element
 
*/
/******************************************************
 Lecture 50 -  Updating Scores and Changing the Active Player

 What we will learn
    - What the ternary operator is
    - How to add remove and toggle HTML classes

*/

/******************************************************
 Lecture 51 -  Implementing Our 'Hold' Function and the DRY Principle

 What we will learn
    - How to use functions to coreectly apply the DRY (dont repeat yourself) principle 
    - How to think of the game logic like a programmer

*/
/******************************************************
 Lecture 52 - Creating a Game Initialization Function

 What we will learn
    - more of the same
*/
/******************************************************
 Lecture 53 - Finishing Touches: State Variables
 What we will learn
    - State varibles, the state a system is in
    - So is our game being played or not
    - so a variable that is true or false is very handy to allow code to run if it is true. Sinle if statements
*/

/******************************************************
 Lecture 53 - Finishing Touches: State Variables
    YOUR 3 CHALLENGES
    Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


// important variables in the Global Scope
var scores, roundScore, activePlayer, gamePlaying;

// initiate the game.
init();

// This is an Anonymous function function has no name and is only withing the addEventListner function.
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        // 1. Random number 
        var dice = Math.floor(Math.random()*6) + 1;
        // 2. Display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1){
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent= roundScore;
        } else {
            // Next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying){
         // Add current score to global score
        // Below is the same as scores[activePlayer] = scores[activePlayer] + roundScore but we use the += operator
        scores[activePlayer] += roundScore;
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if the player won the game
        if (scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next Player
            nextPlayer();
        }
    }
});
function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

// no parenthesis on the init function. If they had them it would call straight away
document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    // Here we are selcting the img with the class dice, then changing the css using the style method.property you want to change = 'new value in a string'
    document.querySelector('.dice').style.display = 'none';
    // set the scores to 0 with textContent
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player-1';
    document.getElementById('name-1').textContent = 'Player-2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

/******************************************************
RANDOM BITS OF CODE THAT WE ARENT USING BUT ARE EXAMPLES OF WHAT WE CAN DO.
// Class list methods
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.add('active');


// Call the document object. add queryselctor method with the ID and type cohersion then .textContent change the PLAIN TEXT to the value of dice
// document.querySelector('#current-' + activePlayer).textContent = dice;

// Do the same but with the innerHTML method whih need to have a string of HTML passed through it
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; // open and close html elements with the dice var inside so that would render <em>6</em>

// We are happy to use plainText as it will have the style of the div.
// document.querySelector('#current-' + activePlayer).textContent = dice;

// This bit of code reads the DOM and stores the text content value of the query selected the DIV with the ID of Score-0 and stored it in x. the log x
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
// Event handler - Lecture 49

// Call back
// you could declare a function externally at the end of the addEventListner function and it would be a call back. So a function called by another function. Example below
// function btn(){
//     //DO SOMETHING
// }
// document.querySelector('.btn-roll').addEventListener('click', btn);

*/