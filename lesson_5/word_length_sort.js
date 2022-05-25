// How would you sort the following array by the lengths of each word?

let words = ['go', 'ahead', 'and', 'jump'];
// let words = [5, 1, 6, 2, 9, 3];

// words.sort((a, b) => {
//   if (a.length < b.length) {
//     return -1;
//   } else if (a.length > b.length) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

words.sort((a, b) => a.length - b.length);

console.log(words);