const rlSync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Format responses
function prompt(message) {
  console.log(`=> ${message}`);
}

// Determine if user wins
function userWin(user, comp) {
  return ((user === 'rock' && (comp === 'scissors' || comp === 'lizard')) ||
    (user === 'paper' && (comp === 'rock' || comp === 'spock')) ||
    (user === 'scissors' && (comp === 'paper' || comp === 'spock')) ||
    (user === 'lizard' && (comp === 'paper' || comp === 'spock')) ||
    (user === 'spock' && (comp === 'rock' || comp === 'scissors')));
}

// Determine if computer wins
function compWin(user, comp) {
  return ((user === 'rock' && (comp === 'paper' || comp === 'spock')) ||
    (user === 'paper' && (comp === 'scissors' || comp === 'lizard')) ||
    (user === 'scissors' && (comp === 'rock' || comp === 'spock')) ||
    (user === 'lizard' && (comp === 'rock' || comp === 'scissors')) ||
    (user === 'spock' && (comp === 'paper' || comp === 'lizard')));
}

// Display the winner
function displayWinner(userChoice, compChoice) {
  if (userWin(userChoice, compChoice)) {
    prompt('You win!');
  } else if (compWin(userChoice, compChoice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

// Begin game loop
while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = rlSync.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice!");
    choice = rlSync.question();
  }

  // Calculate computers choice
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

  if (answer[0] !== 'y') {
    prompt('Goodbye!');
    break;
  }
}