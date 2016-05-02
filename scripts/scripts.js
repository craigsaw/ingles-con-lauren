/*jslint browser: true*/
/*global $, click, jQuery, alert, console*/


//add scrollspy to <body>
$('body').scrollspy({target: "#jsTarget", offset: 54});

//add scrolling animation to all navbar links
$('#main-nav a').on('click', function (event) {
  'use strict';
  console.log('clicked one of the nav buttons');

  //prevent default nav click behavior/styling
  event.preventDefault();

  //Store hash
  var hash = this.hash;

  //Using Jquery's animate() method to add smooth page scroll
  //the optional number- 800 - specifies the number of milliseconds it takes to scroll to the specified area (animation speed)
  $('html, body').animate({
    scrollTop: $(hash).offset().top - 53
  }, 800, function () {


  //Add hash # to url when done scrolling (default click behavior)
    window.location.hash = hash;
  }
     );
});


//////////////////
//the following is to make the miniature nav collapse on click
///////////////////

//$('.nav a').on(click, function () {
//  'use strict';
//  $('.navbar-collapse').collapse('hide');
//});