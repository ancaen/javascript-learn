//////
// CLosures

function retirement(retirementAge) {
  var a = ' years left until retirement';
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

//Use closeures to rewrite the interview question Function

function interviewQuestion(job) {
  var designerQ = ' can you please explain what designIs?';
  var teacherQ = ' What subject do you teach at school ?'
  var defaultQ = ' What subject do you teach at school ?';
  return function(name) {
    //using the job arg in the innner function makes this a closure
     if (job === 'designer') {
       console.log(name + designerQ);
     } else if (job === 'teacher') {
       console.log(name + teacherQ);
     } else {
       console.log(name + defaultQ);
     }
  }
}

interviewQuestion('designer')('John');
interviewQuestion('teacher')('Mike');
interviewQuestion('driver')('Jane');
