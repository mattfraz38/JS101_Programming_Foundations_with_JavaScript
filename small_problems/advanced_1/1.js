/*
  Madlibs Revisited
  QUESTIONS:
    - Am I returning one string on many lines? or many strings?
  INPUT:
    - one string (a madlibs text template)
  OUPUT:
    - one string 
  RULES:
    - given a madlibs text (string) template as an argument, write a function that plugs a random
      word (from a list of various different words and parts of speech) and returns a madlib text
    - the random words are preset and not chosen by the user
  DATA STRUCTURES:
    - array and/or object
  ALGORITHM:
    - ask the user for a list of different parts of speech in the following format
      adjectives: quick lazy sleepy noisy hungry
      nouns: fox dog head leg tail cat
      verbs: jumps lifts bites licks pats
      adverbs: easily lazily noisily excitedly
    - upon presing 'enter' after typing in adverbs, get a random selection of words from the correct section,
      fill them into the template and return the result
*/

let template1 =
  "The %{adjective} brown %{noun} %{adverb} " +
  "%{verb} the %{adjective} yellow " +
  "%{noun}, who %{adverb} %{verb} his " +
  "%{noun} and looks around.";

// this is also ok
// `
// The %{adjective} brown %{noun} %{adverb}
// %{verb} the %{adjective} yellow
// %{noun}, who %{adverb} %{verb} his
// %{noun} and looks around.
// `;

let template2 = "The %{noun} %{verb} the %{noun}'s %{noun}.";

function madlibs(template) {
  const REPLACEMENT_TEXTS = {
    adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
    noun: ["fox", "dog", "head", "leg", "tail"],
    verb: ["jumps", "lifts", "bites", "licks", "pats"],
    adverb: ["easily", "lazily", "noisily", "excitedly"]
  };

  function replaceText(match) {
    let key = match.replace(/[^a-z]/g, '');
    let index = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
    return REPLACEMENT_TEXTS[key][index]
  }

  return template.replace(/%{[a-z]+}/g, replaceText);
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".

/*
The solution processes the template by calling the String.prototype.replace method and passing in a regex and a callback function as arguments. The regex pattern, /\%{[a-z]+}/g, matches each token in the template. The text matched by the regex pattern is then passed as an argument to the replaceText callback function. The replaceText function processes the matched text to remove any characters used as identifiers (in this case, %{}), leaving only the content type. The content type is then used as the key to retrieve the appropriate list of words from the REPLACEMENT_TEXTS object. The replaceText function generates a random index and uses it to select a word from the list at random.
*/