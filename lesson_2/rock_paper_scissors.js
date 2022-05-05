const rlSync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(userChoice, compChoice) {
  if ((userChoice === 'rock' && compChoice === 'scissors') || (userChoice === 'paper' && compChoice === 'rock') || (userChoice === 'scissors' && compChoice === 'paper')) {
    prompt('You win!');
  } else if ((userChoice === 'rock' && compChoice === 'paper') || (userChoice === 'paper' && compChoice === 'scissors') || (userChoice === 'scissors' && compChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = rlSync.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice!");
    choice = rlSync.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = rlSync.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = rlSync.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}