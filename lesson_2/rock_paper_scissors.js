const rlSync = require('readline-sync');
const VALID_CHOICES = {
  rock: 'r',
  paper: 'p',
  scissors: 's',
  lizard: 'l',
  spock: 'sp'
};
let gameType = null;
let totalPlays = 0;
let totalUserWins = 0;
let totalCompWins = 0;
let totalTies = 0;

// Format responses
function prompt(message) {
  console.log(`=> ${message}`);
}

// Record best of five wins
function incrementBestOfFive(userChoice, compChoice) {
  if (userWin(userChoice, compChoice)) {
    totalUserWins += 1;
  } else if (compWin(userChoice, compChoice)) {
    totalCompWins += 1;
  } else {
    totalTies += 1;
  }

  totalPlays += 1;
}

// Set best of five game
function displayBestOfFiveWinner() {
  console.log('-'.repeat(30));
  prompt(`User wins: ${totalUserWins}`);
  prompt(`Computer wins: ${totalCompWins}`);
  prompt(`Ties: ${totalTies}`);
  console.log('-'.repeat(30));

  if (totalUserWins > totalCompWins) {
    console.log('\tUser Wins!');
  } else if (totalUserWins < totalCompWins) {
    console.log('\tComputer Wins!');
  } else {
    console.log("\tIt's a tie!");
  }

  console.log('-'.repeat(30));
}

function resetBofValues() {
  gameType = null;
  totalCompWins = 0;
  totalUserWins = 0;
  totalTies = 0;
  totalPlays = 0;
}

// Play game again
function playAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = rlSync.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = rlSync.question().toLowerCase();
  }

  return answer;
}

// Iterate over valid choices and the abbreviations and
// check that the user input is equal to a valid choice
function validUserChoice(input, obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return (keys.includes(input)) || (values.includes(input));
}

// Set a consistant user choice for game logic comparison
function standardizeUserChoice(input, obj) {
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
    (user === 'scissors' && (comp === 'paper' || comp === 'lizard')) ||
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

console.clear();

// Begin game loop
while (true) {
  // Ask user what type of game they want to play
  if (![1, 2].includes(gameType)) {
    prompt('What do you want to play?');
    console.log('[1] Classic\n[2] Best of five');
    gameType = Number(rlSync.question());

    while (![1, 2].includes(gameType)) {
      prompt("Invalid option! Please Choose [1] or [2]!");
      gameType = Number(rlSync.question());
    }

    console.clear();
  }

  prompt(`Choose one: ${Object.keys(VALID_CHOICES).join(', ')}`);
  prompt(`\t\t(${Object.values(VALID_CHOICES).join(', ')})`);
  let choice = rlSync.question();

  while (!validUserChoice(choice, VALID_CHOICES)) {
    prompt("That's not a valid choice!");
    choice = rlSync.question();
  }

  choice = standardizeUserChoice(choice, VALID_CHOICES);

  // Calculate a random computer choice
  let randomIndex = Math.floor(Math.random() *
    Object.keys(VALID_CHOICES).length);
  let computerChoice = Object.keys(VALID_CHOICES)[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  // Display winner if classic game or increment best of five counters
  if (gameType === 1) {
    displayWinner(choice, computerChoice);
  } else {
    incrementBestOfFive(choice, computerChoice);
    displayWinner(choice, computerChoice);
  }

  if (gameType === 1) {
    let again = playAgain();
    gameType = null;

    if (again[0] !== 'y') {
      prompt('Goodbye!');
      break;
    } else {
      console.clear();
    }
  } else if ((gameType === 2) && (totalPlays === 5)) {
    console.clear();
    displayBestOfFiveWinner();
    resetBofValues();
    let again = playAgain();

    if (again[0] !== 'y') {
      prompt('Goodbye!');
      break;
    } else {
      console.clear();
    }
  }
}