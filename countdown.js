
var countdown= function(interval,startime){
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeLeft=startime;
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 0  
    // add questions complete
    if (timeLeft >= 0 && t<quiz.length) {
      timerEl.textContent = timeLeft + ' seconds remaining';
       timeLeft--;
    }  else {
      console.log(questionscomplete);
      timerEl.textContent = '';
      clearInterval(timeInterval);
    }
  }, interval);
};

