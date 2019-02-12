// Function constructor - most popular

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};


//convention always write
//fct contructor with a capital letter
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

  //every instance of the object will have a copy of this method
  //use inheritance and move this into prototype
 //  this.calculateAge = function() {
  //  console.log(2019 - this.yearOfBirth);
  //};

};

//all methods and properties that we want
// to be inherited
// none of the intances will have the calculateAge methods attach to them but
//they will be able to use it because it's in
//their prototype property of our fct contructor
Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
};

//inheritance
Person.prototype.lastName = 'Smith';

//instance of Person
//new operator = a brand new empty object is created
//then the function is called that creates a
// new execution context object that has this keyword
// new operator takes care of the this
 //keyword of the function points to the
 // new empty objec that was created in the beging not to the gloabal object (this in fct declarations points to the global obj)

var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1945, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

/*****
* Object.create
*///

//Object.create builds an object that
//inherits directly from the one that we
//passed into the first argument

//allows us to implement complex inheritance structures in an easier way
//than the fct contructor, directly specify
//which obejct will be the prototype

var personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};

var johnProto = Object.create(personProto);

johnProto.name = 'John';
johnProto.yearOfBirth = 1990;
johnProto.job = 'teacher';

var janeProto = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'teacher'}
});
