//////////////////////
// Classes
// make it easier to implement inheritance

// !!!  Classes declarations are not hoisted
// first implement and then start using it
// !!! Classes can only contain functions not properties
// ES5

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function () {
   var age = new Date().getFullYear() - this.yearOfBirth;
   console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6

class Person6 {

  // no punctuation
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  // no fct keyword
  // no prototype
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  // static fct - are not inherited
  static greeting() {
    console.log('Hey there');
  }
}

const john6 = new Person6('John', 1990, 'teacher');

console.log(john5);
console.log(john6);

Person6.greeting();