// TODO: Generate a random quiz every time the user runs the application
// TODO: To make it more difficult, i'm not gonna use prompt!
let answers = [];
let object = {};

for (var i = 0; i < 2; i++) {
    object = {
        question: "test question",
        answer: "test answer"
    }
    answers.push(object)
}

function generateRanndomQuiz() {

}

function generateRandomQuestions() {
    const questionList = [
        {
            question: "Name the largest freshwater lake in the world:",
            answer: "lake superior"
        },
        {
            question: "Where would you find the sea of Tranquility?",
            answer: "the moon"
        },
        {
            question: "What is another word for lexicon?",
            answer: "dictionary"
        },
        {
            question: "Name the seventh (7th) planet from the sun:",
            answer: "uranus"
        },
        {
            question: "What is the worlds biggest island?",
            answer: "greenland"
        },
        {
            question: "What is the capital of Spain?",
            answer: "madrid"
        },
        {
            question: "What is the capital of Norway?",
            answer: "Oslo"
        },
        {
            question: "What is the capital of Sweden?",
            answer: "stockholm"
        },
        {
            question: "What year was William Shakespeare born?",
            answer: "1564"
        }
    ];

    let outputList = [];
}

function getQuestionSpans() {
    const span = document.querySelectorAll(".question");
    return span;
}

function getAnswerInputs() {
    const Input = document.querySelectorAll(".answer");
    return Input;
}
