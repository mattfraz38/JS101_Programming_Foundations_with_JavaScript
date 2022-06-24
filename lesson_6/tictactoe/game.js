const rlSync = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const PLAYER_ORDER = { first: 'player', second: 'computer' };
const BEST_OF_FIVE_WINS = { player: 0, computer: 0 };
const GAMES_TO_WIN = 5;
const MIDDLE_SQR = '5';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
  [1, 5, 9], [3, 5, 7]              // diagonals
];

// draw the board
function displayBoard(board) {
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |   ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |   ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |   ${board['9']}`);
  console.log('     |     |');
  console.log('');

  return null;
}

// initialize the board with empty characters 
function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; ++square) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

// initial game greeting
function gameGreeting() {
  console.clear();

  console.log('');
  console.log('****    WELCOME    ****');
  console.log('****      TO       ****');
  console.log('****  Tic-Tac-Toe  ****');
  console.log('');

  return null;
}

// determine if best of five game or single game
function gameType() {
  prompt('Do you want to play best of five? (Yes/n)');
  let answer = rlSync.question().toLowerCase();

  while (!['yes', 'y', 'no', 'n'].includes(answer)) {
    console.log('Invalid Option');
    prompt('Do you want to play best of five? (Yes/n)');
    answer = rlSync.question().toLowerCase();
  }

  if (['yes', 'y'].includes(answer)) {
    return 'best of five'
  } else {
    return 'single'
  }
}

// loop only a single game
function singleGame() {
  while (true) {
    let board = initializeBoard();

    playerOrCompChooseSquare(board);
    showWinner(board);

    prompt('Play again? (Yes/n)');
    let answer = rlSync.question().toLowerCase();

    while (!['y', 'yes', 'n', 'no'].includes(answer)) {
      console.log('Invalid Option');
      prompt('Play again? (Yes/n)');
      answer = rlSync.question().toLowerCase();
    }

    if (['no', 'n'].includes(answer)) break;
    // if (playAgain() === 'n') break;
  }

  return null;
}

// determine order of players
function choosePlayerOrder() {
  prompt('Do you want to go first? (Yes/n)');
  let answer = rlSync.question().toLowerCase();

  while (!['yes', 'y', 'no', 'n'].includes(answer)) {
    console.log('Invalid Option');
    prompt('Do you want to go first? (Yes/n)');
    answer = rlSync.question().toLowerCase();
  }

  // the default is the player going first
  if (['yes', 'y'].includes(answer)) {
    return;
  } else {
    PLAYER_ORDER['first'] = 'computer';
    PLAYER_ORDER['second'] = 'player';
  }

  return null;
}

// prompt message
function prompt(msg) {
  console.log(`=> ${msg}`);

  return null;
}

// list available moves
function emptySquares(board) {
  return Object.keys(board)
    .filter(key => board[key] === INITIAL_MARKER);
}

// check if there are no more moves
function boardFull(board) {
  return emptySquares(board).length === 0;
}

// determine game winner
function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; ++line) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

// check if there is a winner
function someoneWon(board) {
  return !!detectWinner(board);
}

// display single match winner 
function showWinner(board) {
  if (detectWinner(board) === 'Player') {
    console.log(`${detectWinner(board)} won!`);
    BEST_OF_FIVE_WINS['player'] += 1;
  } else if (detectWinner(board) === 'Computer') {
    console.log(`${detectWinner(board)} won!`);
    BEST_OF_FIVE_WINS['computer'] += 1;
  } else {
    console.log("It's a tie!");
  }

  return null;
}

// check if function recieved argument
function argumentExists(bool) {
  return bool !== undefined;
}

// ********* format list of available moves for display *********
function basicElementJoin(arr, delimiter = ', ') {
  return arr.join(delimiter);
}

function joinWithWord(joinedString, delimiter = ', ', word = 'or') {
  let lastDelimiterIndex = joinedString.lastIndexOf(delimiter);

  return `${joinedString.substring(0, lastDelimiterIndex + 1)} ${word} ${joinedString.substring(lastDelimiterIndex + 2)}`;
}

function joinOr(arr, delimiter, finalDelimiter = 'or') {
  if (arr.length === 0) {
    return "";
  } else if (arr.length === 1) {
    return String(arr[0]);
  } else if (arr.length === 2) {
    return arr.join(' or ');
  }

  let joinedElements;
  let result;

  if (!argumentExists(delimiter)) {
    joinedElements = basicElementJoin(arr);

    result = joinWithWord(joinedElements);
  } else if (argumentExists(delimiter) &&
    argumentExists(finalDelimiter)) {
    joinedElements = basicElementJoin(arr, delimiter);
    result = joinWithWord(joinedElements, delimiter, finalDelimiter);
  }

  return result;
}
// **************************************************************

// human player chooses a square
function playerChoosesSquare(board) {
  let square;

  if (PLAYER_ORDER['first'] === 'computer' && emptySquares(board).length === 9) {
    showWinner(board);
    return;
  }

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board), ', ')}`);
    square = rlSync.question().trim();

    if (emptySquares(board).includes(square)) break;
    prompt("That's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
  return null;
}

