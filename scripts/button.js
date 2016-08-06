$(document).ready(function(){
	$(".topbut").mouseenter(function(){
		$(this).animate({
			color: "rgba(170, 170, 170, 1.0)",
		}, 200)
	});
	$(".topbut").mouseleave(function(){
		$(this).css({
			color: "rgba(170, 170, 170, 0.6)",
		})
	});
});