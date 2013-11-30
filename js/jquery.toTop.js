$(function() {
	$.fn.toTop = function(options) {
		var defaults = {
			showHeight: 150,
			speed: 1000
		}

		var options = $.extend(defaults, options);
		$('body').append('<div id="toTop">返回</div>');

		var $toTop = $('#toTop');

		$(window).scroll(function(event) {
			var scrollTop = $(this).scrollTop();
			if(scrollTop >= options.showHeight) {
				$toTop.fadeIn(1500)
			} else {
				$toTop.fadeOut(1500);
			}
		});

		$toTop.hover(function() {
			$(this).addClass('cur');
		}, function() {
			$(this).removeClass('cur');
		});

		$toTop.click(function(event) {
			$('html,body').animate({scrollTop: 0}, options.speed);
		});
	}
});