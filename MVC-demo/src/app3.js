import './app3.css';
import $ from 'jquery';

const html = ` <section id="app3">
<div id="square"></div>
</section>`;

const $element = $(html);

$element.appendTo($('body > .container'));

const $square = $('#app3 #square');
const localStoKey = 'status';
let status = localStorage.getItem(localStoKey) === 'yes';
if (status) {
  $square.addClass('active');
} else {
  $square.removeClass('active');
}
$square.on('click', () => {
  if ($square.hasClass('active')) {
    $square.removeClass('active');
    localStorage.setItem(localStoKey, 'no');
  } else {
    $square.addClass('active');
    localStorage.setItem(localStoKey, 'yes');
  }
});
