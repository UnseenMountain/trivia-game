
const startButton = document.getElementById("start");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("statted");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();

}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}




function clearStatusClass (element) {
  
    element.classList.remove("correct")
    element.classList.remove("wrong")
  

}

const questions = [
  {
    question: "Where is Waldo currently?",
    answers: [
      { text: "The Arctic", correct: false },
      { text: "Saturn", correct: false },
      { text: "The Death Star", correct: false },
      { text: "Doing his own thing, stop asking", correct: true }
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

