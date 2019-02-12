//Primitives vs objects

// a var declared as an object does not have a real copy of the object, it just point to that objects

var a = 59;
var b = a;

a = 46;

console.log(a);
console.log(b);

var obj1 = {
  name: 'john',
  age:  37
}

//Objects
//hold a ref that points to the exact sanme ref in the memory
var obj2 = obj1;

//obj2.age will be 46
obj1.age = 46;

console.log(obj1.age);
console.log(obj2.age);

//Functions

var age = 34;
var obj = {
  name: 'Me',
  city: 'Toronto'
};

function change(a, b) {
  a = 50;

}
