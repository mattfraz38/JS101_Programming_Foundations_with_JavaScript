/*
  Search Word (Part 1)

  QUESTIONS:
  INPUT:
    - two strings (one single word and one longer text) 
  OUTPUT:
    - one number
  RULES:
    - given two arguments, one target word and one string of text, determine
      the frequency of the first word argument in the second text argument
    - return the result as a number
    - word and text imputs will always be provided
    - the search is case-insensitive
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the second argument text into an array of words (strings separated with a space)
    - filter out the words with match the first argument (target string)
    - return the length of the filtered array
*/

const searchWord = (target, text) => {
  // const words = text.split(' ');
  // return words.filter(word => word.toLowerCase() === target.toLowerCase()).length;
  const regex = new RegExp(`\\b${target}\\b`, 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
};

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));      // should return 4, NOT 13
