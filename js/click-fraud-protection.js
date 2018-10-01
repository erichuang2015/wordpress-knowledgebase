

var animation_timer = false;

function as1() {
	$('#animation-frame-1').fadeIn('slow').find('p').stop(true).animate({marginTop:'+=30'},1500);
	$('#animation-frame-1 p span').css('background-color','transparent');
	$('#text_cover_1').stop(true).animate({left:'900'},2500);
	//$('#animation-frame-1').fadeIn('slow').find('p').stop(true).animate({marginTop:'+=30'},1500);
	//$('#animation-frame-1 .traffic').fadeIn(2000);
	animation_timer = setTimeout('as2();',2200);
}
//as1();

function as2() {
	$('#animation-frame-5').css('z-index','1');
	$('#text_cover_2').css('background-color','transparent').stop(true).animate({left:'900'},2500);
	//$('#animation-frame-1 strong').fadeIn('slow');
	animation_timer = setTimeout('as3();',3000);
}

function as3() {
	$('#animation-frame-1 p, #animation-frame-1 .traffic').fadeOut('fast');
	$('#animation-frame-1 .funnel').fadeIn('slow');
	animation_timer = setTimeout('as4();',1500);
}

function as4() {
	$('#animation-frame-2').show();
	$('#animation-frame-1').fadeOut(1000);
	animation_timer = setTimeout('as5();',2000);
}

function as5() {
	$('#animation-frame-2 p.traffic').fadeIn('slow');
	animation_timer = setTimeout('as6();',4000);
}

function as6() {
	$('#animation-frame-3').show();
	$('#animation-frame-2').fadeOut(1000);
	animation_timer = setTimeout('as7();',2000);
}

function as7() {
	$('#animation-frame-3 img').stop(true).animate({opacity:'1',left:'+=30'},'slow');
	animation_timer = setTimeout('as8();',1000);
}

function as8() {
	$('#animation_hook').stop(true).animate({top:'-80px'},'slow');
	animation_timer = setTimeout('as9();',500);
}

function as9() {
	$('#animation_hook').stop(true).animate({top:'-30px'},'slow');
	animation_timer = setTimeout('as10();',1000);
}

function as10() {
	$('#animation_hook').stop(true).animate({top:'-95px'},'slow');
	$('#animation-frame-3 .funnel').stop(true).animate({top:'33px'},'slow');
	animation_timer = setTimeout('as11();',500);
}

function as11() {
	$('#animation_hook').stop(true).animate({top:'-200px'},'fast');
	animation_timer = setTimeout('as12();',1000);
}

function as12() {
	$('#animation-frame-4').show();
	$('#animation-frame-3').fadeOut(1000);
	animation_timer = setTimeout('as13();',1000);
}

function as13() {
	$('#animation-frame-4 p.traffic').fadeIn('slow');
	animation_timer = setTimeout('as14();',4000);
}

function as14() {
	$('#animation-frame-5').show();
	$('#animation-frame-4').fadeOut(1000);
	animation_timer = setTimeout('as15();',2000);
}

function as15() {
	$('#animation-frame-5 p').fadeIn('slow').click(function() {
		$('#animation-frame-1 p span').css('left','30px');
		$('#animation-frame-1 p').show().css("margin-top","30px");
		//$('#animation-frame-1 .traffic').fadeIn(2000);
		$('#animation-frame-1 div').hide();
		$('#animation-frame-2 p.traffic').hide();
		$('#animation-frame-3 img').css('opacity','0').css('left','0px');
		$('#animation-frame-3 .funnel').css('top','100px');
		$('#animation-frame-5').css('z-index','5').fadeOut(1000).find('p').fadeOut(1000);
		as1();
	});
}


