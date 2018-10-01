
// Content personalisation animation
function cp0() {
	$('#section-content_personalisation').find('#visitor-1,#visitor-2,.hero-5,.hero-6,.hero-7,.hero-11,.hero-12,.hero-13').animate({opacity:0},'slow');
	$('#section-content_personalisation').find('.hero-2,.hero-3,.hero-4,.hero-8,.hero-9,.hero-10').animate({opacity:0},'slow',function() { $(this).css({marginLeft:'100px'}); });
	setTimeout(function(){cp1()},1000);
}
function cp1() {
	$('#section-content_personalisation .hero-5,#visitor-1').animate({opacity:1},'slow');
	setTimeout(function(){cp2()},500);
}
function cp2() {
	$('#section-content_personalisation .hero-2').animate({opacity:1,marginLeft:'0px'},'slow');
	setTimeout(function(){cp3()},1000);
}
function cp3() {
	$('#section-content_personalisation .hero-6').animate({opacity:1},'slow');
	setTimeout(function(){cp4()},500);
}
function cp4() {
	$('#section-content_personalisation .hero-3').animate({opacity:1,marginLeft:'0px'},'slow');
	setTimeout(function(){cp5()},1000);
}
function cp5() {
	$('#section-content_personalisation .hero-7').animate({opacity:1},'slow');
	setTimeout(function(){cp6()},500);
}
function cp6() {
	$('#section-content_personalisation .hero-4').animate({opacity:1,marginLeft:'0px'},'slow');
	setTimeout(function(){cp7()},5000);
}
function cp7() {
	$('#section-content_personalisation').find('#visitor-1,.hero-5,.hero-6,.hero-7').animate({opacity:0},'slow');
	$('#section-content_personalisation').find('.hero-2,.hero-3,.hero-4').animate({opacity:0},'slow',function() { $(this).css({marginLeft:'100px'}); });
	setTimeout(function(){cp8()},1000);
}
function cp8() {
	$('#section-content_personalisation .hero-11, #visitor-2').animate({opacity:1},'slow');
	setTimeout(function(){cp9()},500);
}
function cp9() {
	$('#section-content_personalisation .hero-8').animate({opacity:1,marginLeft:'0px'},'slow');
	setTimeout(function(){cp10()},1000);
}
function cp10() {
	$('#section-content_personalisation .hero-12').animate({opacity:1},'slow');
	setTimeout(function(){cp11()},500);
}
function cp11() {
	$('#section-content_personalisation .hero-9').animate({opacity:1,marginLeft:'0px'},'slow');
	setTimeout(function(){cp12()},1000);
}
function cp12() {
	$('#section-content_personalisation .hero-13').animate({opacity:1},'slow');
	setTimeout(function(){cp13()},500);
}
function cp13() {
	$('#section-content_personalisation .hero-10').animate({opacity:1,marginLeft:'0px'},'slow');
	setTimeout(function(){cp0()},5000);
}
cp0();