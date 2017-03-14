var animateLine = function(canvas, colorNumber, pathString) {
	var line = canvas.path(pathString).attr({
		stroke: colorNumber
	});

	var length = line.getTotalLength();

	$('path[fill*="none"]').animate({
		'to': 1
	}, {
		duration: 5000,
		step: function(pos, fx) {
			var offset = length * fx.pos;
			var subpath = line.getSubpath(0, offset);
			canvas.clear();
			canvas.path(subpath).attr({
				stroke: colorNumber,
				"stroke-dasharray":"--",
				"stroke-width": '1.5'
			});
		}
	});
};

// Create path to be animated
var canvas = new Raphael('draw0', 234, 540.1);
var pathString = "M78.2,0.1c0,0,9.4,79.1,2.3,117  c-4.5,24.1-31.8,106.2-56.3,108.7c-12.7,1.3-24.2-11.9-16.5-15.5C15,207,40.2,231.1,19,261.7c-9.8,14.1-24.7,31.9-12.5,44.9  c11.3,12,53-36.8,59.2-23.8c8.6,18-40.8,23-28,49.2c14.7,30.4,21.6,39.9,48,58.5c31.3,22,147,66.2,147.2,149.5";
animateLine(canvas, "#333", pathString);