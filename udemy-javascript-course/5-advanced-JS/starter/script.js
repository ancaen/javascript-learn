/////
//Coding chalenge

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
(function() {

  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.printAnswers = function () {
      for(i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
      }
    }
  }

  var questions = [
    new Question(
      'What is Javascript?',
      ['makeup', 'dev language', 'highway'],
      1
    ),
    new Question(
      'How best would you describe coding?',
      ['hard', 'boring', 'fun'],
      2
    ),
    new Question(
      'What are you learning?',
      ['JavaScript', 'ES5', 'sing'],
      1
    ),
    new Question(
      'Who is teaching ? ',
      ['Jane', 'Jonas', 'Make'],
      1
    )
  ];

  function selectQuestion(questions) {
    randomIndex = Math.floor(Math.random() * questions.length);
    selectedQuestion = questions[randomIndex];
    console.log(selectedQuestion.question);
    selectedQuestion.printAnswers();
    var answerPrompt = prompt('Enter the response for the logged question');
    if (parseInt(answerPrompt, 10) === selectedQuestion.correctAnswer) {
      console.log('Correct');
    } else {
      console.log('Nope');
    }
  }

  selectQuestion(questions);
})();
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {

  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.printQuestion = function () {
    console.log(this.question);
    for(i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(ans, callbackFct) {
    var sc;
    //check answer
    if (parseInt(ans, 10) === this.correctAnswer) {
      console.log('Correct');
      sc = callbackFct(true);
    } else {
      console.log('Nope');
      sc = callbackFct(false);
    }

    this.displayScore(sc);
  }

  Question.prototype.displayScore = function(score) {
    console.log("Your score is " + score);
    console.log("=====================");
  }

  var questions = [
    new Question(
      'What is Javascript?',
      ['makeup', 'dev language', 'highway'],
      1
    ),
    new Question(
      'How best would you describe coding?',
      ['hard', 'boring', 'fun'],
      2
    ),
    new Question(
      'What are you learning?',
      ['JavaScript', 'ES5', 'sing'],
      1
    ),
    new Question(
      'Who is teaching ? ',
      ['Jane', 'Jonas', 'Make'],
      1
    )
  ];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    }
  }

  var keepScore = score(); //closure - returns a fct and keep var value

  function selectQuestion(questions) {
    randomIndex = Math.floor(Math.random() * questions.length);
    selectedQuestion = questions[randomIndex];
    selectedQuestion.printQuestion();
    var answerPrompt = prompt('Enter the response for the logged question');
    if (answerPrompt === 'exit') {
      return;
    }
    selectedQuestion.checkAnswer(answerPrompt, keepScore);


    //show next question
    return selectQuestion(questions, keepScore);
  }

  selectQuestion(questions, 0);
})();
