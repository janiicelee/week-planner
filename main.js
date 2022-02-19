/* global data */
/* exported data */

var $overlay = document.querySelector('.overlay');
var $addEntry = document.querySelector('#add-entry');

$addEntry.addEventListener('click', function (event) {
  $overlay.classList.remove('hidden');
});

var $submit = document.querySelector('#submit');

$submit.addEventListener('click', function (event) {
  $overlay.classList.add('hidden');
});

var $week = document.querySelector('#week');

$week.addEventListener('click', function (event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  var $h3Element = document.querySelector('h3');
  $h3Element.textContent = 'Scheduled Events for ' + event.target.textContent;
  // var weekObj = {
  //   id: data.mon[0].id,
  // }

});
