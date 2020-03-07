import './app1.css';
import $ from 'jquery'; //js引入js

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
