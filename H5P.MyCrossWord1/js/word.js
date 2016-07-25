(function (MyCrossword1, EventDispatcher, $) {
	
	MyCrossword1.Word = function (parameters, id) {
		var self = this;
		
		EventDispatcher.call(self);
		
		alert("En constructor de word");
		
		var word = parameters.word_text;
		var clue = parameters.clue;
		
		alert(word+" con clue "+clue);
	}
	
	MyCrossword1.Word.prototype = Object.create(EventDispatcher.prototype);
	MyCrossword1.Word.prototype.constructor = MyCrossword1.Word;
}