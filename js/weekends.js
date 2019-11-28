function changeVideoContainer() {

  $(window).on("resize load", function () {
      $(".homepage-hero-module").each(function(i, el){
      var section = $('.homepage-hero-module');
      var width = section.width();
      if ($(window).width() < 960) {
        $("#episode2Vid").attr("src","images/604Weekend_Lower(480p).mp4");
      }
  });
  });
}


function scaleVideoContainer() {

    var height = $(window).height() + 50;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
    $('.homepage-hero-module-2').css('height',unitHeight);
}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1730){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }
    });
}

//jQuery is required to run this code
$(window).on('load', function() {
  changeVideoContainer()
  scaleVideoContainer();

  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

});

$(document).ready( function() {
  $('#grid .spinner, #grid .spinner-5').delay(1900).fadeOut(750);
  $('#episode1, #episode1-underlayText, .episode1-section').hide();
  $('#theSunsetBG, #theArtBlockBG, #theSunsetBG').fadeIn();
    changeVideoContainer()
    scaleVideoContainer();

    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    var grid = function() {
    $('#grid .grid').css('display', 'none').css('visibility', 'visible').delay(225).fadeIn(750);
    $('#myModal').removeClass('hideThisElement');
    };
    var gridBtn = function() {
      $('#grid-2-btn').css('visibility', 'visible');
    };

    setTimeout(grid, 2650);
    setTimeout(gridBtn, 3200);

    $(window).on('resize', function() {
      changeVideoContainer()
      scaleVideoContainer();

      initBannerVideoSize('.video-container .filter');
      initBannerVideoSize('.video-container video');
    });
});

window.onorientationchange = function() {
  window.location.reload();
};
