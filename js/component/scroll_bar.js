(function($) {
	$.fn.tinyscrollbar = function(c) {
		var d = {
			axis: 'y',
			wheel: 40,
			scroll: true
		};
		var c = $.extend(d, c);
		var e = $(this);
		var f = {
			obj: $('.viewport', this)
		};
		var g = {
			obj: $('.overview', this)
		};
		var h = {
			obj: $('.scrollbar', this)
		};
		var i = {
			obj: $('.track', h.obj)
		};
		var j = {
			obj: $('.thumb', h.obj)
		};
		var k = c.axis == 'x',
			sDirection = k ? 'left' : 'top',
			sSize = k ? 'width' : 'height';
		var l = 0,
			iPosition = {
				start: 0,
				now: 0
			},
			iMouse = {};
		if (this.length > 1) {
			this.each(function() {
				$(this).tinyscrollbar(c)
			});
			return this
		}
		this.initialize = function() {
			this.update();
			setEvents()
		};
		this.update = function() {
			f[c.axis] = k ? f.obj[0].offsetWidth : f.obj[0].offsetHeight;
			g[c.axis] = k ? g.obj[0].scrollWidth : g.obj[0].scrollHeight;
			g.ratio = f[c.axis] / g[c.axis];
			h.obj.toggleClass('disable', g.ratio >= 1);
			iMouse['start'] = j.obj.offset()[sDirection];
			i.obj.css(sSize, f[c.axis]);
			i[c.axis] = k ? i.obj[0].offsetWidth : i.obj[0].offsetHeight;
			j[c.axis] = Math.min(i[c.axis], Math.max(0, (i[c.axis] * g.ratio)));
			j.obj.css(sSize, j[c.axis]);
			h.ratio = g[c.axis] / i[c.axis]
		};

		function setEvents() {
			j.obj.bind('mousedown', start);
			i.obj.bind('mouseup', drag);
			if (c.scroll && this.addEventListener) {
				e[0].addEventListener('DOMMouseScroll', wheel, false);
				e[0].addEventListener('mousewheel', wheel, false)
			} else if (c.scroll) {
				e[0].onmousewheel = wheel
			}
		};

		function start(a) {
			iMouse.start = k ? a.pageX : a.pageY;
			iPosition.start = parseInt(j.obj.css(sDirection));
			$(document).bind('mousemove', drag);
			$(document).bind('mouseup', end);
			j.obj.bind('mouseup', end);
			return false
		};

		function wheel(a) {
			if (!(g.ratio >= 1)) {
				//a = $.event.fix(a || window.event);
//				a = window.event;
//				var b = a.wheelDelta ? a.wheelDelta / 120 : -a.detail / 3;
				var b =(a.wheelDelta == 120 || a.detail == -3)?1:-1;
				
				l -= b * c.wheel;
				l = Math.min((g[c.axis] - f[c.axis]), Math.max(0, l));
				j.obj.css(sDirection, l / h.ratio);
				g.obj.css(sDirection, -l);
				a.preventDefault()
			}
		};

		function end(a) {
			$(document).unbind('mousemove', drag);
			$(document).unbind('mouseup', end);
			j.obj.unbind('mouseup', end);
			return false
		};

		function drag(a) {
			if (!(g.ratio >= 1)) {
				iPosition.now = Math.min((i[c.axis] - j[c.axis]), Math.max(0, (iPosition.start + ((k ? a.pageX : a.pageY) - iMouse.start))));
				l = iPosition.now * h.ratio;
				g.obj.css(sDirection, -l);
				j.obj.css(sDirection, iPosition.now)
			}
			return false
		};
		return this.initialize()
	}
})(jQuery);