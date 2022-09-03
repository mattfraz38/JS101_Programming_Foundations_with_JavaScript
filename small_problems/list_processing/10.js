/*
  Inventory Item Availability

  QUESTIONS:
  INPUT:
    - one number and one array (of objects)
  OUTPUT:
    - one boolean
  RULES:
    - given two arguments, an item number and a list of transactions,
      determine if an item is available or not 
    - an item is available if it's quantity property is greater than 0
    - the movement property of the transactin will increase ('in') or decrease ('out')
      the total quantity of an item
    - you can and should use the transactionsFor function from problem 9
  DATA STRUCTURES:
    - array and objects
  ALGORITHM:
    - filter out the specific transactions for the given item
    - declare a variable 'quantity' and initialize it with the value of 0
    - begin iterating over each item in the filtered transactions
      - if the movement property of the current iteration is 'in', increase the 'quantity'
        variable by the reference to the quantity property value
      - else if the movement property of the current iteration is 'out', cecrease the 'quantity'
        variable by the reference to the quantity property value
    - if 'quantity is greater than 0 return true, else false
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

const isItemAvailable = (inventoryItem, transactions) => {
  let quantity = itemTransacitons = transactionsFor(inventoryItem, transactions)
    .reduce((preVal, currVal) => {
      if (currVal['movement'] === 'in') {
        return preVal += currVal['quantity'];
      } else {
        return preVal -= currVal['quantity'];
      }
    }, 0);
  return quantity > 0;
};

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true