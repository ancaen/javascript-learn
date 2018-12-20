//Write a function that adds
//from two invocations

//add(3)(4) //7

function addf(x) {
	return function(y) {
		return (x + y);
	}
}

console.log("two invocations add(3)(4) = " + addf(3)(4));
