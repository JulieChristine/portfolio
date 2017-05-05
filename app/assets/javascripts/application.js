//= require jquery
//= require bootstrap-sprockets

//= require_tree
//= require timeline

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$("header").css({
		opacity: 0.5 + (scroll/200)
	});
});
