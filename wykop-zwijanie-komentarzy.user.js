// ==UserScript==
// @name        Wykop - zwijanie komentarzy
// @namespace   huk.waw.pl
// @include     http://www.wykop.pl/link/*
// @version     1
// @grant       none
// ==/UserScript==

$(".iC>.wblock").addClass("first-comment");

$(".wblock div.author").each(function(){
	var commentsCount = $(this).parents("li.iC").children(".first-comment").siblings("ul").children("li").length;
	var currentPosition = 
	$(this).children("small.affect").after("<small><a class='toggle-comments' href=''>Zwiń/rozwiń komentarze ("+commentsCount+")</a></small>");
});

$("a.toggle-comments").on("click", function(evt){
	evt.preventDefault();
	var firstComment=$(this).parents("li.iC").children(".first-comment")
	firstComment.siblings("ul").toggle();
	window.scrollTo(0, firstComment.offset().top - $("#nav").height());
});
