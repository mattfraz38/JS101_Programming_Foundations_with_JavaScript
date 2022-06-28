// initialize a deck of cards (52 cards)
// a deck contains 4 suits (hearts, spades, diamonds, and clubs)
// each suit can have:
// - 8 face-value cards (2-10)
// - 3 royalty cards each worth 10 (jack, queen, king)
// - 1 ace card with the value of 1 or 11 depending on the situation

const cards = {
  Hearts: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  Spades: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  Diamonds: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  Clubs: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
};
const shuffledCards = [];

// compare two arrays return true if they contain the same same values
function arraysEqual(arr1, arr2) {
  return arr1.every((el, idx) => el === arr2[idx]);
}

// check for duplicates in the shuffled cards array
function shuffledCardsContainDuplicates(shuffledCardsArr, randCard) {
  return shuffledCardsArr.some(el => arraysEqual(el, randCard));
}

// add a cards to the shuffled cards array
function addCardtoShuffledDeck(totalCards, suits) {
  for (totalCards; totalCards > 0; --totalCards) {
    let randomSuitIdx = Math.floor(Math.random() * suits.length);
    let randomSuit = suits[randomSuitIdx];
    let randomSetValIdx = Math.floor(Math.random() * cards['Hearts'].length);
    let randomSetVal = cards[randomSuit][randomSetValIdx];
    let randomCard = [randomSuit, randomSetVal];

    while (shuffledCardsContainDuplicates(shuffledCards, randomCard)) {
      randomSuitIdx = Math.floor(Math.random() * suits.length);
      randomSuit = suits[randomSuitIdx];
      randomSetValIdx = Math.floor(Math.random() * cards['Hearts'].length);
      randomSetVal = cards[randomSuit][randomSetValIdx];

      randomCard = [randomSuit, randomSetVal];
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

  addCardtoShuffledDeck(totalCards, suits);
}

shuffle(cards);
console.log(shuffledCards);

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