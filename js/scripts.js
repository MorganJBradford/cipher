$(document).ready(function() {
  const userSentence = prompt("Enter sentence");
  
  function capLetters() {
    return userSentence.charAt(0).toUpperCase() + userSentence.charAt(userSentence.length-1).toUpperCase();
  }

  function swapLetters() {
    return userSentence.charAt(userSentence.length-1) + userSentence.charAt(0);
  }

  const capResults = capLetters();

  function capThenSwap() {
    return userSentence + capResults.charAt(capResults.length-1) + capResults.charAt(0);
  }

  function divideUserSentence() {
    return Math.floor(userSentence.length / 2);
  }

  
  alert(divideUserSentence())

  alert(capThenSwap(userSentence));
});