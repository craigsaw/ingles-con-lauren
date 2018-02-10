//jslint browser: true
//global $, click, jQuery, alert, console;


//this is the code that undoes the problem in IE with the jumping

var selectors = {
    inicioTab : "#inicioTab",
    detallesTab : "#detallesTab",
    filosofiaTab : "#filosofiaTab",
    contactoTab : "#contactoTab"
};

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
      
      
      
    if($(selectors.inicioTab).hasClass("active")){
        $(selectors.inicioTab).css('color', '#999 !important');
        $(selectors.inicioTab).css('color', '#999');
        $(selectors.inicioTab).css('color', '#999');
        $(selectors.inicioTab).css('color', '#999');
        
    }
    //Add hash # to url when done scrolling (default click behavior)
    return window.history.pushState(null, null, hash);
      
  });
});


function getYearsTeaching() {
		return document.write(new Date().getFullYear());
}

function getYearsTeachingHispanohablantes() {
		return document.write((new Date()).getFullYear());
}
//// Add scrollspy to <body>
//$('body').scrollspy({target: "#jsTarget", offset: 54});
//
//// Add smooth scrolling on all links inside the navbar
//$("#main-nav a").on('click', function (event) {
//  'use strict';
//  event.preventDefault();
//  
//  var hash = this.hash;
//
//  $('html, body').animate({
//    scrollTop: $(hash).offset().top - 53
//  }, 800, function () {
//
//  // Add hash (#) to URL when done scrolling (default click behavior)
//    window.location.hash = hash;
//  });
//});



