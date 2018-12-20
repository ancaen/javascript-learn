//Write demothodize, a function that converts
// a method to a binary function

//demothodize(Number.prototype.add)(5, 6)

function add(x,y) {
	return (x + y);
}

function add(x,y) {
	return (x + y);
}

function methodize(func) {
	return function(x) {
		return func(this, x);
	}
}

Number.prototype.add = methodize(add);

function demothodize(func) {
	return function(that, y) {
		return func.call(that, y);
	}
}

console.log(demothodize(Number.prototype.add)(5, 6));
