$(document).ready(function() {
		var dot=true;
	function updateDate(){
		var d = new Date();
		var hour = d.getHours();
		var minute = d.getMinutes();
		var day=d.getDate();
		var month=["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
		var weekday=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
		month = month[d.getMonth()];
		weekday = weekday[d.getDay()];
		if (hour > 12){
			var ampm = "PM";
			hour -= 12;
			}
		else{
			var ampm = "AM";
			}
		function addzero(para){
			if(para<10){
				para = "0" + para.toString();
				return para;
				}
			else {
				return para;
				}
			}
		hour = addzero(hour);
		minute = addzero(minute);
		if (dot){
			$("#time").html(hour + "." + minute + " " + ampm);
			dot = false;
			}
		else{
			$("#time").html(hour + "<span style='visibility: hidden'>.</span>" + minute + " " + ampm);
			dot = true;
			}
		$("#date").html(day + " " + month + " " + weekday);
	}
	updateDate();
	//$("#Infoboard").hide();
	setInterval(updateDate, 1000);
	//setTimeout(function(){$("#Infoboard").fadeIn(2200)}, 800);
});