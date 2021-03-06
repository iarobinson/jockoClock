// Find the day to display on watch
var d = new Date()
var days = "SUN MON TUE WED THR FRI SAT".split(' ');
var day = days[d.getDay()];

// The default number of seconds on clock
var secondsToGo = 1500;

// Happens when reset clock button is clicked
function resetClock() {
  if (secondsToGo === -1) {
    location.reload();
  }
  secondsToGo = 1500;
}

function setCustomMinutes() {
  if (secondsToGo === -1) {
    location.reload();
  }
  var desiredTime = parseInt(document.getElementById("newTime").value) * 60;
  secondsToGo = desiredTime;
}

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

$(document).ready(function() {
  
  // Clock Operation and Display
  var runTime = setInterval(function() {
    // Renders time to watch display
    document.getElementById("timeDisplay").innerHTML = day + "    " + Math.floor((secondsToGo / 60)) + ":" + displaySeconds(secondsToGo);
    
    // Decrements the time to go
    secondsToGo -= 1;
    
    // What to do when the minutes have counted down
    if (secondsToGo < 0) {
      // Comment this out to avoid listening to the audio too much while programming
      
      document.getElementById("warpath").play();
      document.getElementById("timeDisplay").innerHTML = "<p id='expired'>EXPIRED<p>";
      document.getElementById("dayDisplay").innerHTML = '';
      clearInterval(runTime);
    }
  }, 1000);
});