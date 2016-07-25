(function (MyCrossWord1, EventDispatcher, $) {
	
	MyCrossWord1.CrossWord = function (parameters, id) {
		
		var self = this;
		
		EventDispatcher.call(self);
		
		var crossword = [][];
		var words = parameters;
		var matches = [];
		
		var long_word = 0;
		var max_lenght = words[0].length;
		
		//Lo siguiente hay que reemplazarlo por algoritmo de búsqueda en texto (ej. Boyer-Moore¿?)
		for (var i = 0; i < words.length-1; i++) {//para cada palabra
			var w1 = words[i].getWord();
			if(words[i+1].length > max_lenght){
				max_lenght = words[i+1].length; long_word = i;
			}
			for (var j = i+1; j < words.length; j++) {//compara con las demas	
				var w2 = words[j].getWord();
				for (var k = 0; k < w1.length; k++) {//para cada letra de esa palabra
					for (var l = 0; l < w2.length; l++) {//compara con las de la otra
						if (w1.charAt(k) == w2.charAt(l)) {
							matches.push(new MyCrossWord1.Match(w1, w2, k, l));
						}
					}
				}
			}
		}
		for (var i = 0; i < 50; i++){//generamos tablero vacio
			crossword[i] = [];
			for(var j=0; j < 50; j++) {
				crossword[i][j] = undefined;
			}
		}//No se puede limitar la longitud del tablero de esta manera!*/
		
		var orientation = (Math.random() < 0.5);//bool si true palabra horizontal si no en vertical
		/*for (var i = 0; i < matches.length; i++) {
			while (matches[i].getW1() == 0) {
				
			}
		}*/
	}
	
	MyCrossWord1.CrossWord.prototype = Object.create(EventDispatcher.prototype);
	MyCrossWord1.CrossWord.prototype.constructor = MyCrossWord1.CrossWord;
	
	return MyCrossWord1.CrossWord;
})(H5P.MyCrossWord1, H5P.EventDispatcher, H5P.jQuery);