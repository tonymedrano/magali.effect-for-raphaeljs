var paper = new Raphael('spin', 200, 200);

selection = paper.circle(100, 100, 40);
selection.attr({
    "stroke": "#28AD50",
    "stroke-dasharray": "--",//—
    "stroke-width": 5.7,
    "stroke-linecap": "square",
    "stroke-opacity": 0.8
});

var anim = Raphael.animation({"transform": "...r360"}, 9000).repeat(Infinity);
selection.animate(anim);

selection2 = paper.circle(100, 100, 30);
selection2.attr({
    "stroke": "#28AD50",
    "stroke-dasharray": "--",//—
    "stroke-width": 5.7,
    "stroke-linecap": "square",
    "stroke-opacity": 0.8
});

var anim2 = Raphael.animation({"transform": "...r-360"}, 9000).repeat(Infinity);
selection2.animate(anim2);