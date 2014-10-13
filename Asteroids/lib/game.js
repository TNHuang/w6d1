(function () {
	if( typeof Asteroids === "undefined"){
		window.Asteroids = {};
	}


	Asteroids.game = function (){
		this.asteroids = [];
		this.addAsteroids();
	};

	Asteroids.game.DIM_Y = 600;
	Asteroids.game.DIM_X = 600;
	Asteroids.game.NUM_ASTEROIDS = 10;

	Asteroids.game.randomPosition = function(){
		x = Math.random() * Asteroids.game.DIM_X;
		y = Math.random() * Asteroids.game.DIM_Y;
		return [x,y];
	};

	Asteroids.game.prototype.addAsteroids = function(){
		for (var i = 0; i < Asteroids.game.NUM_ASTEROIDS; i++) {
			randomPos = Asteroids.game.randomPosition();
			this.asteroids.push( new Asteroids.Asteroid({pos: randomPos}, this) );
		}
	};

	Asteroids.game.prototype.draw = function(ctx){
		ctx.clearRect(0,0, Asteroids.game.DIM_X, Asteroids.game.DIM_Y);
		this.asteroids.forEach(function (ast) {
			ast.draw(ctx)
		});
	};

	Asteroids.game.prototype.moveObjects = function () {
		this.asteroids.forEach(function (ast){
			ast.move();
		});
	};

	Asteroids.game.prototype.wrap = function (pos) {
    var x = pos[0];
		var y = pos[1];

		x = x % Asteroids.game.DIM_X;
		y = y % Asteroids.game.DIM_Y;

    return [x,y];
	};

})();