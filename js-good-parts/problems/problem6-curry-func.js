//Write a function that takes a function as an argument
//and add an argument, and returns a function that
//can supply  a second argument

//add3 = curry(add, 3);
//add3(4) //7

//curry(mul, 5)(6) //30

function add(x, y) {
	return (x + y);
}

function mul(x, y) {
	return (x * y);
}

function curry(func, first) {
	return function(second) {
		return func(first, second);
	}
}

function applyf(binary) {
	return function(x) {
		return function(y) {
			return binary(x, y);
		}
	}
}

function curry2(func, first) {
	return applyf(func)(first);
}

add3 = curry(add, 3);
console.log("add3(4)" + add3(4));
console.log("curry(mul, 5)(6)" + curry(mul, 5)(6));
console.log("curry2(mul, 5)(6)" + curry2(mul, 5)(6));
