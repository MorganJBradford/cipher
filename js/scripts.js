$(document).ready(function() {
  const sentence = prompt("Enter sentence");
  const firstLetter = sentence.charAt(0);
  const lastLetter = sentence.charAt(sentence.length-1);
  // function capLetters(firstLetter, lastLetter){
  //   return first.toUpperCase + lastLetter.toUpperCase;
  //   firstletter.toUpperCase
  // }
  const slicedString = sentence.slice(1,sentence.length-1)
  alert(lastLetter + slicedString + firstLetter);
});

