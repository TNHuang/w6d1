(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}

	var Asteroid = Asteroids.Asteroid = function (props, game) {
		if (!props.radius) {props.radius = Asteroid.RADIUS;}
		if (!props.color) {props.color = Asteroid.COLOR;}
    props.vel = Asteroids.Util.randomVec(2);
		Asteroids.MovingObject.call(this, props, game);
	};

  Asteroid.COLOR = "#483D8B";
  Asteroid.RADIUS = 10;

  Asteroids.Util.inherits(Asteroids.MovingObject, Asteroid);


})();