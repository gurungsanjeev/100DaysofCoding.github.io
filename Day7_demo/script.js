// Quiz data: questions, answer choices, and the correct answer index
const quizData = [
  {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2 // Paris is the correct answer
  },
  {
      question: "Who is the CEO of Tesla?",
      choices: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
      correct: 1 // Elon Musk is the correct answer
  },
  // Add more questions as needed
];

let currentQuestion = 0; // Tracks which question the user is on
let score = 0; // Tracks the user's score

const questionEl = document.getElementById('question'); // Element to display the question
const choicesEl = document.getElementById('choices'); // Element to display answer choices
const submitBtn = document.getElementById('submit'); // Button to move to the next question
const resultEl = document.getElementById('result'); // Element to display the final score

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  choicesEl.innerHTML = '';

  currentQuiz.choices.forEach((choice, index) => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.onclick = () => selectAnswer(index);
      choicesEl.appendChild(button);
  });

  // Show the submit button if there are more questions
  submitBtn.style.display = currentQuestion < quizData.length ? 'block' : 'none';
}

function selectAnswer(index) {
  const currentQuiz = quizData[currentQuestion];
  if (index === currentQuiz.correct) {
      score++;
  }
  currentQuestion++;

  if (currentQuestion < quizData.length) {
      loadQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  questionEl.style.display = 'none';
  choicesEl.style.display = 'none';
  submitBtn.style.display = 'none';
  resultEl.style.display = 'block';
  resultEl.textContent = `You scored ${score} out of ${quizData.length}`;
}

// Start the quiz by loading the first question
loadQuestion();
