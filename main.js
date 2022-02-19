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
  var $dataDay = event.target.getAttribute('data-day');
  $tbody.innerHTML = '';
  for (var i = 0; i < data[$dataDay].length; i++) {
    makeTree(data[$dataDay][i]);
  }
});

var $tbody = document.querySelector('tbody');

function makeTree(schedule) {
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  td1.textContent = schedule.time;
  var td2 = document.createElement('td');
  td2.textContent = schedule.description;
  tr.appendChild(td1);
  tr.appendChild(td2);
  $tbody.appendChild(tr);
}
