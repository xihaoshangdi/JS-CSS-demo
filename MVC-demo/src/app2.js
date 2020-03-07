import './app2.css';
import $ from 'jquery';
const $tabBar = $('#app2 .tab-Bar');
const $tabContent = $('#app2 .tab-Content');
const localStoKey='tab';
let index=localStorage.getItem(localStoKey)||0

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
  localStorage.setItem(localStoKey,$li.index())
});
$tabBar
    .children()
    .eq(index)
    .trigger('click');
