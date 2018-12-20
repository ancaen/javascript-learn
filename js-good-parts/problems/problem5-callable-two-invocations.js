//Write a function that takes a binary function,
//and makes it callable with two invocations

//addf = applyf(add);
//addf(3)(4) //7
//applyf(mul)(5)(6) //30

function add(x, y) {
	return (x + y);
}

function mul(x, y) {
	return (x * y);
}

function applyf(binary) {
	return function(x) {
		return function(y) {
			return binary(x, y);
		}
	}
}

addf = applyf(add);
console.log("addf(3)(4)" + addf(3)(4));
console.log("applyf(mul)(5)(6)" + applyf(mul)(5)(6));
