(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}

  Asteroids.Util = {};

	Asteroids.Util.inherits = function (baseClass, childClass) {
		function Surrogate(){};
		Surrogate.prototype = baseClass.prototype;
		childClass.prototype = new Surrogate();
	};

  Asteroids.Util.randomVec = function (length) {
    var result = [];
  		for (var i=0; i<length; i++) {
  			result.push(Math.random()*20-10);
  		}
    return result;
  }


})();