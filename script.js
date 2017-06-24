// code modeled after Greg Linch's example in class (https://github.com/greglinch/webdevclass-gallery-assignment-2017), and modified to fit my HTML and add the fadeIn() function
$(document).ready(function() {
  var slides = $(".photo");
  var currentPhoto = 0;

  slides.hide();
  slides.first().show();

  var slide = slides[currentPhoto];
    $(".next").click(function() {
      $(slide).hide();
      currentPhoto++;
      if (currentPhoto > 3) {
        currentPhoto = 0;
      }

      slide = slides[currentPhoto];
      $(slide).fadeIn(300);
      $(slide).show();

    });
    
    $(".back").click(function() {
      $(slide).hide();
      currentPhoto--;
      if (currentPhoto < 0) {
        currentPhoto = 3;
      }

      slide = slides[currentPhoto];
      $(slide).fadeIn(300);
      $(slide).show();
      
    });
});