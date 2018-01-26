// function startClock() {
//   console.log('Clock Started');
// }

var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = now - Math.pow(1.5, 6);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timeDisplay").innerHTML = minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
