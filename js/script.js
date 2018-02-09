const generateBtn = document.querySelector(".header .btn");
const checkAnswersBtn = document.querySelector(".quiz .btn");
generateBtn.addEventListener("click", generateRandomQuiz);
checkAnswersBtn.addEventListener("click", checkIfAnswersAreCorrect);

// Let's the generated list be avalible to all functions that needs it
let randomQuizList = [];

//Generates the quiz
function generateRandomQuiz() {
    generateRandomQuestions();
    resetQuiz();
    displayQuiz();
    let questions = randomQuizList;
    let questionOuput = getQuestionSpans();
    for (var i = 0; i < 5; i++) {
        questionOuput[i].textContent = randomQuizList[i].question;
    }
}

// Generates a list from random chosen questions from the question list
function generateRandomQuestions() {
    //Resets the current list of questions every time the generateRandomQuestions is called
    randomQuizList = [];
    let questionList = getQuestionList();
    let currentNumbers = [];

    // Speeds up the loop
    let i;
    let j;
    for (i = 0; i < 5; i++) {
        let number = Math.floor(Math.random()*questionList.length);
        for(j = 0; j < currentNumbers.length; j++) {
            // Quick Duplicate check
            if (currentNumbers[j] === number) {
                number = Math.floor(Math.random()*questionList.length);
            }
        }
        // Double duplicate check... (Will fix this later)
        for(j = 0; j < currentNumbers.length; j++) {
            // Quick Duplicate check
            if (currentNumbers[j] === number) {
                number = Math.floor(Math.random()*questionList.length);
            }
        }
        currentNumbers.push(number);
        randomQuizList.push(questionList[number]);
    }
}

// When the users decides to, checks if the answers is the right one.
function checkIfAnswersAreCorrect() {
    const output = getCorrectAnswerSpans();
    const answers = getAnswerInputs();
    for (var i = 0; i < randomQuizList.length; i++) {
        const answer = answers[i].value;
        if (answer.toLowerCase() === randomQuizList[i].answer) {
            answers[i].style.backgroundColor = "lawngreen";
        } else {
            answers[i].style.backgroundColor = "red";
            output[i].textContent = "The correct answer was: " + randomQuizList[i].answer;
        }
    }
}

// Resets the input fields when the user generates a new quiz
function resetQuiz() {
    const inputs = getAnswerInputs();
    const correctAnswerSpans = getCorrectAnswerSpans();

    let current;
    let span;

    //Speeds up the loop
    const l = inputs.length
    let i;
    for (i = 0; i < l; i++) {
        current = inputs[i];
        span = correctAnswerSpans[i];
        current.value = "";
        current.style.backgroundColor = "white";
        span.textContent = "";
    }
}

function displayQuiz() {
    const quizDiv = document.querySelector("div .quiz");
    quizDiv.classList.remove("hidden");
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

function getCorrectAnswerSpans() {
    const span = document.querySelectorAll(".correctAnswer");
    return span;
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
        {question: "What is the capital of Norway?",answer: "oslo"},
        {question: "What is the capital of Sweden?",answer: "stockholm"},
        {question: "What year was William Shakespeare born?",answer: "1564"},
        {question: "When did the cold war end?",answer: "1989"},
        {question: "When did the first world war begin?",answer: "1914"},
        {question: "When did the first world war end?",answer: "1918"},
        {question: "When did the second world war begin?",answer: "1939"},
        {question: "When did the second world war end?",answer: "1945"},
        {question: "When did Margaret Thatcher become Prime Minister of Britain?",answer: "1979"},
        {question: "Who was the first president of the USA?",answer: "george washington"},
        {question: "In which city was the Titanic built?",answer: "belfast"},
        {question: "Which war was ended by the signing the armistice on July 27 th, 1953?",answer: "the korean war"},
        {question: "Which country sent its navy around the world to fight the Japanese in 1904?",answer: "russia"},
        {question: "What is the national animal of China?",answer: "panda"},
        {question: "What is the noisiest city in the world?",answer: "hong kong"},
        {question: "Which country did once have the name Rhodesia?",answer: "zimbabwe"},
        {question: "What island, which belonged to Denmark, was independent in 1944?",answer: "island"},
        {question: "What is the largest state of the United States?",answer: "alaska"},
        {question: "On which continent can you visit Sierra Leone?",answer: "africa"},
        {question: "What do the Japanese people call their own country?",answer: "nippon"},
        {question: "What is the largest city in Canada?",answer: "toronto"},
        {question: "What is the capital city of Australia?",answer: "canberra"}
    ];
    return questionList;
}
