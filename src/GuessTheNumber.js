var Guess = function(){
	this.theNumber;
};

Guess.prototype.start = function(limit){
	this.theNumber = Math.floor((Math.random()*limit));
};
