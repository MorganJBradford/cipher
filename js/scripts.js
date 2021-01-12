$(document).ready(function() {
  const userSentence = prompt("Enter sentence");
  
  function capLetters() {
    return userSentence.charAt(0).toUpperCase() + userSentence.charAt(userSentence.length-1).toUpperCase();
  }
  alert(capLetters(userSentence));
  
  const firstLetter = sentence.charAt(0);
  const lastLetter = sentence.charAt(sentence.length-1);
  
  

  
  
  function switchLetters() {
    return lastLetter + firstLetter;
  }
  
  const capSwitch = capLetters(switchLetters());

  alert(capLetters(sentence));
  alert(switchLetters(sentence));
  alert(capSwitch(sentence));
});