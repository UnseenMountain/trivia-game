// var questionsCorrect = 0;


// var questions = {


//     question1 :  "Where is Waldo currently?",
//     answerA : "The Arctic",
//     answerB : "Saturn",
//     answerC : "The Death Star",
//     answerD : "Doing his own thing, stop asking",

//     correctAnswer = answerD,

//     question2 : "Who is the strongest?"


// }


var checkAnswer = function() {

    var radios = document.getElementsByName('answer1');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "" ) {
      alert('please an answer');
    } else if ( val == "Doing his own thing. stop asking" ) {
      alert('Your answer is correct!');
    } else {
      alert('Answer is wrong');
    }
  };
