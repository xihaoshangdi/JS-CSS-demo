import './app1.css';
import $ from 'jquery'; //js引入js

const html = `<section id="app1">
<div id="outputAreas">
  <span id="result">100</span>
</div>
<div id="operateArea">
  <button id="add">+1</button>
  <button id="sub">-1</button>
  <button id="mul">×2</button>
  <button id="divide">÷2</button>
</div>
</section>`;

const $element = $(html);

$element.appendTo($('body > .container'));

const $result = $('#result');
const $add = $('#add');
const $sub = $('#sub');
const $mul = $('#mul');
const $divide = $('#divide');

let result = localStorage.getItem('result') || 100;
$result.text(result);
let number = parseInt(result);
$add.on('click', () => {
  number += 1;
  $result.text(number);
  localStorage.setItem('result', number);
});
$sub.on('click', () => {
  number -= 1;
  $result.text(number);
  localStorage.setItem('result', number);
});
$mul.on('click', () => {
  number = number * 2;
  $result.text(number);
  localStorage.setItem('result', number);
});
$divide.on('click', () => {
  number = number / 2;
  $result.text(number);
  localStorage.setItem('result', number);
});
