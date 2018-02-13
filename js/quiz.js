const startButton = document.querySelector(".header button");
const checkAnswersBtn = document.querySelector(".quiz .btn");
const questionSpans = document.querySelectorAll(".question");
const correctAnswerSpan = document.querySelectorAll(".correctAnswer");
const inputs = document.querySelectorAll(".answer");
console.log(inputs);

const quiz = {
    //Generates the quiz
    generateQuiz: () => {
        quiz.resetQ();
        quiz.generateRandomQuestions();
        quiz.displayQuiz();
        quiz.show();
    },

    //Resets the input fields and colors
    resetQ: () => {
        for (let i = 0; i < inputs.length; i++){
            correctAnswerSpan[i].textContent = "";
            inputs[i].value = "";
            inputs[i].style.backgroundColor = "white";

        }
    },

    // Generates 5 random questions out of the many found in the questionList
    generateRandomQuestions: () => {
        //Resets the previous currentList
        quiz.currentList = [];
        let number;
        //Generates 5 questions
        for (let i = 0; i < 5; i++) {
            number = Math.floor(Math.random()*quiz.questionList.length);
            //Quickly checks for duplicate. However, this might create another duplicate.
            for(let j = 0; j < quiz.currentList.length; j++){
                if (quiz.currentList[j].question === quiz.questionList[number].question ){
                    number = Math.floor(Math.random() * quiz.questionList.length);
                }
            }
            //Pushes the current question object to the currentList array
            quiz.currentList.push(quiz.questionList[number]);
        }
    },

    //Adds the questions text to the page
    displayQuiz: () => {
        for (let i = 0; i < 5; i++) {
            questionSpans[i].textContent = quiz.currentList[i].question;
        }
    },

    //Removes the hidden class from the quiz div element, and shows the questions and input fields to the user.
    show: () => {
        const div = document.querySelector(".quiz");
        div.classList.remove("hidden");
    },

    currentList: [],

    questionList: [{question: "Name the largest freshwater lake in the world:",answer: "lake superior"},
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
    ],

    checkIfAnswersAreCorrect: () => {
        for(let i = 0; i < quiz.currentList.length; i++){
            const answer = inputs[i].value;
            if (answer.toLowerCase() === quiz.currentList[i].answer) {
                inputs[i].style.backgroundColor = "lawngreen";
            } else {
                inputs[i].style.backgroundColor = "red";
                correctAnswerSpan[i].textContent = "The correct answer was: " + quiz.currentList[i].answer;
            }
        }
    }
}
startButton.addEventListener("click", quiz.generateQuiz);
checkAnswersBtn.addEventListener("click", quiz.checkIfAnswersAreCorrect);