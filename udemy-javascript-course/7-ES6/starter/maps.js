//////////////////////
// Maps
// is a new key value data structure in ES6

const question = new Map();
question.set('question', 'What is the official name of the latest major Javascript version?');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again');

// console.log(question);

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
  console.log('Answer 4 is here');
  //question.delete(4);
}

//question.clear();

//iterate over elements
question.forEach( (value, key) => {
   console.log(`This is forEach ${key}, and it's value is ${value}`);
   return;
});

// for of

// we can use destructuring on question entries
for (let [key, value] of question.entries()) {
  // console.log(`This is forOf ${key}, and it's value is ${value}`);
  if (typeof(key) === 'number') {
    console.log(` Answer ${key} : ${value}`);
  }
};

const answ = parseInt(prompt('Write the correct answer'));

console.log(question.get(answ === question.get('correct')));
