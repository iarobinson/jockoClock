// Find the day to display on watch
var d = new Date()
var days = "SUN MON TUE WED THR FRI SAT".split(' ');
var day = days[d.getDay()];

// The number of seconds left on the pomodoro
var secondsToGo = 1500;

// Clock Operation and Display
var x = setInterval(function() {
  document.getElementById("timeDisplay").innerHTML = day + " " + Math.floor((secondsToGo / 60)) + ":" + displaySeconds(secondsToGo);
  
  secondsToGo -=1;
  
  if (secondsToGo < 0) {
    clearInterval(x);
    // Comment this out to avoid listening to the audio too much while programming
    // document.getElementById("warpath").play();
    document.getElementById("timeDisplay").innerHTML = "<p id='expired'>EXPIRED<p>";
    document.getElementById("dayDisplay").innerHTML = '';
  }
}, 1000);

// Displays 00 rather than 01 for seconds and 04 seconds rather than 4
function displaySeconds(seconds) {
  var sparSeconds = seconds % 60;
  if (sparSeconds === 0) {
    return '00';
  } else if (sparSeconds < 10) {
    return '0' + seconds % 60;
  } else {
    return sparSeconds;
  }
}