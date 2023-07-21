// variables
let randomNumber = 0; //choose a random number when rolling athe dice
let roundScore = 0;
let activePlayer = 0;
let scores = [0, 0];

//Get buttons by using the querySelector to select the id in html
// Get new game button
const newGame = document.querySelector("#new-game");
// Get roll button
const roll = document.querySelector("#roll");
// Get hold button
const hold = document.querySelector("#hold");

// Get the dice element
const dice = document.querySelector("#dice");

// function to Roll the dice and display the round score
const rollDice = function () {
    // Create a random number
    randomNumber = Math.floor(Math.random() * 6) + 1;
  
    // Display dice
    dice.innerHTML = `<img class="dice" src="./images/dice/dice-${randomNumber}.png" alt="dice ${randomNumber}">`;
  
    // Round score
    if (randomNumber !== 1) {
      roundScore += randomNumber;
      // Display round score
      document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
      switchPlayer();
    }
  };

  // Switch player
const switchPlayer = function () {
    roundScore = 0;
    document.querySelector(`#current-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("active-player");
    player1.classList.toggle("active-player");
  };

  // Hol the score
const holdScore = function () {
    // add current score
    scores[activePlayer] += roundScore;
    // display score
   document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
  
    // check player score
    if (scores[activePlayer] >= 100) {
      document.querySelector(`.name-${activePlayer}`).classList.add("winner-player");
      document.querySelector(`.name-${activePlayer}`).innerHTML = `<p>winner !</p>`;
  
    } else {
      // Change player
      switchPlayer();
    }
  };
  
  // New game
  const replay = function () {
    document.location.reload();
  };
  
  // Listen for click events
  roll.addEventListener("click", rollDice, false);
  hold.addEventListener("click", holdScore, false);
  newGame.addEventListener("click", replay, false);