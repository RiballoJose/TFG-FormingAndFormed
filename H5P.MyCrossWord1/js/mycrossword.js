var H5P = H5P || {};

H5P.MyCrossWord1 = (function (EventDispatcher, $) {
	
	function MyCrossWord1(parameters, id){
		var self = this;
		
		EventDispatcher.call(self);
			
		var words = [];
		for (var i = 0; i < parameters.words.length; i++) {
			var j = 0;//aplicar divide y venceras
			while(words.length > j && parameters.words[i].word_text.length < words[j].getLength) {
				++j;
			}
			words.splice(j, 0, new MyCrossWord1.Word(parameters.words[i], id));
		}
		
		var cross = new MyCrossWord1.CrossWord(words, id); 
		
	}
		
	MyCrossWord1.prototype = Object.create(EventDispatcher.prototype);
	MyCrossWord1.prototype.constructor = MyCrossWord1;
	
	return MyCrossWord1;
	
})(H5P.EventDispatcher, H5P.jQuery);