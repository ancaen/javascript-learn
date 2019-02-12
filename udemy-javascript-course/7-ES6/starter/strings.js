///////
//Lecture: Strings

let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;


function calculateAge(yearOfBirth) {
  const now = new Date();
  return now.getFullYear() - yearOfBirth;
}


// ES5

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calculateAge(yearOfBirth) + ' years old.');

// ES6 - template literal
console.log(`This is ${firstName} ${lastName }. He was born in ${yearOfBirth}. Today he is ${calculateAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('Sm'));
console.log(n.includes('o'));
console.log(`${firstName} `.repeat(5));
