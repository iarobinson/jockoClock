
 console.log('pomodoroClock.js is playing');

function startClock() {
  console.log('Clock Started');
}

$(document).ready(function() {
  // Source w3 Schools https://www.w3schools.com/howto/howto_js_countdown.asp
  var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timeDisplay").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
});
