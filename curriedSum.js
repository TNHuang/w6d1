function curriedSum(numArgs) {
  var numbers = [];

	function _curriedSum (num) {
		numbers.push(num)
		if (numbers.length === numArgs) {
			var total = 0;
			for (var i=0; i<numbers.length; i++) {
				total += numbers[i];
			}
			return total;
		} else {
			return _curriedSum;
		}
	}

  return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
	var fn = this;
	var args = [];

	function _curry(arg) {
		args.push(arg);
		if (args.length === numArgs) {
			return fn.apply( null, args);
		}else{
			return _curry;
		}
	}

	return _curry;
}