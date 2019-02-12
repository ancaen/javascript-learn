//////
//Lecture: Arrow functions

// ES6
const years = [1982, 1937, 2010, 1956];

// ES5

var ages5 = years.map(function(el) {
  return 2016 - el;
});
console.log(ages5);

// driversLicence6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: is ${2016 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - el;
  return `Age element ${index + 1}: is ${2016 - el}`;
});
console.log(ages6);
