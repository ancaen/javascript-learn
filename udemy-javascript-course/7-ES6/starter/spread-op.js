///////////
// spread operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 22, 49);

console.log(sum1);

//  ES5

var ages = [18, 30, 22, 49];
var sum2 = addFourAges.apply(null, ages);

console.log(sum2);


//ES6

var sum3 = addFourAges(...ages);
console.log(sum3);

//join arrays
var familySmith = ['John', 'Mark', 'Steve'];
var familyMiller = ['Jane', 'Bob', 'Mary'];

var bigFamility = [...familySmith, 'Liky', ...familyMiller];

console.log(bigFamility);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
