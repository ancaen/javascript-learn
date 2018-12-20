//Write a factory function that
//retunrs two functions that implement
//an up/down counter

//counter = counterf(10);
//counter.inc() //11
//counter.dec() //12

function counterf(value) {
	return {
		inc: function() {
			value += 1;
			return value;
		},
		dec: function() {
			value -= 1;
			return value;
		}
	}
}

counter = counterf(10);
console.log(counter.inc()); //11
console.log(counter.dec()); //12
