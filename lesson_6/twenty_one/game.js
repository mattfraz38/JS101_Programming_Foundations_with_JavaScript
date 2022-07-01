// initialize a deck of cards (52 cards)
// a deck contains 4 suits (hearts, spades, diamonds, and clubs)
// each suit can have:
// - 8 face-value cards (2-10)
// - 3 royalty cards each worth 10 (jack, queen, king)
// - 1 ace card with the value of 1 or 11 depending on the situation

// deal cards to the player and dealer
// player turn: hit or stay
// - repeat until stay or bust
// if player busts dealer wins

// dealer turn: hit or stay
// - repeat until total >= 17
// if dealer busts player wins

// compare cars and declare winner
const rlSync = require('readline-sync');
const CARDS = {
  Hearts: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  Spades: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  Diamonds: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  Clubs: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
};
const CURRENT_PLAYER = ['player']; // default setting is player is current player
const SHUFFLED_CARDS = [];
const DEALER_CARDS = [];
const PLAYER_CARDS = [];

// compare two arrays return true if they contain the same same values
function arraysEqual(arr1, arr2) {
  return arr1.every((el, idx) => el === arr2[idx]);
}

// check for duplicates in the shuffled cards array
function shuffledCardsContainDuplicates(shuffledCardsArr, randCard) {
  return shuffledCardsArr.some(el => arraysEqual(el, randCard));
}

// add a cards to the shuffled cards array
function addCardToShuffledDeck(totalCards, suits) {
  for (totalCards; totalCards > 0; --totalCards) {
    let totalCardSuits = suits.length;
    let randomSuitIdx = Math.floor(Math.random() * totalCardSuits);
    let randomSuit = suits[randomSuitIdx];
    let totalCardsInSuit = CARDS[randomSuit].length;
    let randomCardValIdx = Math.floor(Math.random() * totalCardsInSuit);
    let randomCardVal = CARDS[randomSuit][randomCardValIdx];
    let randomCard = [randomSuit, randomCardVal];

    while (shuffledCardsContainDuplicates(SHUFFLED_CARDS, randomCard)) {
      randomSuitIdx = Math.floor(Math.random() * totalCardSuits);
      randomSuit = suits[randomSuitIdx];
      randomCardValIdx = Math.floor(Math.random() * totalCardsInSuit);
      randomCardVal = CARDS[randomSuit][randomCardValIdx];

      randomCard = [randomSuit, randomCardVal];
    }

    SHUFFLED_CARDS.push(randomCard);
  }
}

// create a new shuffled deck of 52 cards
function shuffle(obj) {
  let suits = Object.keys(obj);
  let cardValues = Object.values(obj);
  let totalCards = cardValues.map(el => el.length)
    .reduce((accu, cur) => accu + cur, 0);

  addCardToShuffledDeck(totalCards, suits);
}

// determine initial card hands
function initalDealing(shuffledCards) {
  for (let i = 0; i < 2; ++i) {
    DEALER_CARDS.push(shuffledCards.shift());
    PLAYER_CARDS.push(shuffledCards.shift());
  }

  displayHands(DEALER_CARDS, PLAYER_CARDS);
}

// calculate the card values and return the total
function calculateHandTotal(cards) {
  let cardVals = cards.map(el => el[1]);
  let total = 0;

  cardVals.forEach(val => {
    if (['Jack', 'Queen', 'King'].includes(val)) {
      total += 10;
    } else if (val === 'Ace') {
      total += 11;
    } else {
      total += Number(val);
    }
  });

  cardVals.filter(val => val === 'Ace').forEach(_ => {
    if (total > 21) total -= 10;
  });

  return total;
}

// log players cards
function displayPlayerCards(cards) {
  console.log(`Player's Hand: ${calculateHandTotal(cards)}`);
  cards.forEach(el => {
    console.log(`\t${el[1]} of ${el[0]}`);
  });
}

// display dealers cards
function displayDealerCards(cards, currPlayer) {
  if (currPlayer === 'dealer') {
    console.log(`Dealer's Hand: ${calculateHandTotal(cards)}`);
  } else {
    console.log("Dealer's Hand: ***");
  }

  cards.forEach((el, idx) => {
    if (idx === cards.length - 1) {
      if (currPlayer === 'dealer') {
        console.log(`\t${el[1]} of ${el[0]}`);
      } else {
        console.log('\tHidden Card');
      }
    } else {
      console.log(`\t${el[1]} of ${el[0]}`);
    }
  });
}

