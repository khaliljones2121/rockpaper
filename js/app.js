console.log('i am connected')

// As a user, I want to see clearly labeled buttons for “Rock”, “Paper”, and “Scissors”, on the landing page, so I instantly know my options for game play.
// As a user, I want to be able to click on one of the “Rock”, “Paper”, or “Scissors” buttons, making it easy to select my game move.
// As a user, I want visual feedback after making my selection, so I know my choice has been registered.
// As a user, I want to see the computer’s choice displayed next to mine, so I can compare the two.
// As a user, I want to be presented with a clear message indicating the winner of the game, so that I can immediately understand the outcome.
// As a user, I want the option to play another round, so I can try to improve my record.

/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors'];
/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice;
let msg;
/*------------------------ Cached Element References ------------------------*/

const resultDisplayEl = document.querySelector('#result-display');
/*-------------------------------- Functions --------------------------------*/
const getPlayerChoice = function(event) {
playerChoice = event.target.id;
}
const getComputerChoice = function() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
};

const resetGame = () => {
  playerChoice = null;
  computerChoice = null;
  msg = '';
  resultDisplayEl.textContent = '';
};


const compare = () => {
  if (playerChoice === computerChoice) {
    msg = 'You tied!';
  } else if (playerChoice === choices[0] && computerChoice === choices[2]) {
    msg = 'Congrats! You win!';
  } else if (playerChoice === choices[1] && computerChoice === choices[0]) {
    msg = 'Congrats! You win!';
  } else if (playerChoice === choices[2] && computerChoice === choices[1]) {
    msg = 'Congrats! You win!';
  } else {
    msg = 'You lose! Try again?';
  }
};

const render = () => {
    resultDisplayEl.textContent = `you chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`

}

const play = (event) => {
    getPlayerChoice(event);
    getComputerChoice();
    compare();
    render();
}

// const play = (event) => {
//     console.log(event.target);
// }
/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('#rock').addEventListener('click', play);

document.querySelector('#paper').addEventListener('click', play);

document.querySelector('#scissors').addEventListener('click', play);

document.querySelector('#resetButton').addEventListener('click', resetGame);

// document.querySelectorAll('button').forEach(function (button) {
//     button.addEventListener('click', play);
// });