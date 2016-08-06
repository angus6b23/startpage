var generate = Math.floor(Math.random()*bglist.length); //generate 0 to lenght of bglist

function changebg(){
	$("body").css("background-image", "url(bg/" + bglist[generate] + ")");
}

$(document).ready(function(){
	changebg();
});

function nextbg(){
	if (generate+1 < bglist.length){
		generate++;
		changebg();
	}
	else{
		generate = 0;
		changebg();
	}
};

function prevbg(){
	if (generate-1 >= 0){
		generate--;
		changebg();
	}
	else{
		generate = bglist.length -1;
		changebg();
	}
};
