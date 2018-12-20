//Write methodize, a function that converts
//a binary function to a methodize

//Number.prototype.add = methodize(add)

//(3).add(4)

function add(x,y) {
	return (x + y);
}

function methodize(func) {
	return function(x) {
		return func(this, x);
	}
}

Number.prototype.add = methodize(add);

console.log((3).add(4));
