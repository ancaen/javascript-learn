////////////
// Default parameters - preset param values


function SmithPerson(firstName, yearOfBirth, lastName, nationality)
{
  lastname = lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationality = nationality === undefined ? nationality = 'american' : nationality = nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}


var john = new SmithPerson('John', 1990); //assigns undefined to missing params
var emily = new SmithPerson('Emily', 1983, 'Dias', 'spanish');
console.log(john);
console.log(emily);


  // ES6

function SmithPerson6(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john6 = new SmithPerson6('John', 1990); //assigns undefined to missing params
var emily6 = new SmithPerson6('Emily', 1983, 'Dias', 'spanish');
console.log(john6);
console.log(emily6);
