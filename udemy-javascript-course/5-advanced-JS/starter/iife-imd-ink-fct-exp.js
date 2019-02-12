///////
// Imediately Invoked Function Expression (IIFE)

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();

//IIFE
//the fct is not used to create a piece of
//reusable code, but to creta the new scope
//that is sitting from the outside scope
//where we can safely put variables

//this creates data provacy and doesn't interfere with the global execution context
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

//console.log(score); - undefined


(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);



//declaration
//this will fail because there is no name
/*
function () {

}
*/

//placing the fct between () creates statement, fct expression
//adding the () at the end makes the fct call
//anything inside the fct is under data privacy
/*(

)*/
