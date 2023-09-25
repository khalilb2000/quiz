let currentQuestion = 0
let score = 0

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultsContainer = document.getElementById("results-container");

function Loadquestions(){
const question = questions[currentQuestion]
questionText.textContent = question.questions;
optionsContainer.innerHTML = '';

questions.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.textContent = option;
    optionElement.addEventListener("click",() => checkAnswer(index));
    optionsContainer.appendChild(optionElement);
});

}

function checkAnswer(selectedIndex){
    const question = question[currentQuestion];
    if(question.options[selectedIndex]=== question.answer){
        score++;
    }
}

currentQuestion++;

if(currentQuestion < questions.length){
    loadQuestion();
} else {
    showResult();
}

function showResult(){
    questionText.textContent = "Quiz finished!";
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
    resultsContainer.textContent = `Your score: ${score} out of ${question.lengths}`;
}

nextButton.addEventListener("click",() => {
    if (currentQuestion < questions.length){
        loadQuestion();
    }
})