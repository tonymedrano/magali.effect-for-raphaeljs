var Magali;
(function (Magali) {
	(function(effect) {
		
var move = (function() {
		function move(name){
			this.name = name;
		}
		move.prototype.left = function () {
			console.log("Moving to left...");
		};
		return move;
	})();

	Magali.move = move;

	})(Magali.effect || (Magali.effect = {}));
	var effect = Magali.effect;
})(Magali || (Magali = {}));