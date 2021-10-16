// Game variables

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score")

let currentQuestion = {};
let acceptAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Which of these countries remained neutral during World War II?",
        choice1: "United Kingdom",
        choice2: "France",
        choice3: "Italy",
        choice4: "Switzerland",
        answer: 4,
    },
     
    {
        question: "In the War of the Pacific (1879 - 1883), Bolivia lost its access to the Pacific Ocean after being defeated by which South American country?",
        choice1: "Chile",
        choice2: "Peru",
        choice3: "Brazil",
        choice4: "Argentina",
        answer: 4,

    },

    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];
       
// Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // Go to end page
        return window.location.assign('/end.html');

    }

    // Automatically update the questionCounter to show how many questions are left 
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;



    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];

    });

    availableQuestions.splice(questionIndex, 1);
    acceptAnswers = true;

};

// Add animations for correct and incorrect answers 

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptAnswers) return;

        acceptAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();

            }, 2000);
        });

    });


    startGame();











