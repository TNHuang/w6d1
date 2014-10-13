var sum = function () {
	var args = Array.prototype.slice.apply(arguments);

	var total = 0;
	for (var i = 0; i < args.length; i++) {
		total +=args[i];
	}

	return total;
};
