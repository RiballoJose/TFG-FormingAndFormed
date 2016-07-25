var H5P = H5P || {};

H5P.MyCrossWord1 = (function (EventDispatcher, $) {
	
	function MyCrossWord1(parameters, id){
		var self = this;
		
		EventDispatcher.call(self);
		
		alert("En constructor de mycrossword");
		
		var words = [];
		var clues = [];
		
		for (var i = 0; i < parameters.words.length; i++) {
			alert("Word precreated");
			new MyCrossword1.Word(parameters.words[i], id);
			alert("Word created");
			//words.push(parameters.words[i].word_text);
			//clues.push(parameters.words[i].clue);
		}
	}
		
	MyCrossWord1.prototype = Object.create(EventDispatcher.prototype);
	MyCrossWord1.prototype.constructor = MyCrossWord1;
	
	return MyCrossWord1;
	
})(H5P.EventDispatcher, H5P.jQuery);