


// Ripple click effect
var parent, ink, d, x, y;
$(".ripple").click(function(e){
	parent = $(this);
	//create .ink element if it doesn't exist
	if (parent.find(".ink").length == 0)
		parent.prepend("<em class='ink'></em>");

	ink = parent.find(".ink");
	//incase of quick double clicks stop the previous animation
	ink.removeClass("animate");

	//set size of .ink
	if(!ink.height() && !ink.width()) {
		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
		d = Math.max(parent.outerWidth(), parent.outerHeight());
		ink.css({height: d, width: d});
	}

	//get click coordinates
	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
	x = e.pageX - parent.offset().left - ink.width()/2;
	y = e.pageY - parent.offset().top - ink.height()/2;

	//set the position and add class .animate
	ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});


// Fixed navbar on scroll
$(document).ready(function() {
	if ($('#navbar_header').length < 1) return false;
	if ($(window).scrollTop() >= 500) {
		window.fixed_nav = true;
		window.fixed_nav_closing = null;
		$('#navbar_header').addClass('fixed');
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 500 && (!window.fixed_nav || window.fixed_nav_closing)) {
			$('#navbar_header').stop();
			if (!window.fixed_nav_closing) $('#navbar_header').css({top:'-67px'});
			$('#navbar_header').addClass('fixed').animate({top:'0px'},600,'easeOutQuart');
			window.fixed_nav = true;
			window.fixed_nav_closing = null;
		}
		else if ($(window).scrollTop() < 50 && window.fixed_nav) {
			$('#navbar_header').stop().css({top:'0px'}).removeClass('fixed');
			window.fixed_nav = null;
			window.fixed_nav_closing = null;
		}
		else if ($(window).scrollTop() < 500 && window.fixed_nav) {
			window.fixed_nav_closing = true;
			$('#navbar_header').stop().animate({top:'-67px'},400,'easeOutQuart',function() {
				$('#navbar_header').css({top:'0px'}).removeClass('fixed');
				window.fixed_nav = null;
				window.fixed_nav_closing = null;
			});
		}
	});
});


// Page loading
$(document).ready(function() {
	$('#page_loading').animate({width:'100%'},800,'swing',function(){$('#page_loading').animate({opacity:0},400,function(){$('#page_loading').css({display:'none'});});});
	window.onbeforeunload = function(){
		$('#page_loading').css({display:'block',opacity:1,width:'0%'}).animate({width:'25%'},200,'swing',function(){$('#page_loading').animate({width:'35%'},4000,'linear',function(){setTimeout(function(){$('#page_loading').fadeOut('slow')},5000)});});
	}
});


// FAQs behaviour
$(document).ready(function() {
	$('#section-faqs DT').click(function() {
		$(this).next().slideToggle(400);
		$(this).find('span').fadeToggle(400);
	});
	$('#cta_faqs H5').click(function() {
		$(this).next().slideToggle(400);
		$(this).parent().toggleClass('open');
	});
});


// Share box popout
$(document).ready(function() {
	if ($('#share').length > 0) {
		$(window).scroll(function() {
			if ($(window).scrollTop() + $(window).height() > ($(document).height()*.7)) {
				$('#share').animate({opacity:1,left:'0px'},1300,'easeOutBounce');
			}
		});
		$('#share span').click(function() {
			$('#share').remove();
		});
	}
});


// Video functions
function change_window(video,new_window,callback,callback_delay) {
	if (!callback_delay) callback_delay = 0;

	if ($(video).find('.active_window').length > 0) {
		$(video).find(new_window).css({opacity:1});
		$(video).find('.active_window').animate(
			{opacity:0},
			100,
			function() {
				$(video).find(new_window).css({zIndex:3}).addClass('active_window');
				$(this).css({zIndex:2,top:0}).removeClass('active_window');
				if (callback) {
					if (callback_delay) {
						setTimeout(
							function() {
								window[callback]();
							},
							callback_delay
						);
					}
					else {
						window[callback]();
					}
				}
			}
		);
	}
	else {
		$(video).find(new_window).animate({opacity:1},500,'linear');
		$(video).find(new_window).css({zIndex:3}).addClass('active_window');
		if (callback) {
			if (callback_delay) {
				setTimeout(
					function() {
						window[callback]();
					},
					callback_delay
				);
			}
			else {
				window[callback]();
			}
		}
	}
	return true;
}


function scroll_window(video,scrollto,callback,callback_delay) {
	if (!callback_delay) callback_delay = 0;

	if (!scrollto) scrollto = 0;
	$(video).find('.video_window.active_window').animate(
		{top:(scrollto*(-1))+'%'},
		'slow',
		'swing',
		function() {
			if (callback) {
				if (callback_delay) {
					setTimeout(function() {
						window[callback]();
					},callback_delay);
				}
				else {
					window[callback]();
				}
			}
		}
	);
	return true;
}

function show_click(video,callback) {
	$(video).find('.video_click').css({opacity:.5}).animate(
		{opacity:0},
		300,
		'swing',
		function() {
			if (callback) {
				window[callback]();
			}
		}
	);
	return true;
}

