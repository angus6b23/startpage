$(document).ready(function(){
	var showanswer = false; //for initial variable for calculator
	$("#searchbar").keydown(function(key){
		switch (key.which){
		//check if tab
			case 9:
				key.preventDefault();
				break;
		//check for enter
			case 13:
				var keyword = $("#searchbar").val().toString();
				$("#searchbar").select();
				window.open("https://www.google.com.hk/search?q=" + keyword, "_blank");
				break;
			default:
		}
	});
	$("#searchbar").keyup(function(key){
		switch (key.which) {
			//refer changebg to bg.js
			case 33: //pageup
				prevbg();
				break;
			case 34: //pagedown
				nextbg();
				break;
			default:
				//reset to > if showing answer
				if (showanswer){
					$("#implying").text(">");
					showanswer = false;
				}
				//instant simple calculator
				var cal = $("#searchbar").val();
				var	answer = eval(cal);
				answer = (Math.round(answer * 10000)) / 10000; //round to 4 digits
				//check for original input and answer
				if (answer.toString() !== cal.toString() && answer.toString() !== "NaN"){
					$("#implying").text(answer + "=");
					showanswer = true;
				}
				else{
				}
		}
	});
	
	$("#searchbar").focusin(function(){
		$("#implying").addClass("focus");
	});
	$("#searchbar").focusout(function(){
		$("#implying").removeClass("focus");
	});
	$("#searchbar").focus();
});