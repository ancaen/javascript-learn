// Primitives vs objects
// Primitives - numbers, strings - hold the data inside of the var itself
// Objects - var declared as an obj it points to that obj (reference)

var a = 23;
var b = a;

// mutate a, does not affect the value of b
a = 46;

console.log(a);
console.log(b);

// objects

var obj1 = {
    name: 'John',
    age: 26
}

//Objects

var obj2 =  obj1;

// mutate age (it affects obj2 - because it's the same object)
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Toronto' 
};

// passing a primitive into a fct a simple copy is created
// passing an object, a refence is passed - reflected outside of the function
function change(a, b) {
    a = 30;
    b.city = 'San Fran';
}

change(age, obj);

// prints 30, San Fran
console.log(age);
console.log(obj.city);