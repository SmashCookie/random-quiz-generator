/*
    * Random-Quiz-Generator
    *
    * An application that generates a random quiz of 5 questions!
    *
    * Author @Christian Halvorsen
*/

const questionSpans = document.querySelectorAll(".question");
const inputs = document.querySelectorAll(".answer");
const correctAnswerSpan = document.querySelectorAll(".correctAnswer");

const quiz = {
    // Initializes the program, adds event listeners to the buttons.
    init: () => {
        const GenerateNewQuizBtn = document.querySelector(".header .btn");
        const checkAnswersBtn = document.querySelector(".quiz .btn");
        GenerateNewQuizBtn.addEventListener("click", quiz.generateQuiz);
        checkAnswersBtn.addEventListener("click", quiz.checkIfAnswersAreCorrect);
    },
    // Generates the quiz
    generateQuiz: () => {
        quiz.resetQuiz();
        quiz.generateRandomQuestions();
        quiz.displayQuiz();
        quiz.show();
    },

    // Resets the input fields and colors
    resetQuiz: () => {
        for (let i = 0; i < inputs.length; i++){
            correctAnswerSpan[i].textContent = "";
            inputs[i].value = "";
            inputs[i].style.backgroundColor = "white";
        }
    },

    // Generates 5 random questions out of the many found in the questionList
    generateRandomQuestions: () => {
        // Resets the currentList
        quiz.currentList = [];
        let number;
        // Generates 5 questions
        for (let i = 0; i < 5; i++) {
            number = Math.floor(Math.random()*quiz.questionList.length);
            // Quickly checks for duplicate. However, this might create another duplicate.
            for(let j = 0; j < quiz.currentList.length; j++){
                if (quiz.currentList[j].question === quiz.questionList[number].question ){
                    number = Math.floor(Math.random() * quiz.questionList.length);
                }
            }
            // Pushes the current question object to the currentList array
            quiz.currentList.push(quiz.questionList[number]);
        }
    },

    // Adds the questions text to the page
    displayQuiz: () => {
        for (let i = 0; i < 5; i++) {
            questionSpans[i].textContent = quiz.currentList[i].question;
        }
    },

    // Removes the hidden class from the quiz div element, and shows the questions and input fields to the user.
    show: () => {
        const div = document.querySelector(".quiz");
        div.classList.remove("hidden");
    },

    // Empty array where the selected question objects will be pushed to.
    currentList: [],

    // List of avalible questions and answers
    questionList: [
        { question: "What color is cobalt?", answer: "blue" },
        { question: "When did the cold war end?", answer: "1989" },
        { question: "What is the capital of Norway?", answer: "oslo" },
        { question: "What is the capital of Spain?", answer: "madrid" },
        { question: "What is Japanese sake made from?", answer: "rice" },
        { question: "When did the first world war end?", answer: "1918" },
        { question: "When did the second world war end?", answer: "1945" },
        { question: "What is the capital of Sweden?", answer: "stockholm" },
        { question: "When did the first world war begin?", answer: "1914" },
        { question: "From which cactus is tequila made?", answer: "agave" },
        { question: "Which nuts are used in marzipan?", answer: "almonds" },
        { question: "Which planet is nearest the sun?", answer: "mercury" },
        { question: "When did the second world war begin?", answer: "1939" },
        { question: "What is the largest city in Canada?", answer: "toronto" },
        { question: "What is the national animal of China?", answer: "panda" },
        { question: "What is a very cold part of Russia?", answer: "siberia" },
        { question: "What is another word for lexicon?", answer: "dictionary" },
        { question: "What is the worlds biggest island?", answer: "greenland" },
        { question: "What year was William Shakespeare born?", answer: "1564" },
        { question: "In which city was the Titanic built?", answer: "belfast" },
        { question: "What is the most famous Mexican beer?", answer: "corona" },
        { question: "How many oscars did the Titanic movie got?", answer: "11" },
        { question: "What is the Hungarian word for pepper?", answer: "paprika" },
        { question: "What is the capital city of Australia?", answer: "canberra" },
        { question: "What is the most famous beer in Ireland?", answer: "guiness" },
        { question: "What is the chemical formula for Table Salt?", answer: "naci" },
        { question: "What is the noisiest city in the world?", answer: "hong kong" },
        { question: "Name the seventh (7th) planet from the sun:", answer: "uranus" },
        { question: "What is the most spoken language in Belgium?", answer: "dutch" },
        { question: "What was the former name of New York?", answer: "new amsterdam" },
        { question: "Which country was formerly called Ceylon?", answer: "sri lanka" },
        { question: "Which French king was called the Sun King?", answer: "louis xiv" },
        { question: "On which continent can you visit Sierra Leone?", answer: "africa" },
        { question: "Where would you find the sea of Tranquility?", answer: "the moon" },
        { question: "What was the name of Napoleon s first wife?", answer: "josephine" },
        { question: "What is bottled a lot in the French town Vichy?", answer: "water" },
        { question: "What is the largest state of the United States?", answer: "alaska" },
        { question: "What is the real meaning of the Greek word Pita?", answer: "bread" },
        { question: "Which country did once have the name Rhodesia?", answer: "zimbabwe" },
        { question: "Which city became capital of West-Germany in 1949?", answer: "bonn" },
        { question: "Through which capital does the Liffey river flow?", answer: "dublin" },
        { question: "Which country is the origin of the cocktail Mojito?", answer: "cuba" },
        { question: "What was the Latin name of Paris in Roman times?", answer: "lutetia" },
        { question: "Who was the first president of the USA?", answer: "george washington" },
        { question: "Which cheese is traditionally used for pizzas?", answer: "mozzarella" },
        { question: "What do the Japanese people call their own country?", answer: "nippon" },
        { question: "Name the largest freshwater lake in the world:", answer: "lake superior" },
        { question: "Who was the second president of the United States?", answer: "john adams" },
        { question: "When did Margaret Thatcher become Prime Minister of Britain?", answer: "1979" },
        { question: "Which city was the capital of Australia from 1901 to 1927?", answer: "melbourne" },
        { question: "Who is the only British Prime Minister to be murdered?", answer: "spencer percival" },
        { question: "What island, which belonged to Denmark, was independent in 1944?", answer: "island" },
        { question: "When became Albania an independent country? In 1713, 1813 or 1913?", answer: "1913" },
        { question: "What is the name of the little dragon in the animated movie Mulan?", answer: "mushu" },
        { question: "Which country had a Prime Minister and President who were twin brothers?", answer: "poland" },
        { question: "Which country sent its navy around the world to fight the Japanese in 1904?", answer: "russia" },
        { question: "Which war was ended by the signing the armistice on July 27 th, 1953?", answer: "the korean war" },
        { question: "In which state was George W Bush governor before becoming President of the United States?", answer: "texas" }
    ],

    // Checks the input fields and compares them to the correct answer
    checkIfAnswersAreCorrect: () => {
        for(let i = 0; i < quiz.currentList.length; i++){
            const answer = inputs[i].value;
            if (answer.toLowerCase() === quiz.currentList[i].answer) {
                inputs[i].style.backgroundColor = "lawngreen";
            } else {
                inputs[i].style.backgroundColor = "red";
                correctAnswerSpan[i].textContent = `The correct answer was:  ${quiz.currentList[i].answer}`;
            }
        }
    }
}
// runs the application initialization
quiz.init();
