$('#myModal').css("padding-top", function() {
  return ($(window).height() - $('.modal-content').outerHeight()) / 4;
});

// Open the Modal
function openModal() {
  var noscript = function() {
    $('.modal-content:has(noscript)').html(function(){
        return $(this).find('noscript').text();
    });
  };
  noscript();
  $('#myModal').delay(25).show();
}

// Close the Modal
function closeModal() {
  $('#myModal').hide();
}

// Open next section of grid
$('#grid-2-btn').click(function() {
  var grid2 = function() {
    $('#grid2 .grid').css('display', 'none').css('visibility', 'visible').delay(225).fadeIn(750);
  };
  var noscript = function() {
    $('.grid:has(noscript)').html(function(){
        return $(this).find('noscript').text();
    });
  };
  noscript();
  $('#grid2').css('display', 'inherit');
  $('#grid2 .spinner, #grid2 .spinner-5').delay(1550).fadeOut(750);
  $('#grid-2-btn').fadeOut(50);
  $('#grid2').css("padding-top", "0");
  $('#grid').css("padding-bottom", "0");
  setTimeout(grid2, 2000);
});



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $('.mySlides');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "contents";
}
