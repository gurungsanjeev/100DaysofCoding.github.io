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

  {
    question: "Who is the father of computer?",
    choices: ["Charles Babbages", "Elon Musk", "Bill Gates", "Tony Stark"],
    correct: 0 // Elon Musk is the correct answer
},
  // Add more questions as needed
];

let currentQuestion = 0; // Tracks which question the user is on
let score = 0; // Tracks the user's score

const questionEl = document.getElementById('quiz-qns'); // Element to display the question
const buttons = document.querySelectorAll('#quiz-opt'); // All option buttons
const nextBtn = document.getElementById('next-btn'); // Next question button

// Function to load the current question and answer choices
function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.innerText= currentQuiz.question;

  buttons.forEach((button, index) => {
      button.innerHTML = currentQuiz.choices[index];
      button.onclick = () => selectAnswer(index); // Set click handler for each button
      button.classList.remove('selected'); // Reset button styles
      button.disabled = false; // Re-enable buttons
  });
 

  nextBtn.style.display = 'none'; // Hide the "Next" button initially
}


// Function to handle answer selection
function selectAnswer(index) {
  const currentQuiz = quizData[currentQuestion];
  if (index === currentQuiz.correct) {
      score++;
  }
  
  buttons.forEach(button => button.disabled = true); // Disable buttons after selection
  buttons[index].classList.add('selected'); // Highlight the selected button
  
  nextBtn.style.display = 'block'; // Show the "Next" button after selection
}

// Function to move to the next question
function nextQns() {
  currentQuestion++;
  
  if (currentQuestion < quizData.length) {
      loadQuestion(); // Load the next question
  } else {
      showResult(); // Show the final result if no more questions
  }
}

// Function to display the final score
function showResult() {
  questionEl.innerHTML = `You scored ${score} out of ${quizData.length}`;
  document.getElementById('option').style.display = 'none'; // Hide the options
  nextBtn.style.display = 'none'; // Hide the next button
}

// Start the quiz by loading the first question
loadQuestion();
