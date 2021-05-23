var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startbut = document.getElementById("Startbt");
var timeLeft = 75;

function displayMessage(){
  timerEl.textContent="Game Over"
  return;
};
// Timer that counts down from 75 sec by 1 sec

startbut.addEventListener("click", function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 0
    if (timeLeft > 0) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    }  else if(questionscomplete || timeLeft===0){

      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
});