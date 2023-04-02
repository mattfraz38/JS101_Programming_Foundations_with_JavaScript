function sortStringsByConsonants(stringsArr) {
  const result = [];
  const stringsByConsonants = {};
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < stringsArr.length; ++i) {
    let numOfConsonants = 0;

    for (let j = 0; j < stringsArr[i].length; ++j) {
      let currentChar = stringsArr[i][j];
      let nextChar = stringsArr[i][j + 1];
      let charAfterNext = stringsArr[i][j + 2]

      if (!vowels.includes(currentChar) && nextChar === ' ' && (!vowels.includes(charAfterNext))) {
        numOfConsonants += 1;
      } else if (!vowels.includes(currentChar) && nextChar && !vowels.includes(nextChar)) {
        numOfConsonants += 1;
      }

      stringsByConsonants[stringsArr[i]] = numOfConsonants;
    }
  }

  const consonantCount = Object.values(stringsByConsonants);
  const sortedChars = consonantCount.sort((a, b) => b - a);

  sortedChars.forEach(val => {
    let string = stringsArr.find(key => stringsByConsonants[key] === val);
    result.push(string);
    delete stringsByConsonants[string];
  });

  return result;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa']));
// ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan']));
// ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar']));
// ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year']));
// ['month', 'day', 'week', 'year']