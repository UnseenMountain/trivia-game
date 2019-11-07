// var questionsCorrect = 0;


// var questions = {


//     question1 :  "Where is Waldo currently?",
//     answerA : "The Arctic",
//     answerB : "Saturn",
//     answerC : "The Death Star",
//     answerD : "Doing his own thing, stop asking",

//     correctAnswer = answerD,

//     question2 : "Who is the strongest?",
//   answerA : "Goku",
//   answerB : "Saitama",
//   answerC : "Jedi Reavan",
//   answerD : "A Vault hunter",
//   answerE : "All of them",

//   correctAnswer : ""
// }

const startButton = document.getElementById("start");
const questionContainer = document.getElementById("question-container");

startButton.addEventListener("click", startGame);

function startGame(){
  console.log("statted")
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide")

}




// var checkAnswer1 = function() {

//     var radios = document.getElementsByName('answer1');
//     var val= "";
//     for (var i = 0, length = radios.length; i < length; i++) {
//         if (radios[i].checked) {
//            val = radios[i].value; 
//            break;
//          }
//     }
    
//     if (val == "" ) {
//       if(val == "Doing his own thing. stop asking");
//     } else if ( val == "Doing his own thing. stop asking" ) {
//       alert('Your answer is correct!');
//     } else {
//       alert('Answer is wrong');
//     }
//   }

//     var checkAnswer2 = function() {
//     var radios = document.getElementsByName('answer2');
//     var val= "";
//     for (var i = 0, length = radios.length; i < length; i++) {
//         if (radios[i].checked) {
//            val = radios[i].value; 
//            break;
//          }
//     }
    
//     if (val == "" ) {
//       if(val == "All of them");
//     } else if ( val == "All of them" ) {
//       alert('Your answer is correct!');
//     } else {
//       alert('Answer is wrong');
//     }
//   };

//   var checkAnswer3 = function(){
//     var radios = document.getElementsByName('answer3');
//     var val= "";
//     for (var i = 0, length = radios.length; i < length; i++) {
//         if (radios[i].checked) {
//            val = radios[i].value; 
//            break;
//          }
//     }
    
//     if (val == "" ) {
//       if(val == "Snoop Dog");
//     } else if ( val == "Snoop Dog" ) {
//       alert('Your answer is correct!');
//     } else {
//       alert('Your answer is wrong');
//     }
//   };
//   var checkAnswer4 = function(){
//     var radios = document.getElementsByName('answer3');
//     var val= "";
//     for (var i = 0, length = radios.length; i < length; i++) {
//         if (radios[i].checked) {
//            val = radios[i].value; 
//            break;
//          }
//     }
    
//     if (val == "" ) {
//       if(val == "All of the above");
//     } else if ( val == "Snoop Dog" ) {
//       alert('Your answer is correct!');
//     } else {
//       alert('Your answer is wrong');
//     }
//   };
