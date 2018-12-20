//Make a revocable function that takes a nice functions
//and return a revoke function that denies access to the
//nice function, and an invoke function that can invoke
//the nice function until it is revoked

//temp = revocable(alert);
//temp.invoke(7); //alert: 7
//temp.revoke();
//temp.invoke(8); //throw;

function alert(something) {
	return console.log(something);
}

function revocable(func) {
	return {
		status: true,
		invoke: function() {
			if (this.status === true) {
				return func.apply(this, arguments);
			} else {
				throw 'ERROR';
			}
		},
		revoke: function() {
			this.status = false;
		}
	}
}

function revocable2(nice) {
	return {
		invoke: function() {
			return nice.apply(
				this,
				arguments
			);
		},
		revoke: function() {
			nice = null;
		}
	};
}


temp = revocable(alert);
temp.invoke(7); //alert: 7
temp.revoke();
temp.invoke(8); //throw;
