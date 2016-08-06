var title = new Array;
var url = new Array;
var x=0;
$(document).ready(function(){
$.get("http://rthk.hk/rthk/news/rss/c_expressnews_clocal.xml", function (data) {
	$(data).find("title").each(function(){
		title.push($(this).text());
		url.push($(this).find("guid").text());
		console.log (title[x]);
		if (x <5){
			$(".news").append("<div style='display:inline-block; margin-right:5px'>" + "<a href=" + url[x] + ">" + title[x] + "</a></div>");
			};
		x += 1;
		});
	});
});
