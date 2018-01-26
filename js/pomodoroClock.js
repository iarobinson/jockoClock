// Find the day to display on watch
var d = new Date()
var days = "SUN MON TUE WED THR FRI SAT".split(' ');
var day = days[d.getDay()];

// The number of seconds left on the pomodoro
var secondsToGo = 12;

// Toggles Reset button
$('document').ready(function () {
  // Displays time and counts down the secondsToGo
  var x = setInterval(function() {
    document.getElementById("dayDisplay").innerHTML = day;
    document.getElementById("timeDisplay").innerHTML = Math.floor((secondsToGo / 60)) + ":" + displaySeconds(secondsToGo);
    
    secondsToGo -=1;
    
    if (secondsToGo < 0) {
      clearInterval(x);
      // document.getElementById("warpath").play();
      document.getElementById("timeDisplay").innerHTML = "<p id='expired'>EXPIRED<p>";
      document.getElementById("dayDisplay").innerHTML = '';
    }
  }, 1000);
  
  // Resets clock to 1500 seconds when button clicked
  $("#resetClock").click(function() {
    secondsToGo = 1500;
    return x;
  });
})

// Displays 00 rather than 01 for seconds
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