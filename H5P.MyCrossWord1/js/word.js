(function (MyCrossWord1, EventDispatcher, $) {
	
	MyCrossWord1.Word = function (parameters, id) {
		var self = this;
		
		EventDispatcher.call(self);
				
		var word = parameters.word_text;
		var clue = parameters.clue;
		var length = word.length;
		
		self.getWord = function () {
			return word;
		};
		self.getClue = function () {
			return clue;
		};
		self.getLength = function () {
			return length;
		}
	}
	
	MyCrossWord1.Word.prototype = Object.create(EventDispatcher.prototype);
	MyCrossWord1.Word.prototype.constructor = MyCrossWord1.Word;
	
})(H5P.MyCrossWord1, H5P.EventDispatcher, H5P.jQuery);