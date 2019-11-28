// ===== Fade in Element ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});


$(window).scroll(function() {
    if ($(this).scrollTop() >= 45) {
      $('#episode-switch-desktop, #episode-switchback-desktop').addClass('colorSwitch');
      $('.mobile-episodeswitch').fadeIn(200);
      $('.header-fixed').addClass('headerChange');
      $('.logoSwitch').attr("src","images/MCG.svg");
    } else {
      $('#episode-switch-desktop, #episode-switchback-desktop').removeClass('colorSwitch');
      $('.mobile-episodeswitch').fadeOut(200);
      $('.mobile-episodeswitch').fadeIn(200);
      $('.header-fixed').removeClass('headerChange');
      $('.logoSwitch').attr("src","images/MCG-white.svg");
    }
});


// ===== Scroll to Top ====
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// Scroll to element
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top -65
      }, 900);
      return false;
    }
  }
});


var pContainerHeight = $('body').height();

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  if (wScroll <= pContainerHeight) {
    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /3 +'%)'
    });
  }
});

/******Change Button Text*****/
$(window).on('load', function () {
    $('#episode-switch-desktop').click(function () {

        if ($('#episode-switch-desktop').html() == "See Episode 1") {
            $('#episode-switch-desktop').html("Close");
        }
        else
        {
        $('#episode-switch-desktop').html("See Episode 1");
        }
    });
});

// Change Button Text for paragraphs
$(window).on('load', function () {
    $('#theShow').click(function () {
        if ($('#theShow').html() == "Read More") {
            $('#theShow').html("Close");
        }
        else
        {
        $('#theShow').html("Read More");
        }
    });

    $('#theArtBlock').click(function () {
        if ($('#theArtBlock').html() == "Read More") {
            $('#theArtBlock').html("Close");
        }
        else
        {
        $('#theArtBlock').html("Read More");
        }
    });

    $('#theSunset').click(function () {
        if ($('#theSunset').html() == "Read More") {
            $('#theSunset').html("Close");
        }
        else
        {
        $('#theSunset').html("Read More");
        }
    });

    $('#theNight').click(function () {
        if ($('#theNight').html() == "Read More") {
            $('#theNight').html("Close");
        }
        else
        {
        $('#theNight').html("Read More");
        }
    });

    $('#thePopUp').click(function () {
        if ($('#thePopUp').html() == "Read More") {
            $('#thePopUp').html("Close");
        }
        else
        {
        $('#thePopUp').html("Read More");
        }
    });

    $('#theSunset1').click(function () {
        if ($('#theSunset1').html() == "Read More") {
            $('#theSunset1').html("Close");
        }
        else
        {
        $('#theSunset1').html("Read More");
        }
    });
});



if ($(window).width() < 500) {
  $('#episode1-btn, #episode2-btn').click(function() {
    $('.body').addClass('noScroll');
    $(".shopping-popup").attr("scrolling","yes");
    $('.shopping-popup').addClass('scroll');
  });
};

if ($(window).width() < 500) {
  $('#close').click(function() {
    $('.body').removeClass('noScroll');
    $('.shopping-popup').addClass('scroll');
  });
};


if ($(window).width() < 1200) {
  $('#theShowBG, #theArtBlockBG, #theSunsetBG').addClass('boxShadowParagraph');
};

if ($(window).width() > 1200) {
  $('#theShowBG, #theArtBlockBG, #theSunsetBG').removeClass('boxShadowParagraph');
};

/*******Paragraph Toggles*******/

// Episode 2 Toggles

/****The Show****/
$('#theShow').click(function() {
  if ($(window).width() > 1200) {
    if ($('#theShow').html() == "Read More") {
        $('.leftParagraph').animate({width:'100%'},300);
        $('.centerParagraph, .rightParagraph').fadeOut(250).toggleClass('hideElement');
        $('.theShow-paragraph').delay(500).slideToggle(450);
    }
    else
    {
    $('.leftParagraph').delay(200).animate({width:'33.3333%'},300);
    $('.centerParagraph, .rightParagraph').delay(250).toggleClass('hideElement').delay(250).fadeIn(250);
    $('.theShow-paragraph').slideToggle(100);
    }
  }

    if ($(window).width() < 1200) {
      if ($('#theShow').html() == "Read More") {
          $('.theShow-paragraph').delay(100).slideToggle(350);
      }
      else
      {
      $('.theShow-paragraph').slideToggle(350);
      }
    }
});

  /****The Art Block****/
