const generateBtn = document.querySelector(".header .btn");
const checkAnswersBtn = document.querySelector(".quiz .btn");

generateBtn.addEventListener("click", generateRandomQuiz);
checkAnswersBtn.addEventListener("click", checkIfAnswersAreCorrect);

// Let's the generated list be avalible to all functions that needs it
let randomQuizList = [];

//Generates the quiz
function generateRandomQuiz() {
    generateRandomQuestions();
    let questions = randomQuizList;
    let questionOuput = getQuestionSpans();
    console.log(randomQuizList);
    for (var i = 0; i < 5; i++) {
        questionOuput[i].textContent = randomQuizList[i].question;
    }
}

// Generates a list from random chosen questions from the question list
function generateRandomQuestions() {
    let questionList = getQuestionList();
    for (var i = 0; i < 5; i++) {
        randomQuizList.push(questionList[i]);
    }
}

//Holds the long array of avalible questions
function getQuestionList() {
    const questionList = [
        {question: "Name the largest freshwater lake in the world:",answer: "lake superior"},
        {question: "Where would you find the sea of Tranquility?",answer: "the moon"},
        {question: "What is another word for lexicon?",answer: "dictionary"},
        {question: "Name the seventh (7th) planet from the sun:",answer: "uranus"},
        {question: "What is the worlds biggest island?",answer: "greenland"},
        {question: "What is the capital of Spain?",answer: "madrid"},
        {question: "What is the capital of Norway?",answer: "Oslo"},
        {question: "What is the capital of Sweden?",answer: "stockholm"},
        {question: "What year was William Shakespeare born?",answer: "1564"}
    ];
    return questionList;
}

// When the users decides to, checks if the answers is the right one.
function checkIfAnswersAreCorrect() {
    let answers = getAnswerInputs();
    for (var i = 0; i < randomQuizList.length; i++) {
        let answer = answers[i].value;
        if (answer.toLowerCase() === randomQuizList[i].answer) {
            console.log("Correct answer at position: " + i)
        } else {
            console.log("Wrong answer at position: " + i)
        }
    }
}

// Gets the HTML tags that will later shows the random chosen question
function getQuestionSpans() {
    const span = document.querySelectorAll(".question");
    return span;
}

// Get the answer inputs to check if the user has answered the question correctly
function getAnswerInputs() {
    const Input = document.querySelectorAll(".answer");
    return Input;
}
