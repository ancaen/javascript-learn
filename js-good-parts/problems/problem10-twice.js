//Write a function that takes a binary
//function and returns a unary function
//that passes its argument to the binary
//function twice

//var double = twice(add);
//double(11) //22
//var square = twice(mul);
//square(11) //121

function add(x, y) {
	return (x + y);
}

function mul(x, y) {
	return (x * y);
}

function subst(x, y) {
	return (x - y);
}

function twice(func) {
	return function(x) {
		return func(x, x);
	}
}

var double = twice(add);
console.log(double(11));

var square = twice(mul);
console.log(square(11));

var minus = twice(subst);
console.log(minus(11));
