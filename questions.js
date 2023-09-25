// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "API stands for __?",
    answer: "App programming Interface",
    options: [
      "Artificial programming interface",
      "App programming issues.",
      "Artical of programming interfaces",
      "App programming Interface"
    ]
  },
    {
    numb: 4,
    question: "A .querySelector is a method used for searching and returning the very first element.",
    answer: "True",
    options: [
      "True",
      "False"
    ]
  },
    {
    numb: 5,
    question: "Where is the correct place to insert a JavaScript?",
    answer: "Both",
    options: [
      "The < body > tag",
      "The < head > tag",
      "Both",
      "None of the Above"
    ]
  },
 
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultsContainer = document.getElementById("results-container");

function loadQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.question;
  optionsContainer.innerHTML = '';

  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => checkAnswer(index));
    optionsContainer.appendChild(optionElement);
  });
}

function checkAnswer(selectedIndex) {
  const question = questions[currentQuestion];
  if (question.options[selectedIndex] === question.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionText.textContent = "Quiz finished!";
  optionsContainer.innerHTML = '';
  nextButton.style.display = 'none';
  resultsContainer.textContent = `Your score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener("click", () => {
  if (currentQuestion < questions.length) {
    loadQuestion();
  }
});

// Start the quiz by loading the first question
loadQuestion();