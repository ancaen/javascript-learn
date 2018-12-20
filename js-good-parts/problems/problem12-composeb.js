//Write a function that takes two binary
//functions and returns a function that calls
//them both

//composeb(add, mul)(2, 3, 5) //25

function add(x, y) {
	return (x + y);
}

function mul(x, y) {
	return (x * y);
}

function composeb(func1, func2) {
	return function(x, y, z) {
		return(func2(func1(x, y), z))
	}
}

console.log(composeb(add,mul)(2,3,5));