// display cards with totals totals
function displayHands(dCards, pCards) {
  console.clear();
  displayDealerCards(dCards, CURRENT_PLAYER[0]);
  console.log();
  displayPlayerCards(pCards);
}

// perform dealer hit or stay
function dealerHitOrStay(dCards, pCards) {
  let dealerHand = calculateHandTotal(dCards);
  while (dealerHand < 17) {
    DEALER_CARDS.push(SHUFFLED_CARDS.shift());
    dealerHand = calculateHandTotal(dCards);

    displayHands(dCards, pCards);
    if (playerBust(dCards)) {
      console.log('Dealer Bust!');
    }
  }
}

// ask player to hit or stay
function hitOrStayQuestion() {
  console.log('');
  console.log('Do you want to hit or stay?');
  let answer = rlSync.prompt().toLowerCase();

  while (!['hit', 'h', 'stay', 's'].includes(answer)) {
    console.log('Invalid input: Hit or stay');
    answer = rlSync.prompt().toLowerCase();
  }

  return answer;
}

// add cards to player hand
function playerHit(cards) {
  PLAYER_CARDS.push(cards.shift());
}

// determine if player busts 
function playerBust(cards) {
  let playerHand = calculateHandTotal(cards);
  if (playerHand > 21) return true;
}

// determine if player gets 21
function playerHasTwentyOne(cards) {
  let playerHand = calculateHandTotal(cards);
  if (playerHand === 21) return true;
}

function determineWinner(dCards, pCards) {
  let dealerTotal = calculateHandTotal(dCards);
  let playerTotal = calculateHandTotal(pCards);

  if ((dealerTotal > 21) && (playerTotal < 21)) {
    console.log('Congratulations! Player Win!')
  } else if ((dealerTotal < 21) && (playerTotal > 21)) {
    console.log('Dealer Win');
  } else if ((dealerTotal > playerTotal) && (dealerTotal <= 21)) {
    console.log('Dealer Win');
  } else if ((playerTotal > dealerTotal) && (playerTotal <= 21)) {
    console.log('Congratulations! Player Win!');
  } else {
    console.log('Push');
  }
}

while (true) {
  console.clear();
  shuffle(CARDS);
  initalDealing(SHUFFLED_CARDS);
  if (playerHasTwentyOne(PLAYER_CARDS)) {
    console.log('Twenty-One!');
    break;
  }

  let hitOrStayAnswer = hitOrStayQuestion();

  if (hitOrStayAnswer === 'stay' || hitOrStayAnswer === 's') {
    CURRENT_PLAYER[0] = 'dealer';
  }

  while (['hit', 'h'].includes(hitOrStayAnswer)) {
    playerHit(SHUFFLED_CARDS);
    console.clear();
    displayHands(DEALER_CARDS, PLAYER_CARDS);
    if (playerBust(PLAYER_CARDS)) {
      console.log('Bust!');
      break;
    } else if (playerHasTwentyOne(PLAYER_CARDS)) {
      console.log('Twenty-One!');
      break;
    }
    hitOrStayAnswer = hitOrStayQuestion();

    if (hitOrStayAnswer === 'stay' || hitOrStayAnswer === 's') {
      CURRENT_PLAYER[0] = 'dealer';
    }
  }

  dealerHitOrStay(DEALER_CARDS, PLAYER_CARDS);
  displayHands(DEALER_CARDS, PLAYER_CARDS);
  console.log(`Dealer: ${calculateHandTotal(DEALER_CARDS)}`);
  console.log(`Player: ${calculateHandTotal(PLAYER_CARDS)}`);

  determineWinner(DEALER_CARDS, PLAYER_CARDS);
  break;
}


// ************ TESTING ************
// console.log(shuffledCards);
// console.log(shuffledCards.length);

// totalSpades = 0;
// totalHearts = 0;
// totalDiamonds = 0;
// totalClubs = 0;

// shuffledCards.forEach(el => {
//   if (el[0] === 'Spades') ++totalSpades;
//   if (el[0] === 'Hearts') ++totalHearts;
//   if (el[0] === 'Diamonds') ++totalDiamonds;
//   if (el[0] === 'Clubs') ++totalClubs;
// });

// console.log(totalSpades, totalHearts, totalDiamonds, totalClubs);

// console.log(shuffledCards.some(el => arraysEqual(el, ['Diamonds', '4'])));
// console.log(shuffledCards[0]);