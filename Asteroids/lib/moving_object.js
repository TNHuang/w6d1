(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}

  //not using constructor function
	// Asteroids.MovingObject = function (pos, vel, radius, color) {
	// 	this.pos = pos;
	// 	this.vel = vel;
	// 	this.radius = radius;
	// 	this.color = color;
	// }

  //using constructor function
	var MovingObject = Asteroids.MovingObject = function(props, game) {
		this.pos = props.pos;
		this.vel = props.vel;
		this.radius = props.radius;
		this.color = props.color;
		this.game = game;
	};

	MovingObject.prototype.draw = function(ctx) {
		ctx.fillStyle = this.color;
		ctx.beginPath();

		ctx.arc(
			this.pos[0],
			this.pos[1],
			this.radius,
			0,
			2 * Math.PI,
			false
		);

		ctx.fill();
	}

	MovingObject.prototype.move = function() {
		var newX = this.pos[0] + this.vel[0];
		var newY = this.pos[1] + this.vel[1];

		this.pos = this.game.wrap([newX, newY]);
	};


})();