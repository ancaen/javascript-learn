////////
// Lecture: Arrow functions 2

//Arrow function do not have a this keyword
// they share the surrounding this

// ES5

var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      //this points to the global obj - window obj
      // color and position are undefined
      // fixed by passing self
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
}

//box5.clickMe();

const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    //always use arrow functions when you need to preserve the value of the this keyword
    document.querySelector('.green').addEventListener('click', () => {
      const str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

//box6.clickMe();
// !!!! CAREFULL !!!
const box66 = {
  color: 'green',
  position: 1,
  // shares this keyword from surroundings
  // in this case the global this - window
  clickMe: () => {
    //always use arrow functions when you need to preserve the value of the this keyword
    document.querySelector('.green').addEventListener('click', () => {
      const str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

// box66.clickMe();

function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
  //var self = this;
  var arr = friends.map(function(el) {
    return this.name + ' is friend with ' + el;
  }.bind(this)); // we have access to this and we can manually pass it

  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);

// ES6

Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => {
    return `${this.name} is friend with ${el}`;
  }); // we have access to this and we can manually pass it

  console.log(arr);
}

new Person('John').myFriends6(friends);
