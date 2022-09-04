/*
  Staggered Caps (Part 2)

  QUESTIONS:
  INPUT:
  OUTPUT:
  RULES:
    - same as problem 6 except non-alphabetical cases do not contribute to 
      the alteration of casing ex. 'AlL_cApS' and NOT 'AlL_Caps'
  DATA STRUCTURES:
  ALGORITHM:
*/

const staggeredCase = str => {
  let toggleCasing = true;
  return chars = str
    .split('')
    .map(char => {
      if (toggleCasing && char.match(/[a-z]/i)) {
        toggleCasing = !toggleCasing;
        return char.toUpperCase();
      } else if (char.match(/[a-z]/i)) {
        toggleCasing = !toggleCasing;
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);