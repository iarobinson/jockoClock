
 console.log('pomodoroClock.js is playing');

function startClock() {
  console.log('Clock Started');
}

$(document).ready(function() {
  $('.initial').on('click', function() {
    $('.initial').text('JS functioning');
  });
});
