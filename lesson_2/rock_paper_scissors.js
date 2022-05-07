const rlSync = require('readline-sync');
const VALID_CHOICES = {
  rock: 'r',
  paper: 'p',
  scissors: 's',
  lizard: 'l',
  spock: 'sp'
};

// Format responses
function prompt(message) {
  console.log(`=> ${message}`);
}

// Iterate over valid choices and the abbreviations and
// check that the user input is equal to a valid choice
function validUserChoice(input, obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return (keys.includes(input)) || (values.includes(input));
}

// Set a consistant user choice for game logic comparison
function setUserChoice(input, obj) {
  let result;
  for (const key in obj) {
    if (input === key || input === obj[key]) {
      result = key;
    }
  }

  return result;
}

// Determine if user wins
function userWin(user, comp) {
  return ((user === 'rock' && (comp === 'scissors' || comp === 'lizard')) ||
    (user === 'paper' && (comp === 'rock' || comp === 'spock')) ||
    (user === 'scissors' && (comp === 'paper' || comp === 'scissors')) ||
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
  prompt(`Choose one: ${Object.keys(VALID_CHOICES).join(', ')}`);
  let choice = rlSync.question();

  while (!validUserChoice(choice, VALID_CHOICES)) {
    prompt("That's not a valid choice!");
    choice = rlSync.question();
  }

  choice = setUserChoice(choice, VALID_CHOICES);

  // Calculate a random computer choice
  let randomIndex = Math.floor(Math.random() *
    Object.keys(VALID_CHOICES).length);
  let computerChoice = Object.keys(VALID_CHOICES)[randomIndex];

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