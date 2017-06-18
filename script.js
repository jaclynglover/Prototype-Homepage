var photoWidth = 100%;

$(document).ready(function() {
	var currentPhoto = 0; 
    var allPhotos = $('#slideshow li img').length;
    $("#slideshow ul").width(allPhotos*photoWidth);
    $('.next').click(function(){
      currentPhoto++;
      if(currentPhoto>=allPhotos) currentPhoto = 0;
      setFramePosition(currentPhoto);
    $('.next').click(hide();
    });
  });
});