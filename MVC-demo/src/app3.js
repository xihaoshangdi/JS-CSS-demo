import './app3.css';
import $ from 'jquery';

const $square = $('#app3 #square');
const localStoKey='status'
let status=localStorage.getItem(localStoKey)==='yes'
if(status){
  $square.addClass('active');
}else{
  $square.removeClass('active');
}
$square.on('click', () => {
  if ($square.hasClass('active')) {
    $square.removeClass('active');
    localStorage.setItem(localStoKey,'no')
  }else{
    $square.addClass('active');
    localStorage.setItem(localStoKey,'yes')
  }
});
