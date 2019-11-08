console.log('Test');
// jquery('.parent')
//   .find('.child')
//   .addClass('red');

// jquery('.parent')
//   .addClass('blue')
//   .removeClass('blue');
// jquery('.child').each(div => {
//   console.log(div);
// });
$('#test')
  .find('.child')
  .parent()
  .children()
  .addClass('blue');
