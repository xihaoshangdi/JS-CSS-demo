import './app2.css';
import $ from 'jquery';

const html = ` <section id="app2">
<ol class="tab-Bar">
  <li>1</li>
  <li>2</li>
</ol>
<ol class="tab-Content">
  <li>first</li>
  <li>second</li>
</ol>
</section>`;

const $element = $(html);

$element.appendTo($('body > .container'));

const $tabBar = $('#app2 .tab-Bar');
const $tabContent = $('#app2 .tab-Content');
const localStoKey = 'tab';
let index = localStorage.getItem(localStoKey) || 0;

$tabBar.on('click', 'li', e => {
  const $li = $(e.currentTarget);
  $li
    .addClass('selector')
    .siblings()
    .removeClass('selector');
  $tabContent
    .children()
    .eq($li.index())
    .addClass('active')
    .siblings()
    .removeClass('active');
  localStorage.setItem(localStoKey, $li.index());
});
$tabBar
  .children()
  .eq(index)
  .trigger('click');
