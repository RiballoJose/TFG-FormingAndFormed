(function (MyCrossWord1, EventDispatcher, $) {
	
	MyCrossWord1.Match = function (w1, w2, c1, c2, id) {
		var self = this;
		
		EventDispatcher.call(self);
		
		self.w1 = w1;
		self.w2 = w2;
		self.c1 = c1;
		self.c2 = c2;
		
		self.getW1(){return self.w1;}
		self.getW2(){return self.w2;}
		self.getC1(){return self.c1;}
		self.getC2(){return self.c2;}
		
	}
	
	MyCrossWord1.Match.prototype = Object.create(EventDispatcher.prototype);
	MyCrossWord1.Match.prototype.constructor = MyCrossWord1.Match;
	
})(H5P.MyCrossWord1, H5P.EventDispatcher, H5P.jQuery);