$('#theArtBlock').click(function() {
  if ($(window).width() > 1200) {
    if ($('#theArtBlock').html() == "Read More") {
        $('.centerParagraph').toggleClass('floatNone').animate({width:'100%'},300);
        $('.leftParagraph, .rightParagraph').fadeOut(250).toggleClass('hideElement');
        $('.theArtBlock-paragraph').delay(500).slideToggle(450);
    }
    else
    {
    $('.centerParagraph').delay(200).animate({width:'33.3333%'},300).delay(500).toggleClass('floatNone');
    $('.leftParagraph, .rightParagraph').delay(250).toggleClass('hideElement').delay(250).fadeIn(250);
    $('.theArtBlock-paragraph').slideToggle(100);
    }
  }

    if ($(window).width() < 1200) {
      if ($('#theArtBlock').html() == "Read More") {
          $('.theArtBlock-paragraph').delay(100).slideToggle(350);
      }
      else
      {
      $('.theArtBlock-paragraph').slideToggle(350);
      }
    }
});

  /****The Sunset****/
  $('#theSunset').click(function() {
    if ($(window).width() > 1200) {
      if ($('#theSunset').html() == "Read More") {
          $('.rightParagraph').animate({width:'100%'},300);
          $('.leftParagraph, .centerParagraph').fadeOut(250).toggleClass('hideElement');
          $('.theSunset-paragraph').delay(500).slideToggle(450);
      }
      else
      {
      $('.rightParagraph').delay(200).animate({width:'33.3333%'},300);
      $('.leftParagraph, .centerParagraph').delay(250).toggleClass('hideElement').delay(250).fadeIn(250);
      $('.theSunset-paragraph').slideToggle(100);
      }
    }

      if ($(window).width() < 1200) {

        if ($('#theSunset').html() == "Read More") {
            $('.theSunset-paragraph').delay(100).slideToggle(350);
        }
        else
        {
        $('.theSunset-paragraph').slideToggle(350);
        }
      }
  });


// Episode 1 Toggle
$('#theNight').click(function() {
  $('.theNight-paragraph').slideToggle("1.2s");
});

$('#thePopUp').click(function() {
  $('.thePopUp-paragraph').slideToggle("1.2s");
});

$('#theSunset-paragraph').click(function() {
  $('.theSunset1-paragraph').slideToggle("1.2s");
});


/****Switch Episodes for Desktop****/
$('#episode-switch-desktop').click(function() {
  $('.line').css("border-top", "1px solid #000");
  $('.episode1-section').slideToggle("1.2s");
});

$('#episode1-btn').click(function() {
  $('.shopping-popup').removeClass('inactive');
  $('.shopping-close').removeClass('inactive');
  $('.shopping-popup').addClass('active');
  $('.shopping-popup').animate({right: '0px'});
  $('.shopify-buy-frame--toggle').css("cssText", "right: 0px !important;");
});



$('#episode2-btn').click(function() {
  $('.shopping-popup').removeClass('inactive');
  $('.shopping-close').removeClass('inactive');
  $('.shopping-popup').addClass('active');
  $('.shopping-popup').animate({right: '0px'});
  $('.shopify-buy-frame--toggle').css("cssText", "right: 0px !important;");
});


$('#close').click(function() {
  $('.shopping-popup').removeClass('active');
  $('.shopping-popup').addClass('inactive');
  $('.shopping-close').addClass('inactive');
  $('.shopping-popup').animate({right: '-191px'});
});

$('#BG-hover').hover( function() {
    $('#BG-hover').css("opacity: 0.5 !important;");
    $('.paragraphTitle').css("color: #000 !important;");
  });
