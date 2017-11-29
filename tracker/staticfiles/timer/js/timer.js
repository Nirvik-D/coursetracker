var clock;
var c;
var start_time_day = 0;
var start_time_month = 0;
var start_time_year = 0;
var start_time_hours = 0;
var start_time_minutes = 0;
var start_time_seconds = 0;
var D;
var M;
var Y;
var h;
var m;
var s;
var timeString;

var playpause1 = true;

$(document).ready(function() {
	$("#id_course option[value='']").remove();
	
	clock = $('.clock').FlipClock({
		clockFace: 'HourlyCounter',
		countdown: false,
		autoStart: false
	});
	
	document.getElementById('playpause').innerText = 'Start';
	
	// Disable the stop button if start button is available
	$("#stopbutton").hide();	
	
	$('.switch').click(function(e) {
		// Prevent the page from refreshing
		e.preventDefault();
		
		// Here we toggle playpause from true to false and vice versa
		playpause1 = !playpause1;
		if(playpause1)
		{
			document.getElementById('playpause').innerText = 'Start';
			clock.stop();	
		}
		else
		{
			// document.getElementById('playpause').innerText = 'Pause Timer';
			
			// Disable the button after being clicked once
			$("#playpause").hide();
			
			// Disable the stop button if start button is available
			$("#stopbutton").show();
			
			clock.start();
			c = new Date();
			start_time_day = c.getDate();
			D = start_time_day.toString();
			// alert(start_time_day);
			start_time_month = c.getMonth() + 1;
			M = start_time_month.toString();
			// alert(start_time_month);
			start_time_year = c.getFullYear();
			Y = start_time_year.toString();
			// alert(start_time_year);
			start_time_hours = c.getHours();
			h = start_time_hours.toString();
			// alert(start_time_hours);
			start_time_minutes = c.getMinutes();
			m = start_time_minutes.toString();
			// alert(start_time_minutes);
			start_time_seconds = c.getSeconds();
			s = start_time_seconds.toString();
			// alert(start_time_seconds);
			
			timeString = M.concat("-", D, "-", Y, " ", h, ":", m, ":", s);
			
			$.ajax({
				// points to the url where your data will be posted
				url:"",
				// post for security reason
				type: "POST",
				// data that you will like to return 
				data: {
						start_time : timeString,
						csrfmiddlewaretoken : $('input[name=csrfmiddlewaretoken]').val()
					  },
				// what to do when there is an error
				error:function (xhr, textStatus, thrownError){
					alert("An error occurred: " + xhr.status + " " + xhr.statusText);
				}
			});		
		}
	});
	
	
	
	$("#id_course").change(function(){
		
		clock = $('.clock').FlipClock({
			clockFace: 'HourlyCounter',
			countdown: false,
			autoStart: false
		});		
		
		document.getElementById('playpause').innerText = 'Start';

		// Enable the button after being clicked once
		$("#playpause").show();
		
		// Disable the stop button if start button is available
		$("#stopbutton").hide();
			
		playpause1 = true;	
    });
});