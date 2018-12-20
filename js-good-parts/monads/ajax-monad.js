//we want to move from
//monad.bind(func) to
//monad.method()

//monad.bind(func, [ a, b, c ]) to
//monad.method(a, b, c)

function alert(value) {
	console.log(value);
}

function MONAD() {
	var prototype = Object.create(null);
	return function unit(value) {
		var monad = Object.create(prototype);
		monad.bind = function(func, args) {
			return func(value, ...args);
		}
		return monad;
	};

	unit.method = function(name, func) {
		prototype[name] = func;
		return unit;
	}

	//unit.lift = function (name, func) {
	//	prototype[name] = function (...args) {
	//		return unit(this.bind(func, args));
	//	}
	//	return unit;
	//}
	return unit;
}

var ajax = MONAD();
var monad = ajax("Hello World");
ajax.bind(alert);
console.log(monad.alert());
//var monad = ajax("Hello world");
//monad.bind(alert);
//monad.alert();
