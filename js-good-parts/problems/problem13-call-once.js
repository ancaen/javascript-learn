//Write a function that allows another function
//to be called once

function add(x,y) {
	return (x + y);
}

//function once(func) {
//	count = 0;
//	return function(a, b) {
//		count++;
//		if (count > 1) {
//			throw "Only ONCE";
//		}
//		return func(a, b);
//	}
//}

function once(func) {
	return function() {
		var f = func;
		func = null;
		return f.apply(
			this,
			arguments
		);
	};
}

add_once = once(add);
console.log("called once " + add_once(3, 4));
add_once(3, 4);
