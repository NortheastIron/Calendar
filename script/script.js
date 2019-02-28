$(document).ready( function(){


	calendar();
	
	 


});



function calendar(){
	var date = new Date();
	var year_now = date.getFullYear();
	var month_number_now = date.getUTCMonth();
	var today = date.getDate();

	makeCalendar(year_now,month_number_now,today)	;
	var new_month_number = month_number_now , new_year = year_now;

	$('.next').click(function(){

		if(new_month_number != 11) {
		new_month_number++;
		}	
		else{
			new_month_number = 0;
			new_year++;
		} 
		if((new_month_number == month_number_now)&&(new_year == year_now)){
			makeCalendar(new_year,new_month_number,today);
		}
		else{
			makeCalendar(new_year,new_month_number);
		}
		
	});
	
	$('.prev').click(function(){
		if(new_month_number == 0){
			new_month_number = 11;
			new_year--;
		}
		else{
			new_month_number--;
		}
		if((new_month_number == month_number_now)&&(new_year == year_now)){
			makeCalendar(new_year,new_month_number,today);
		}
		else{
			makeCalendar(new_year,new_month_number);
		}
	});

	function makeCalendar(year,month_number,today) {

		var first_day = new Date(year,month_number,1);
		var first_wday = first_day.getDay();
	
		if(first_wday == 0){
			first_wday = 7;
		}
		var oneHour = 1000 * 60 * 60; 
		var oneDay = oneHour * 24; 
		var month = new Date(year, month_number, 1);
		var next_month = new Date(year, month_number + 1, 1);
		var mount_last_date = Math.ceil((next_month.getTime() - first_day.getTime() - oneHour)/oneDay);
		var mount_array = new Array ("January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
		var td_d = document.getElementsByTagName("td");
		var last_td_d;
		console.log(first_wday);
		for (var i = 1;i < 8;i++) {
		
			if (i == first_wday) {
				console.log("tyt");
				for (var j=0;j<mount_last_date;j++){
					td_d[6+i+j].innerHTML = '<a href="#">'+(1+j)+'</a>';
					if(td_d[6+i+j].classList.contains('another-month')){
						td_d[6+i+j].classList.remove('another-month');
					}
				}
				last_td_d = 6 + i + mount_last_date;
			}
		}
		var next_month_number = 1;

		for(var i = last_td_d; i < 49; i++){
			td_d[i].innerHTML = '<a href="#">'+next_month_number+'</a>';
			td_d[i].classList.add('another-month');
			next_month_number++;
		}

		if(first_wday>1){
			var previous_month_number;

			if(month_number == 0){
				previous_month_number = 11;
				previous_month_year = year - 1;
			}
			else{
				previous_month_number = month_number - 1;
				previous_month_year = year;
			}
			var previous_month_first_day = new Date(previous_month_year,previous_month_number,1);
	
			var previous_mount_last_date = Math.ceil((month.getTime() - previous_month_first_day.getTime() - oneHour)/ oneDay);

			var start_calendar_day_number = 7;
			var temp = first_wday - 2;

			for(var i = start_calendar_day_number; i < (start_calendar_day_number + first_wday -1); i++){
				td_d[i].innerHTML = '<a href="#">'+(previous_mount_last_date - temp)+'</a>';
				td_d[i].classList.add('another-month');
				temp--;
			}
		}	

		if(today!=undefined){
		td_d[6 + first_wday + today - 1].classList.add('today-month');
		}
		else{
			if(document.querySelector('.today-month')!=null)
			document.querySelector('.today-month').classList.remove('today-month');
		}
		var mounth_year = document.getElementById('month_year');
		month_year.innerHTML = mount_array[month_number] + ' ' + year;
	
	}
}


