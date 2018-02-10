//jslint browser: true
//global $, click, jQuery, alert, console;

$('body').scrollspy({target: "#jsTarget", offset: 54});

$('#main-nav a').on('click', function (event) {
  'use strict';
  console.log('clicked one of the nav buttons');
  event.preventDefault();
  //Store the id that the clicked nav button points to
  var hash = this.hash;

  //800  milliseconds of the animation speed
  return $('html, body').animate({
    scrollTop: $(this.hash).offset().top - 53
  }, 800, function () {
     
    //Add hash # to url when done scrolling (default click behavior)
    return window.history.pushState(null, null, hash);
      
  });
});