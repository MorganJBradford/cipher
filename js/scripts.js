$(document).ready(function() {
  const userSentence = prompt("Enter sentence");
  
  function capLetters() {
    return userSentence.charAt(0).toUpperCase() + userSentence.charAt(userSentence.length-1).toUpperCase();
  }

  function swapLetters() {
    return userSentence.charAt(userSentence.length-1) + userSentence.charAt(0);
  }

  const capResults = capLetters();
  const swapResults = swapLetters()

  function capSwap() {
    return capResults.charAt(capResults.length-1) + capResults.charAt(0);
  }
  
  alert(capSwap(userSentence));
});