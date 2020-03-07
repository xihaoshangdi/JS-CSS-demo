import './app2.css';
import $ from 'jquery';
const $tabBar = $('#app2 .tab-Bar');
const $tabContent = $('#app2 .tab-Content');
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
});
$tabBar
  .children()
  .eq(0)
  .trigger('click');
