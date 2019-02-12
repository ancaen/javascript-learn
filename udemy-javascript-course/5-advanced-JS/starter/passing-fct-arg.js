///////////////
//Passing functions as arguments

// Functions are also objects

var years = [1990, 1982, 2015, 1969, 1971];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        //insert element at the end of the array
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//callback function
function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
     return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
     return Math.round(206.9 - (0.67 * el));
    }
    return -1;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);

