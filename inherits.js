Function.prototype.inherits = function(baseClass) {
	function Surrogate(){};
	Surrogate.prototype = baseClass.prototype;
	this.prototype = new Surrogate();
};