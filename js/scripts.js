$(document).ready(function() {
  const sentence = prompt("Enter sentence");
  const firstLetter = sentence.charAt(0);
  const lastLetter = sentence.charAt(sentence.length-1);
    
  function capLetters() {
    return firstLetter.toUpperCase() + lastLetter.toUpperCase();
  }

  function switchLetters() {
    return lastLetter + firstLetter;
  }
  
  function capSwitch() {
    return lastLetter.toUpperCase() + firstLetter.toUpperCase();
  }

  alert(capLetters(sentence));
  alert(switchLetters(sentence));
  alert(capSwitch(sentence));
});