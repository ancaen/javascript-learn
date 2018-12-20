//Write a function composeu
//that takes two unary functions
//and returns a unary function
//that calls them both

//composeu(double, square)(3) //36

function add(x, y) {
	return (x + y);
}

function mul(x, y) {
	return (x * y);
}

function twice(func) {
	return function(x) {
		return func(x, x);
	}
}

function composeu(func1, func2) {
	return function(x) {
		return func2(func1(x));
	}
}

var double = twice(add);
console.log(double(11));

var square = twice(mul);
console.log(square(11));

console.log(composeu(double, square)(3));
