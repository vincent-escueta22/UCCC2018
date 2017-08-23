(function($) {
    "use strict"; 
$('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })
})(jQuery);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// accordion


var accord = 1;


function showAccordian(n) {
  var i;
  var acc = document.getElementsByClassName("accordion");
  for (i = 0; i < acc.length; i++) {
          /* Toggle between adding and removing the "active" class,
          to highlight the button that controls the panel */

          /* Toggle between hiding and showing the active panel */
          var panel = acc[i].nextElementSibling;
          if (i != n-1) {
            panel.style.tranisiton = "max-height 1.0s ease-in;"
              panel.style.display = "none";
              panel.style.maxHeight = null;
              acc[i].className = acc[i].className.replace(" active", "");
          } else {
              acc[i].className += " active";
              panel.style.tranisiton = "max-height 1.0s ease-out;"
              panel.style.display = "block";
              panel.style.maxHeight = panel.scrollHeight + 50 + "px";
          } 
      // }
      // acc[i].mouseout = function(){
      //      panel.style.display = "none";
      //      panel.style.maxHeight = null;
      // }
  }
}

showAccordian(accord);

