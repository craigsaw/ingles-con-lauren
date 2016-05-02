/*global console, $,  escape */

function translateText(response) {
  'use strict';
  document.getElementById("translation").innerHTML = response.data.translations[0].translatedText;
  console.log("the callback function has run");
}

function getInput() {
  'use strict';
  var source = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyCKKGzlWZIz7b0_CxjRsEDzqzqZOrStTYU&source=es&target=en&callback=translateText&q=' + encodeURI(document.getElementById("sourceText").value);
  return source;
}

$('#translateBtn').click(function () {
  'use strict';
  var newScript = document.createElement('script');
  newScript.type = 'text/javascript';
  newScript.src = getInput();
  
  //this part actually appends the script to the head
  document.getElementsByTagName('head')[0].appendChild(newScript);
});
