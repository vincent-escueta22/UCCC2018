//jQuery to collapse the navbar on scroll
                                    $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var top2 = $('#about').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos < top2 - 50) {
    $('.navbar').css('background-color', 'transparent');
    $('.navbar').css('box-shadow', '0 0 0 0 transparent');
    // $('.navbar-static').css('background-color', '#fff');
    // $('.navbar-static').css('box-shadow', '0 0 1px 1px  #ddd');
  } else {
    // $('.navbar').css('background-color', '#3B7EA1');
    //  $('.navbar').css('opacity', '1');
    //  $(' .navbar-brand').css('color', )
    $('.navbar').css('background-color', '#fff');
    $('.navbar').css('box-shadow', '0 0 1px 1px  #ddd');

  }
  $('.navbar-static').css('background-color', '#fff');
});

