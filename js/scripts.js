$(document).ready(function() {
  const sentence = prompt("Enter sentence");
  const firstLetter = sentence.charAt(0);
  const lastLetter = sentence.charAt(sentence.length-1);
    
  //function capLetters() {
    //return firstLetter.toUpperCase + lastLetter.toUpperCase;
  //}

  //alert(capLetters(sentence));


  function switchLetters() {
      return lastLetter + firstLetter;
    }
  
  alert(switchLetters(sentence));
  
  //const capString = capLetters();

  const slicedString = sentence.slice(1,sentence.length-1);
  alert(lastLetter + slicedString + firstLetter);
});

