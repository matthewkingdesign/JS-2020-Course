/******************************************************
 Lecture 53 - Finishing Touches: State Variables
    YOUR 3 CHALLENGES
    Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
// 1. Added lastDice var into global scope
// declared lastDice in the roll function
// used boolean operators to check if dice and lastDice were === 6 then, do some stuff


// important variables in the Global Scope
var scores, roundScore, activePlayer, gamePlaying, lastDice;

// initiate the game.
init();

// This is an Anonymous function function has no name and is only withing the addEventListner function.
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        // 1. Random number 
        var dice1 = Math.floor(Math.random()*6) + 1;
        var dice2 = Math.floor(Math.random()*6) + 1;
        // 2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice1 !== 1 && dice2 !== 1){
            // Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent= roundScore;
        } else {
            // Next player
            nextPlayer();
        }

        // if (dice === 6 && lastDice === 6) {
        //     // Player looses all their points
        //     scores[activePlayer] = 0;
        //     // Update the UI
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     nextPlayer();

        // } else if (dice !== 1){
        //     // Add score
        //     roundScore += dice;
        //     document.querySelector('#current-' + activePlayer).textContent= roundScore;
        // } else {
        //     // Next player
        //     nextPlayer();
        // }

        // lastDice = dice;
        // console.log(lastDice);
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying){
         // Add current score to global score
        // Below is the same as scores[activePlayer] = scores[activePlayer] + roundScore but we use the += operator
        scores[activePlayer] += roundScore;
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Read input from input on page and use this for the final score
        var input = document.querySelector('.final-score').value;
        console.log(input);
        var winningScore
        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if (input){
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if the player won the game
        if (scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
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
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

// no parenthesis on the init function. If they had them it would call straight away
document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    // Here we are selcting the img with the class dice, then changing the css using the style method.property you want to change = 'new value in a string'
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
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

