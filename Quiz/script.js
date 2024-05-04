let currentQuestionIndex = 0;
let correctAnswers = 0;
let questions = [];

function fetchQuestions() {
  fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(response => response.json())
    .then(data => {
      questions = data.results;
      displayQuestion();
    })
    .catch(error => {
      console.error("Error fetching questions:", error);
      alert("Error fetching questions. Please try again.");
    });
}

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const currentQuestion = questions[currentQuestionIndex];
  
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.incorrect_answers.forEach(answer => {
    const option = document.createElement("input");
    option.type = "radio";
    option.name = "answer";
    option.value = answer;
    optionsElement.appendChild(option);
    optionsElement.appendChild(document.createTextNode(answer));
    optionsElement.appendChild(document.createElement("br"));
  });

  const correctOption = document.createElement("input");
  correctOption.type = "radio";
  correctOption.name = "answer";
  correctOption.value = currentQuestion.correct_answer;
  optionsElement.appendChild(correctOption);
  optionsElement.appendChild(document.createTextNode(currentQuestion.correct_answer));
  optionsElement.appendChild(document.createElement("br"));
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correct_answer) {
    correctAnswers++;
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = `Incorrect! The correct answer was ${currentQuestion.correct_answer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const quizForm = document.getElementById("quiz-form");
  quizForm.style.display = "none";
  document.getElementById("result").textContent = `You scored ${correctAnswers} out of ${questions.length}`;
}

document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();
  checkAnswer();
});

fetchQuestions();