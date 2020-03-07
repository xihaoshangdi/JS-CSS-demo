import './app4.css';
import $ from 'jquery';

const html = ` <section id="app4">
<div id="circle"></div>
</section>`;

const $element = $(html);

$element.appendTo($('body > .container'));

const $circle = $('#app4 #circle');
$circle
  .on('mouseenter', () => {
    $circle.addClass('active');
  })
  .on('mouseleave', () => {
    $circle.removeClass('active');
  });
