var nt = new Array;
var url = new Array;
var index = 0;
var count = 0;
var getstat = 0;
function getRSS (urltorss){
	$.get(urltorss, function(data){
		var x=0;
		var y=0;
		$(data).find("item").find("title").each(function(){
			if (x<5){
				nt.push($(this).text());
				x += 1;
				}
			else{
				}
			});
		$(data).find("guid").each(function(){
			if (y<5){
				url.push($(this).text());
				y += 1;
				}
			});
		});
	};

function getall(){
	$.when(getRSS("http://rthk.hk/rthk/news/rss/c_expressnews_clocal.xml")).done(
		getRSS('http://rthk.hk/rthk/news/rss/c_expressnews_cinternational.xml')).done(
		getRSS("http://rthk.hk/rthk/news/rss/c_expressnews_greaterchina.xml"));
	};

$.when(getall()).done(function(){
	console.log("success");
	});

function changemsg(index){
	$("#message").fadeOut(200)
		.delay(200)
		.queue(function(n){
			$(this).html("<a href=" + url[index] + " target='_blank'>" + nt[index] + "</a>");
			n();
			});
	$("#message").fadeIn(200);
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

$(document).ready(function(){

	function checklength(){
		setTimeout(function(){
			console.log("1000passed");
			if (nt.length >= 1){
				return 0;
				}
			else{
				return 0;
				}
		}, 100);
	}
	while (count<=5 && getstat==0){
		getstat = checklength();
		if (getstat = 0){
			count += 1;
			console.log("count+1");
			}
		else if (getstat = 1){
			$("#leftarrow").removeClass("hidden");
			$("#rightarrow").removeClass("hidden");
			console.log(nt);
			console.log(url);
			changemsg(index);
			setInterval(function(){
				nextmsg();
				}, 3900);
			}
		}
	if (count >= 5){
		$("#message").html("Timeout");
		}
	})