// check for a winning or blocking move
function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) return unusedSquare;
  }

  return null;
}

// computer chooses an offensive move
function offenseMove(board) {
  let square;

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; ++index) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }

  if (square) return square;
  return null;
}

// computer chooses an defensive move
function defensiveMove(board) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; ++index) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }

  if (square) return square;
  return null;
}

// computer chooses random move
function chooseRandom(board) {
  let square;

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  return square;
}

// computer chooses a square
function computerChoosesSquare(board) {
  let square;

  if (PLAYER_ORDER['first'] === 'computer' && emptySquares(board).length === 9) {
    board[MIDDLE_SQR] = COMPUTER_MARKER;
    return null;
  }

  // set square to either an offensive move or defensive move
  square = offenseMove(board) || defensiveMove(board);

  // if square is not null set board square to computer marker
  // or take the middle square if available
  // or choose a random square
  if (square) {
    board[square] = COMPUTER_MARKER;
  } else if (board[MIDDLE_SQR] === INITIAL_MARKER) {
    board[MIDDLE_SQR] = COMPUTER_MARKER;
  } else {
    board[chooseRandom(board)] = COMPUTER_MARKER;
  }

  return null;
}

//  determine which player can make a move
function chooseSquare(board, curPlayer) {
  if (curPlayer === 'player') {
    return playerChoosesSquare(board);
  } else {
    return computerChoosesSquare(board);
  }
}

// alternate the current player
function alternatePlayer(curPlayer) {
  if (curPlayer === 'player') {
    return 'computer';
  } else {
    return 'player';
  }
}

// main gameplay function
function playerOrCompChooseSquare(board) {
  let currentPlayer;
  if (PLAYER_ORDER['first'] === 'player' && emptySquares(board).length === 9) {
    currentPlayer = 'player';
  } else {
    currentPlayer = 'computer';
  }

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }

  return null;
}

// display winner of best of five game
function displayFinalWinner(gameWinner) {
  console.log('');
  console.log('**** Congratulations ****');
  console.log(` ---- ${gameWinner} Wins! --- `);
  console.log('*************************');
  console.log('');
}

// prompt the user to play again
function playAgain() {
  let winner;
  if (BEST_OF_FIVE_WINS['player'] > BEST_OF_FIVE_WINS['computer']) {
    winner = 'Player';
  } else {
    winner = 'Computer';
  }

  if (BEST_OF_FIVE_WINS['player'] === GAMES_TO_WIN
    || BEST_OF_FIVE_WINS['computer'] === GAMES_TO_WIN) {
    displayFinalWinner(winner);
    prompt('Play again? (Yes/n)');
    let answer = rlSync.question().toLowerCase();

    while (!['y', 'yes', 'n', 'no'].includes(answer)) {
      console.log('Invalid Option');
      prompt('Play again? (Yes/n)');
      answer = rlSync.question().toLowerCase();
    }

    if (['yes', 'y'].includes(answer)) {
      BEST_OF_FIVE_WINS['player'] = 0;
      BEST_OF_FIVE_WINS['computer'] = 0;
      gameGreeting();
      return 'y';
    } else {
      return 'n';
    }
  }

  return null;
}

// main game loop
mainGame:
while (true) {

  gameGreeting();
  choosePlayerOrder();
  let game = gameType();

  if (game === 'single') {
    singleGame();
    break;
  }

  while (true) {
    let board = initializeBoard();

    playerOrCompChooseSquare(board);

    showWinner(board);
    console.log(`User Wins: ${BEST_OF_FIVE_WINS['player']}`);
    console.log(`Computer Wins: ${BEST_OF_FIVE_WINS['computer']}`);

    if (playAgain() === 'n') break mainGame;
  }
}

prompt('Thanks for playing Tic Tac Toe!');