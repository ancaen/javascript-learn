/////////
// rest parameters

// ES5

// undefined number of arguments

function isFullAges() {
  console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
    console.log((2016 - cur) >=19);
  });
}

isFullAges(1909, 1956, 2010);
isFullAges(1909, 1956, 2010, 2008, 1998);

// ES6

// rest params = transforms list of arg to array
function isFullAges6(...years) {
    years.forEach( cur => console.log((2016 - cur) >= 19));
}

isFullAges6(1909, 1956, 2010);
isFullAges6(1909, 1956, 2010, 2008, 1998);

// the spread operator is used in the fct call
// the rest operator is used in the fct declaration
// to accept an arbitrary number of parameters

// ES5 - arbitrary param number and fixed arguments
function isFullAgeWithAge(limit) {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments, 1);
  //console.log(argsArr);

  argsArr.forEach(function(cur) {
    console.log((2016 - cur) >= limit);
  });
}

isFullAgeWithAge(16, 1909, 1956, 2010);


// ES6

// rest params = transforms list of arg to array
function isFullAgesWithAge6(limit, ...years) {
    years.forEach( cur => console.log((2016 - cur) >= limit));
}

isFullAges6(16, 1909, 1956, 2010, 2008, 1998);
