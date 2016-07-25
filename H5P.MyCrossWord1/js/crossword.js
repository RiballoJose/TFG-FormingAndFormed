(function (MyCrossword1, EventDispatcher, $) {
	
	MyCrossword1.Crossword = function (parameters, id) {
		var self = this;
		
		EventDispatcher.call(self);
		
		alert("En constructor de Crossword");
	}
	
	MyCrossword1.Crossword.prototype = Object.create(EventDispatcher.prototype);
	MyCrossword1.Crossword.prototype.constructor = MyCrossword1.Crossword;
}