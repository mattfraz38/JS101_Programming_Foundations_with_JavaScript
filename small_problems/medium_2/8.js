/*
  Longest Sentence

  QUESTIONS:
    - how to handle invalid or missing arguments?
  INPUT:
    - one string
  OUTPUT:
    - two strings
  RULES:
    - given a string of text as an argument, determine the longest sentence in the text based
      on the number of words, and the number of word count
    - sentences may end in a period (.), an exclamation point (!), or a question mark (?)
    - and sequences of characters that are not spaces or sentence ending characters as words
  DATA STRUCTURES:
    - arrays and regex
  ALGORITHM:
    - using regex, split the text into an array of sentences based on the sentence delimiter
    - get split the sentences into an array of words separated by a space
    - calculate the longest sentence based on the number of words and return the sentence
      along with a string 'The longest sentence has ${length} words.'
*/

// don't know why last element is an empty string
// function sentences(text) {
//   const re = /[.!?]\s*/;
//   const sents = text.split(re);
//   sents.pop();
//   return sents;
// }

// function words(sentence) {
//   return sentence.split(' ');
// }


// function longestSentence(text) {
//   const sentWords = {};
//   const textSents = sentences(text);
//   textSents.forEach((sent, idx) => {
//     sentWords[idx] = words(sent).length;
//   });
//   const maxWords = Math.max(...Object.values(sentWords));

//   return `The longest sentence has ${maxWords} words.`;
// }

function longestSentence(text) {
  let sentence = text.match(/\w.*?[.!?]/g);
  let longest = sentence.reduce(
    function (longest, sentence) {
      let length = sentence.split(/\s/).length;
      if (length > longest.length) {
        return { text: sentence, length: length };
      } else {
        return longest;
      }
    },
    { text: "", length: 0 }
  );
  console.log(longest.text + "\n");
  console.log(`The longest sentence has ${longest.length} words.`);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

let test = 'Listen to me now. To be or not to be! Is that the question?';
longestSentence(test);

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.