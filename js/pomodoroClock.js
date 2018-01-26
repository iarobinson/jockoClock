var secondsToGo = 60;

var x = setInterval(function() {
  document.getElementById("timeDisplay").innerHTML = Math.floor((secondsToGo / 60)) + "m " + (secondsToGo % 60) + "s";

  secondsToGo -=1;
  
  if (secondsToGo < 0) {
    clearInterval(x);
    document.getElementById("timeDisplay").innerHTML = "<p id='expired'>EXPIRED<p>";
  }
}, 1000);
