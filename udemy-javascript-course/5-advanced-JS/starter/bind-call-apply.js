// Bind, call, apply

console.log('nothing');

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ' ladies and gentelmen! I\'m ' + this.name +  ', I\'m a ' + this.job + ', ' + this.age + ' years old');
    } else if (style === 'friendly') {
      console.log('Hey! What\s up! I\'m ' + this.name +  ', I\'m a ' + this.job + ', ' + this.age + ' years old. Have a nice ' + timeOfDay);
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal', 'morning');

//method borrowing
//seting the this variable to emily
john.presentation.call(emily, 'friendly', 'aftenoon');

//apply(this, array) will not work
//john.presentation.apply(emily, ['friendly', 'afternoon']);

//bind doesn't immediately calls the Function, but makes a copy and allows preset arguments

//carrying

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');


//////////

var years = [1990, 1965, 1937, 1998, 2005];

function arrayCalc(arr, fn) {
  var arrayRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrayRes.push(fn(arr[i]));

  }
    return arrayRes;
}

function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
