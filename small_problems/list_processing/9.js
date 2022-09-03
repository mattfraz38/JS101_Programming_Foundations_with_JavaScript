/*
  Inventory Item Transactions

  QUESTIONS:
    - how to handle invalid or missing arguments?
    - what to return if there are transactions?
  INPUT:
    - one number and one array (two arguments)
  OUTPUT:
    - one array (of transactions)
  RULES:
    - given two arguments, one id number and an list of transactions,
      return an array consisting of all transactions for the passed id number
  DATA STRUCTURES:
    - array and object
  ALGORITHM:
    - begin iterating over all transactions
    - filter the transactions (an object), check the id property
      - if the id property matches the argument id return the whole object
*/

let transactions = [{ id: 101, movement: 'in', quantity: 5 },
{ id: 105, movement: 'in', quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in', quantity: 12 },
{ id: 103, movement: 'out', quantity: 20 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in', quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in', quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 },];

const transactionsFor = (invnetoryItem, transactions) => {
  return transactions.filter(item => item['id'] === invnetoryItem);
};

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]