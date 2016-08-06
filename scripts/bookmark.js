$(document).ready(function(){
	$("#bookmark").easytabs({
		animationSpeed: 200,
		});
	$("#links").mousewheel;
	$("#links").perfectScrollbar();
	$("#bookmark ul li a").mouseenter(function(){
		this.click();
		});
	function addcolor(target, hc){
		$(target).mouseenter(function(){
			$(this).addClass("hover");
			$(this).animate({
				borderBottomColor: hc,
				borderTopColor: hc,
				borderRightColor: hc,
				borderLeftColor: hc,
				}, 400);
			$(".hover div").animate({
				color: hc,
				}, 400);
			});
		$(target).mouseleave(function(){
			$(this).animate({
				borderBottomColor: "#AAAAAA",
				borderTopColor: "#AAAAAA",
				borderRightColor: "#AAAAAA",
				borderLeftColor: "#AAAAAA",
				}, 400);
			$(".hover div").animate({
				color: "#AAAAAA",
				}, 400);
			$(this).removeClass("hover");
			});
		}
	addcolor("#tab-general .outter", colour_general);
	addcolor("#tab-4chan .outter", colour_4chan);
	addcolor("#tab-server .outter", colour_server);
	addcolor("#tab-bank .outter", colour_bank);
	addcolor("#tab-shop .outter", colour_shop);
	addcolor("#tab-download .outter", colour_download);
	addcolor("#tab-art .outter", colour_art);
	addcolor("#tab-travel .outter", colour_travel);
	}
);