function enter_text(text,callback,callback_delay,letter) {
	if (!callback_delay) callback_delay = 0;
	if (!letter) letter = 0;
	if (letter >= $(text).find('div').length) {
		 if (callback) {
		 	if (callback_delay) {
		 		setTimeout(
		 			function() {
		 				window[callback]();
		 			},
		 			callback_delay
		 		);
		 	}
		 	else {
		 		window[callback]();
		 	}
		}
		return true;
	}
	else {
		$(text).find('div:eq('+letter+')').html($(text).find('div:eq('+letter+')').attr('title')).css({borderRightWidth:'1px'});
		setTimeout(
			function() {
				$(text).find('div:eq('+letter+')').css({borderRightWidth:'0'});
				enter_text(text,callback,callback_delay,letter+1);
			},
			50
		);
		return false;
	}
}


// Resource
$(document).ready(function() {
	if ($('#resource').length > 0) {
		$('#resource').animate({height: $('#resource').prop('scrollHeight')},'slow','easeOutBounce',function() { $('#resource').css('height','auto'); });
		$('#resource_close').click(function() {
			$('#resource').animate({height: '0px' },'slow','easeOutBounce');
			return false;
		});
	}
});


// On browser tab change, update the tab title
/*
$(window).on('blur', function() {
	$('title').attr('original',$('title').html()).html("Bunting");
});
$(window).on('focus', function() {
	if ($('title').attr('original')) $('title').html($('title').attr('original'));
});
*/


$(document).ready(function() {
	$('body').click(function(e) {
		if ($(e.target).closest('#navigation_option_1 > .dropdown-toggle').length === 0) {
			if ($('#navigation_option_1').hasClass('open')) $('body').removeClass('nav_open');
		}
		else {
			if (!$('#navigation_option_1').hasClass('open')) $('body').addClass('nav_open');
			else $('body').removeClass('nav_open');
		}
	});
});


// Submit overlay
$(document).ready(function() {
	$('form.submit_overlay').submit(function() {
		$('body').append('<div class="overlay"></div>');
	});
});


// Safe mail insertion
$(document).ready(function() {
	$add = 'hello'; $add += '@'; $add += 'bunti.'; $add += 'ng';
	$('.email a').attr('href','mail'+'to:'+$add).html($add);
});


// Customer account redirect
$(document).ready(function() {
	$('.user_login').click(function() {
		var subdomain = prompt('Enter your Bunting account subdomain:');
		if (!subdomain) return false;
		window.location.href = "https://"+subdomain+".bunting.com";
		return false;
	});
});


// Prepare cut n paste code
$(document).ready(function() {
	$('.copy_window').focus(function() {
		$(this).select();
		// Work around Chrome's little problem
		$(this).mouseup(function() {
			// Prevent further mouseup intervention
			$(this).onmouseup = null;
			return false;
		});
	});
});


// Footer background color
/*
$(document).ready(function() {
	window.onscroll = function() {
		if ((window.innerHeight + window.scrollY) < document.body.offsetHeight-30) $('#footer').addClass('dark');
		else $('#footer').removeClass('dark');
	};
	if ((window.innerHeight + window.scrollY) < document.body.offsetHeight-30) $('#footer').addClass('dark');
});
*/


// Popup
function popup(url,width,height) {

	// URL
	if (typeof url === 'object') url = $(url).attr('href');

	// Width
	if (parseInt(width) && String(width).slice(-1) == '%') {
		width = parseInt(width);
		if (width > 95) width = 95;
		if (width < 10) width = 10;
		width = (window.innerWidth/100)*width;
	}
	else {
		width = parseInt(width);
		if (!width) width = 620;
		if (width < 10) width = 10;
		if (width > window.innerWidth*.95) width = window.innerWidth*.95;
	}
	width = Math.round(width);

	// Height
	if (parseInt(height) && String(height).slice(-1) == '%') {
		height = parseInt(height);
		if (height > 95) height = 95;
		if (height < 10) height = 10;
		height = (window.innerHeight/100)*height;
	}
	else {
		height = parseInt(height);
		if (!height) height = 700;
		if (height < 10) height = 10;
		if (height > window.innerHeight*.95) height = window.innerHeight*.95;
	}
	height = Math.round(height);

	// Show popup
	var id = new Date().getTime();
	var new_window = window.open(url, id, 'toolbar=no,scrollbars=yes,location=no,statusbar=no,menubar=no,resizable=no,width='+width+',height='+height+',left='+(($(window).width()/2)-(width/2))+',top='+(($(window).height()/2)-(height/2)));

	return new_window;
}


// Email validation
function is_valid_email_address(email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}


// URL validation
function is_valid_url(url) {
	return url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,20}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/);
}

var isMobileMenuShowing = false;


$(".mobile-categories-menu-item").click(function(){
	if (isMobileMenuShowing){
		$(".close-button").hide();
		$(".show-button").show();
		$(".mobile-categories-menu").hide();
	}
	if (!isMobileMenuShowing){
		$(".close-button").show();
		$(".show-button").hide();
		$(".mobile-categories-menu").show();
	}
	isMobileMenuShowing = !isMobileMenuShowing;
});

$(window).resize(function(){
	console.log(window.innerWidth)
	if (window.innerWidth >= 810){
		isMobileMenuShowing = false;
		$(".close-button").show();
		$(".show-button").hide();
		$(".mobile-categories-menu").show();
	}
	if (window.innerWidth < 810){
		isMobileMenuShowing = true;
		$(".close-button").hide();
		$(".show-button").show();
		$(".mobile-categories-menu").hide();
	}

});
