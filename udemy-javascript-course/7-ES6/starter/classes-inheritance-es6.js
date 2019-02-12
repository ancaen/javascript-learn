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

/////////////////////
// Inheritance and subclasses

var Athlete5 = function(name, yearOfBirth, job, olimppicGames, medals) {
  // why do we call this with this keyword
  // new object that this points to
  Person5.call(this, name, yearOfBirth, job);
  this.olimppicGames = olimppicGames;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonAMedal = function() {
  this.medals += 1;
  console.log(this.medals);
  
};



var johnAthelete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
console.log(johnAthelete5);

johnAthelete5.calculateAge();
johnAthelete5.wonAMedal();

console.log(johnAthelete5);

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



/////////////////////
// Inheritance and subclasses

// ES6

// extends the super class
class Athlete6 extends Person6 {

  constructor(name, yearOfBirth, job, olimppicGames, medals) {
    super(name, yearOfBirth, job);
    this.olimppicGames = olimppicGames;
    this.medals = medals; 
  }

  wonAMedal() {
    this.medals += 1;
    console.log(this.medals);
  }
}

const johnAthelete6 = new Athlete6('John6', 1990, 'swimmer', 3, 10);
//console.log(johnAthelete6);
johnAthelete6.calculateAge();
johnAthelete6.wonAMedal();
console.log(johnAthelete6);