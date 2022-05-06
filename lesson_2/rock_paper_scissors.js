const rlSync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}

// rock > scissors, lizard
// paper > rock, spock
// scissors > paper, lizard
// lizard > paper, spock
// spock > rock, scissors

function displayWinner(userChoice, compChoice) {
  if ((userChoice === 'rock' && (compChoice === 'scissors' || compChoice === 'lizard')) ||
    (userChoice === 'paper' && (compChoice === 'rock' || compChoice === 'spock')) ||
    (userChoice === 'scissors' && (compChoice === 'paper' || compChoice === 'spock')) ||
    (userChoice === 'lizard' && (compChoice === 'paper' || compChoice === 'spock')) ||
    (userChoice === 'spock' && (compChoice === 'rock' || compChoice === 'scissors'))) {
    prompt('You win!');
  } else if ((userChoice === 'rock' && (compChoice === 'paper' || compChoice === 'spock')) ||
    (userChoice === 'paper' && (compChoice === 'scissors' || compChoice === 'lizard')) ||
    (userChoice === 'scissors' && (compChoice === 'rock' || compChoice === 'spock')) ||
    (userChoice === 'lizard' && (compChoice === 'rock' || compChoice === 'scissors')) ||
    (userChoice === 'spock' && (compChoice === 'paper' || compChoice === 'lizard'))) {
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