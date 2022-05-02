const rlSync = require('readline-sync');

// Validate loan amount
const invalidLoan = input => {
  return (typeof input !== 'number') ||
    (input <= 0) ||
    (Number.isNaN(input)) ||
    (input === Number.POSITIVE_INFINITY) ||
    (input === Number.NEGATIVE_INFINITY);
};

// Get loan amount
let loanAmount = Number(rlSync.question("Loan amount: "));

while (invalidLoan(loanAmount)) {
  console.log('Error! Invalid loan amount!');
  loanAmount = Number(rlSync.question("Loan amount: "));
}

console.log(`Loan: ${loanAmount} is type ${typeof loanAmount}`);