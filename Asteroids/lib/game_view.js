(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}

	Asteroids.gameView = function(ctx) {
		this.game = new Asteroids.game();
		this.ctx = ctx;
	};

	Asteroids.gameView.prototype.start = function () {
		var that = this;
		setInterval(function () {
			that.game.draw(that.ctx);
			that.game.moveObjects();
		}, 20);
	}

})();