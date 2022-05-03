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

console.log('*'.repeat(50));
console.log('\tWelcome to Mortgage Calcualator!');
console.log('*'.repeat(50));

let newCalculation = true;

// Continually do mortgage calculations
// until newCalculation set to false
do {
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

  // Get loan interest rate
  let interestRate = Number(rlSync.question("Interest rate: "));

  while (invalidAPR(interestRate)) {
    console.log('Error! Invalid interest rate!!');
    interestRate = Number(rlSync.question("Interest rate: "));
  }

  // Calcultate monthly interest rate
  let monthlyInterestRate = (interestRate / 100) / 12;

  // Calculate monthly payment
  let monthlyPayment = loanAmount *
    (monthlyInterestRate / (1 - Math.pow((1 +
      monthlyInterestRate), (-loanMonths))));

  // Round monthly payment to two decimal places
  monthlyPayment = monthlyPayment.toFixed(2);

  console.log('-'.repeat(50));

  console.log(`Loan amount: $${loanAmount}\nLoan months: ${loanMonths}\nInterest rate: ${interestRate}%\nMonthly interest rate: ${monthlyInterestRate}%`);

  console.log(`Monthly payment: $${monthlyPayment}`);

  console.log('-'.repeat(50));

  // Ask if want to do another calculation
  let response = rlSync.question('Again? (Yes/n): ').toLowerCase();

  while (response[0] !== 'y' && response[0] !== 'n') {
    console.log('Error! Invalid response! (Yes/n)');
    response = rlSync.question('Again? (Yes/n): ').toLowerCase();
  }

  response = response[0];

  // Change newCalculation value depending on response
  if (response === 'y') {
    console.log('-'.repeat(50));
    continue;
  } else {
    newCalculation = false;
    console.log('Goodbye!');
  }

} while (newCalculation);