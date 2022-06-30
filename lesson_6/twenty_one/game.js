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
const cards = {
  Hearts: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  Spades: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  Diamonds: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  Clubs: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
};
const shuffledCards = [];
const dealerCards = [];
const playerCards = [];

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
    let totalCardsInSuit = cards[randomSuit].length;
    let randomCardValIdx = Math.floor(Math.random() * totalCardsInSuit);
    let randomCardVal = cards[randomSuit][randomCardValIdx];
    let randomCard = [randomSuit, randomCardVal];

    while (shuffledCardsContainDuplicates(shuffledCards, randomCard)) {
      randomSuitIdx = Math.floor(Math.random() * totalCardSuits);
      randomSuit = suits[randomSuitIdx];
      randomCardValIdx = Math.floor(Math.random() * totalCardsInSuit);
      randomCardVal = cards[randomSuit][randomCardValIdx];

      randomCard = [randomSuit, randomCardVal];
    }

    shuffledCards.push(randomCard);
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
    dealerCards.push(shuffledCards.shift());
    playerCards.push(shuffledCards.shift());
  }

  displayHands(dealerCards, playerCards);
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
function displayDealerCards(cards) {
  console.log(`Dealer's Hand: ${'***' || calculateHandTotal(cards)}`);

  cards.forEach((el, idx) => {
    if (idx === cards.length - 1) {
      console.log('\tHidden Card');
    } else {
      console.log(`\t${el[1]} of ${el[0]}`);
    }
  });
}

// display cards with totals totals
function displayHands(dCards, pCards) {
  displayDealerCards(dCards);
  console.log();
  displayPlayerCards(pCards);
  // calculateHandTotal(pCards);
}

// ask player to hit or stay
function hitOrStay() {
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
// *** NEED ACCOUNT FOR IF PLAYER INITIALLY DEALT 21
function playerHit(cards) {
  playerCards.push(cards.shift());
}

shuffle(cards);
console.log(shuffledCards);

console.clear();
while (true) {
  initalDealing(shuffledCards);
  let hitOrStayAnswer = hitOrStay();

  while (['hit', 'h'].includes(hitOrStayAnswer)) {
    playerHit(shuffledCards);
    console.clear();
    displayHands(dealerCards, playerCards);
    hitOrStayAnswer = hitOrStay();
  }

  console.log(`Dealer: ${calculateHandTotal(dealerCards)}`);
  console.log(`Player: ${calculateHandTotal(playerCards)}`);
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