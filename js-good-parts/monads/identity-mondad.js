//A monad is a loophole in the function contract
//by passing a function as an argument to a pure function

//Usually described in function form, but can
// be easily methodized

function MONAD() {
	return function unit(value) {
		var monad = Object.create(null);
		monad.bind = function(func) {
			return func(value);
		}
		return monad;
	};
}

var unit = MONAD();
var monad = unit("Hello world");
monad.bind(console.log);
