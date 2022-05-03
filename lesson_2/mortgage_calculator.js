const rlSync = require('readline-sync');

// Validate loan amount
const invalidLoan = input => {
  return (typeof input !== 'number') ||
    (input <= 0) ||
    (Number.isNaN(input)) ||
    (input === Number.POSITIVE_INFINITY) ||
    (input === Number.NEGATIVE_INFINITY);
};

// Validate loan years
const invalidLoanYears = input => {
  return (!Number.isInteger(input)) ||
    (input < 0) ||
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

// Get loan year duration
let loanYears = Number(rlSync.question("Loan years: "));

while (invalidLoanYears(loanYears)) {
  console.log('Error! Invalid year duration!');
  loanYears = Number(rlSync.question("Loan years: "));
}

console.log(`Loan amount = ${loanAmount}. Loan years = ${loanYears}.`);