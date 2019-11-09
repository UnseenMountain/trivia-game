
const startButton = document.getElementById("start");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);

function startGame(){
  console.log("statted");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();

}

function setNextQuestion() {
  showQuestion(shuffledQuestions [currentQuestionIndex]);
}

function showQuestion(question){
  questionElement.innerText = question.question

}

function selectAnswer() {


}

const questions = [ 
  {
    question :  "Where is Waldo currently?",
    answers: [ 
      { text: "The Arctic", correct: false},
      { text: "Saturn", correct: false},
      { text: "The Death Star", correct: false},
      { text: "Doing his own thing, stop asking", correct: true}
    ]
  }
]
//   {
//     question :  "Who is the strongest?",
//     answers: [ 
//       { text: "Goku", correct: true},
//       { text: "Saitama", correct: true},
//       { text: "A vault Hunter", correct: true},
//       { text: "All of the above", correct: true}
//     ]
//   },
  
//   {
//     question :  "Who was the OS?",
//     answers: [ 
//       { text: "Johnny Depp", correct: false},
//       { text: "Brad Pitt", correct: false},
//       { text: "Washington", correct: false},
//       { text: "Snoop Dog", correct: true}
//     ]
//   },

// ]

