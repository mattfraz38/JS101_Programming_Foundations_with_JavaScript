const rlSync = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;

function displayBoard(board) {
  // console.clear();

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
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; ++square) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function emptySquares(board) {
  return Object.keys(board)
    .filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
    [1, 5, 9], [3, 5, 7]              // diagonals
  ];

  for (let line = 0; line < winningLines.length; ++line) {
    let [sq1, sq2, sq3] = winningLines[line];

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

function someoneWon(board) {
  return !!detectWinner(board);
}

function argumentExists(bool) {
  return bool !== undefined;
}

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

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board), ', ')}`);
    square = rlSync.question().trim();

    if (emptySquares(board).includes(square)) break;
    prompt("That's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];

  board[square] = COMPUTER_MARKER;
}

// Main game loop
while (true) {
  let computerWins = 0;
  let humanWins = 0;

  while (true) {
    let board = initializeBoard();

    console.log(`User Wins: ${humanWins}\nComputer Wins: ${computerWins}`);

    while (true) {
      displayBoard(board);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt("It's a tie!");
    }

    if (detectWinner(board) === 'Player') {
      humanWins += 1;
    } else if (detectWinner(board) === 'Computer') {
      computerWins += 1;
    }

    // if (humanWins === 5 || computerWins === 5) {
    //   prompt('Play again? (y or n)');
    //   let answer = rlSync.question().toLowerCase()[0];
    //   if (answer !== 'y') break;
    // }
  }
  if (humanWins === 5 || computerWins === 5) {
    prompt('Play again? (y or n)');
    let answer = rlSync.question().toLowerCase()[0];
    if (answer !== 'y') break;
  }
}

prompt('Thanks for playing Tic Tac Toe!');