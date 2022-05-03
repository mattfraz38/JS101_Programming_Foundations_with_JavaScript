const rlSync = require('readline-sync');

// Validate loan amount
const invalidLoan = input => {
  return (typeof input !== 'number') ||
    (input <= 0) ||
    (Number.isNaN(input)) ||
    (input === Number.POSITIVE_INFINITY) ||
    (input === Number.NEGATIVE_INFINITY);
};

// Validate loan duration
const invalidLoanDuration = input => {
  return (!Number.isInteger(input)) ||
    (input <= 0) ||
    (Number.isNaN(input)) ||
    (input === Number.POSITIVE_INFINITY) ||
    (input === Number.NEGATIVE_INFINITY);
};

const invalidAPR = input => {
  return (typeof input !== 'number') ||
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

// Get loan month duration
let loanMonths = Number(rlSync.question("Loan months: "));

while ((invalidLoanDuration(loanMonths))) {
  console.log('Error! Invalid month duration');
  loanMonths = Number(rlSync.question("Loan months: "));
}

// Get loan APR
let apr = Number(rlSync.question("APR: "));

while (invalidAPR(apr)) {
  console.log('Error! Invalid APR!');
  apr = Number(rlSync.question("APR: "));
}

console.log(`Loan amount = ${loanAmount}.\nLoan months = ${loanMonths}.\nAPR: ${apr}%.`);