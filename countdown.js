
var countdown= function(interval,startime){
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeLeft=startime;
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 0  
    // add questions complete
    if (timeLeft >= 0 || t!=quiz.length-1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
       timeLeft--;
    }  else {
      console.log(questionscomplete);
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, interval);
};

var delayfun = function(interval,startime){
  console.log("start delay");
  timeLt=startime;
  var timeInterval = setInterval(function () {
    if (timeLt >= 0) {
      timerEl.textContent = timeLeft + ' seconds remaining';
       timeLt--;
      
    }  else {
      clearInterval(timeInterval);
    }
  }, interval);
  return(console.log("delay complete"))
};

