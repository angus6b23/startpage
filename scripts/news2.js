var nt = new Array; //Array for titles
var url = new Array; //Array for url
var index = 0; //variable for current title
var getstat = 0; //variable for checking current status of fetching rss

function getRSS (urltorss){
	$.get(urltorss)
		.done(function(data){
		var x=0;
		var y=0;
		$(data).find("item").find("title").each(function(){
			if (x < max_heading){
				nt.push($(this).text());
				x += 1;
				}
			else{
				}
			});
		$(data).find("guid").each(function(){
			if (y < max_heading){
				url.push($(this).text());
				y += 1;
				}
			});
		getstat += 1;
		getall()
		});
	};

function getall(){
	if(getstat < rsslist.length){
		getRSS(rsslist[getstat]);
		}
	else if(getstat == rsslist.length){
		initiate();
		}
	};

getall();
	
function changemsg(index){
	$("#msgtxt").fadeOut(200)
		.delay(200)
		.queue(function(n){
			$(this).html("<a href=" + url[index] + " target='_blank'>" + nt[index] + "</a>");
			n();
			});
	$("#msgtxt").fadeIn(200);
	};

function nextmsg(){
	if (index+1 >= nt.length){
		index = 0;
		changemsg(index);
		}
	else{
		index += 1;
		changemsg(index);
		}
	};

function prevmsg(){
	if (index-1 < 0){
		index = nt.length-1;
		changemsg(index);
		}
	else{
		index -= 1;
		changemsg(index);
		}
	};
	
function initiate(){
	$(document).ready(function(){
		$("#leftarrow").removeClass("hidden");
		$("#rightarrow").removeClass("hidden");
		console.log(rsslist.length + "RSS loaded");
		changemsg(index);
		var newstimer = setInterval (nextmsg, news_interval);
		$("#msgtxt").mouseenter(function(){
			clearInterval(newstimer);
			});
		$("#msgtxt").mouseleave(function(){
			newstimer = setInterval (nextmsg, news_interval);
			});
		$("#leftarrow").click(function(){
			prevmsg();
			clearInterval(newstimer);
			newstimer = setInterval (nextmsg, news_interval);
			});
		$("#rightarrow").click(function(){
			nextmsg();
			clearInterval(newstimer);
			newstimer = setInterval (nextmsg, news_interval);
			});
		});
	};