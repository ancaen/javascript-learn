//Write a function that takes an argument and returns
// a function that returns that argument

//idf = identityf(3)
//idf() //3

function identityf(x) {
	return function() {
		// i can see x, no need to
		return x;
	}
}

var idf = identityf(3);
console.log(idf());
