////////
// Lecture: Destructuring


var john = ['John', 29];
var name = john[0];
var age = john[1];

console.log(name);
console.log(age);

// ES6

const [name6, age6] = ['Jphn', 39];

console.log(name6);
console.log(age6);

const obj = {
  firstName: 'Ana',
  lastName: 'Doele'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);
