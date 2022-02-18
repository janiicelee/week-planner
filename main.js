var $overlay = document.querySelector('.overlay');
var $addEntry = document.querySelector('#add-entry');

$addEntry.addEventListener('click', function (event) {
  $overlay.classList.remove('hidden');
});

var $submit = document.querySelector('#submit');

$submit.addEventListener('click', function (event) {
  $overlay.classList.add('hidden');
});
