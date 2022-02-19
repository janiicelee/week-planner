/* global data */
/* exported data */

var $overlay = document.querySelector('.overlay');
var $addEntry = document.querySelector('#add-entry');

$addEntry.addEventListener('click', function (event) {
  $overlay.classList.remove('hidden');
});

var $form = document.querySelector('form');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var objectContainer = {};
  $overlay.classList.add('hidden');
  var $input = document.querySelector('input');
  var $select = document.querySelector('select');
  var $textArea = document.querySelector('textarea');

  objectContainer.time = $input.value;
  objectContainer.description = $textArea.value;
  data[$select.value].push(objectContainer);
  reload($select.value, $select.selectedOptions[0].textContent);
  $form.reset();
});

var $week = document.querySelector('#week');
var $h3Element = document.querySelector('h3');

$week.addEventListener('click', function (event) {
  var $dataDay = event.target.getAttribute('data-day');
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  reload($dataDay, event.target.textContent);
});

function reload(day, text) {
  $h3Element.textContent = 'Scheduled Events for ' + text;
  $tbody.innerHTML = '';
  for (var i = 0; i < data[day].length; i++) {
    makeTree(data[day][i]);
  }
}

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
