$(document).ready(function)changeBackground () {
  $('#photoTwo').hide();
  $('#photoThree').hide();
  $('#photoFour').hide();
  var counter = 0;

function changeOnClick() {
  $('#next').click(function() {
  if (counter === 0) {
    $('#photoOne').show();
    $('#photoTwo').hide();
    $('#photoThree').hide();
    $('#photoFour').hide();
      counter = counter + 1;
   };
  };
}