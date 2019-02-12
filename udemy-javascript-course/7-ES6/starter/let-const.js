//ES5

var name5 = "james smith";
var age5 = 23;

//mutate name var
name5 = "james miller";

console.log(name5);

//ES6
// variable not going to change the value overtime
const name6 = "james smith";

//can mutate
let age6 = 24;

//name6 = "james miller";
//console.log(name6);


// block and function scope
// ES5

function driversLicence(passedTest) {
  if (passedTest) {
    console.log(firstName);
    var firstName = "John";
    var yearOfBirth = 1990;


  }

  console.log(firstName + ' borned in ' + yearOfBirth + ' is now allowed to drive');
}

function driversLicence6(passedTest) {

  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    //variable are blocked scoped
    firstName = "John";
  }

    console.log(firstName + ' borned in ' + yearOfBirth + ' is now allowed to drive');
}

driversLicence(true);
driversLicence6(true);



//////////


let i = 23;

//block scope diff variable
for(let i = 0; i < 10; i+= 1) {
  console.log(i);
}

console.log(i);
