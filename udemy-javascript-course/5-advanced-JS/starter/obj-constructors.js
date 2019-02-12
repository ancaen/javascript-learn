//function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

//always write fct constructor with capital letter
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};

//instance of Person obj
//when we use new a operator first an empty object is created
//then the constructor function Person is called (creates a new exec context that has a `this` var)
//new operator points `this` not to the Global Obj but to the new empty obj that was created
//default return new object created
var john = new Person('John', 1990, 'teacher');

john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1968, 'retired');

jane.calculateAge();
mark.calculateAge();

//Object.create
// first define an obj that will act as a prototype

//build an object that inherits directly og the initial prototype obj
console.log('Where');
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

var johnProto = Object.create(personProto);
johnProto.name = 'John';
johnProto.yearOfBirth = 1990;
johnProto.job = 'teacher2';


var janeProto = Object.create(personProto, {
    name : { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});




