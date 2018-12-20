//Whitout writing any new functions show 3 ways to
//create the inc function - increment

//inc(5)
//inc(inc(5))

function add(x,y) {
	return (x + y);
}

function addf(x) {
	return function(y) {
		return (x + y);
	}
}

function applyf(binary) {
	return function(x) {
		return function(y) {
			return binary(x, y);
		}
	}
}

function curry(func, first) {
	return function(second) {
		return func(first, second);
	}
}

x = 5;
inc1 = addf(1);
inc2 = applyf(add)(1);
inc3 = curry(add, 1);

console.log(inc1(x));
console.log(inc2(x));
console.log(inc3(x));
