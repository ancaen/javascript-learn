//we want to move from
//monad.bind(func) to
//monad.method()

//monad.bind(func, [ a, b, c ]) to
//monad.method(a, b, c)

function alert(args) {
	console.log('calling from allert: ' + args);
}

function MONAD() {
	//create a protoype obj wich will be associated
	//with the unit function
	//so all the objects that unit fct makes will
	//be inheriting from prototype

	var prototype = Object.create(null);

	return function unit(value) {
		var monad = Object.create(prototype);
		//modify bind to take optional array of parameters
		monad.bind = function(func, args) {
			return func(value, ...args);
		}
		return monad;
	}

	//add methods to the prototype by putting a method
	// on the unit so now the unit function itself
	//is a monad because i can call monad and returns
	// the unit at the end so i can say .method.method
	// and add as much material as i want to
	// !! HOW DO YOU USE THIS ??

	/*unit.method = function (name, func) {
		prototype[name] = func;
		return unit;
	}*/

	//list like method, but it will wrap the calling
	// of bind for me, so i can pass in ordinary fct and
	//it will return a fct wich calls bind takes the
	// result of bind and calls unit on IT == Axiom

	unit.lift = function (name, func) {
		prototype[name] = function (...args) {
			return unit(this.bind(func, args));
		}
		return unit;
	}

	return unit;
}

//var ajax = MONAD();
//var monad = ajax("Hello world  prototype with args");
//ajax.bind(alert);

//using lift
var ajax2 = MONAD()
			.lift('alert', alert); //!! doesn't work, not seeing lift as function why ?

var monad = ajax2("Hello Ajax with lift");
monad.alert();

//monad.method(alert);
///monad.bind(alert, []);
//monad.alert();
/*
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
	}*/

	//unit.lift = function (name, func) {
	//	prototype[name] = function (...args) {
	//		return unit(this.bind(func, args));
	//	}
	//	return unit;
	//}
	//return unit;
//}

//var ajax = MONAD();
//var monad = ajax("Hello World");
//ajax.bind(alert);
//console.log(monad.alert());
//var monad = ajax("Hello world");
//monad.bind(alert);
//monad.alert();
