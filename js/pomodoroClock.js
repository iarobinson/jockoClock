var d = new Date()
var days = "SUN MON TUE WED THR FRI SAT".split(' ');
var day = days[d.getDay()];
var secondsToGo = 1200;

console.log(day);

var x = setInterval(function() {
  document.getElementById("timeDisplay").innerHTML = Math.floor((secondsToGo / 60)) + "m " + (secondsToGo % 60) + "s";

  document.getElementById("dayDisplay").innerHTML = day;

  secondsToGo -=1;
  
  if (secondsToGo < 0) {
    clearInterval(x);
    document.getElementById("timeDisplay").innerHTML = "<p id='expired'>EXPIRED<p>";
  }
}, 1000);
