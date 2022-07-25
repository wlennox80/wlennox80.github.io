// supported languages
var langs = [ 'en-us', 'fr-ca' ];
var path = location.pathname;
var curLang = "en-us";
var lang;

// $(document).ready(function() {
// 	for (var i = 0; i < langs.length; i++) {
// 		if (path.indexOf('/' + langs[i] + '/') != -1) {
// 			curLang = langs[i];
// 		}
// 	}
// });


// $(document).ready(function() { 
// 	// set language selector current language
// 	$('select#lang').val(curLang);
// 	$('select#lang').css('visibility','visible');

// 	// process language change
// 	$('select#lang').change(function() {
// 		lang = $(this).val();
// 		localStorage.setItem('lang', lang);
// 		use_lang(lang);
// 	});
// });


 //detects keystroke in the search input and redirects the query using MadCap's default search 
//  function search(query) {
// 	if(addEventListener.key === 'Enter') {
// 	  window.location = `${location.href.substring(0, location.href.lastIndexOf("/"))}`+"/search.html?q=" + query.value
// 	  return false;     
// 	}
//   }

  function search(query) {
	if(addEventListener.key === 'Enter') {
	  window.location = `${location.href.substring(0, location.href.lastIndexOf("/"))}/Default.htm#cshid=&searchQuery=${query.value}`
	  return false;     
	}
  }