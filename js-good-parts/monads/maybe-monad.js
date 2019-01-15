//A monad is a loophole in the function contract
//by passing a function as an argument to a pure function

//Usually described in function form, but can
// be easily methodized

function MONAD() {
  var prototype = Object.create(null);
	return function unit(value) {
		var monad = Object.create(prototype);
		monad.bind = function(func, args) {
			return func(value, ...args);
		}
    //at the last step of the unit constr if it sees
    // that there is a modifier func available it will
    // call it passing the monad and the value it was
    //create with
    if (typeof modifier === 'function') {
      modifier(monad, value);
    }
		return monad;
	};
  return unit;
}

//using this material

var maybe = MONAD(function (monad, value) {
  if (value === null || value === undefined) {
    monad.is_null = true;
    monad.bind = function () {
      return monad;
    }
  }
});

var monad = maybe(null);
monad.bind(console.log, []);
