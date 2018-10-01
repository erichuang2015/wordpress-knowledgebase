

$(document).ready(function() {
	if (window.innerWidth < 768) return false;
	
	$('#label_pointer,#label').fadeIn('opacity','0');
	
	show_label(1);
	
	$('#label_pointer,#label').animate({opacity:'1'},600);
	
	next_milestone(window.milestone=2,'slow');
	window.milestone++;
	
	timer = setInterval(function() {
		next_milestone(window.milestone,'slow');
		window.milestone++;
	}, 9000);
	
	$('#history li').click(function() {
		clearInterval(timer);
		window.milestone = parseInt($(this).attr('id').replace('milestone-',''));
		next_milestone(window.milestone,'fast');
		window.milestone += 2;
	});

	$('#action-back').click(function() {
		window.milestone-=1;
		if (window.milestone<=3) window.milestone = 3;
		next_milestone(window.milestone-2,'fast');
		clearInterval(timer);
	});

	$('#action-forward').click(function() {
		next_milestone(window.milestone-1,'fast');
		window.milestone++;
		if (window.milestone>9) window.milestone = 10;
		clearInterval(timer);
	});
});


function next_milestone(milestone,speed) {
	
	if (milestone == 1) var percentage = '0%';
	else if (milestone == 2) var percentage = '17.1%';
	else if (milestone == 3) var percentage = '31.5%';
	else if (milestone == 4) var percentage = '47%';
	else if (milestone == 5) var percentage = '57%';
	else if (milestone == 6) var percentage = '68%';
	else if (milestone == 7) var percentage = '81%';
	else if (milestone == 8) var percentage = '98%';
	else {
		clearInterval(timer);
		return false;
	}
	
	if (speed == 'fast') $('#history div').stop(true,false).animate({width:percentage},600,'swing',function(){show_label(milestone);});
	else $('#history div').animate({width:percentage},9000,'linear',function(){show_label(milestone);});
	
	
}


function show_label(milestone) {
	
	$('#label span').html($('#milestone-'+milestone+' span').html());
	$('#label_pointer div').attr('id','label_pointer-'+milestone);
}

