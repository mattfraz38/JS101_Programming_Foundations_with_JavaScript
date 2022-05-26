/*
Practice Problem 2
How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?
*/

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

/*
  INPUT:
    - one array of objects
  OUTPUT:
    - one array of objects
  RULES:
    - Sort the array based on the publication year in each object earliest to latest
  DATA STRUCTURES:
    - one array of objects
  ALGORITHM:
    - create a shallow copy of books called 'sortedBooks'
    - call the sort method on 'sortedBooks' passing in a callback with two arguments 'a' and 'b'
    - return a.published - b.published
*/

// It's best practice to use explicit coercion of the years to numbers
let sortedBooks = books.slice();
sortedBooks.sort((a, b) => {
  // Dot notation can also be used
  return Number(a['published'] - Number(b['published']));
});
console.log(sortedBooks);