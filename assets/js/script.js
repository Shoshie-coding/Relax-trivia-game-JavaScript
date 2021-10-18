// Game variables

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score")
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('cat');

// add event to play button

// var goToCategory = document.getElementById("pick-category");
// var categoryButtonClick = function() {
//     goToCategory.
// }


// Sets the questions for each category

let currentQuestion = {};
let acceptAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [{
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

switch (myParam) {
    case "literature":
        questions = [{
            question: "What is Ron Weasley&#039;s middle name?",
            choice1: "Bilius",
            choice2: "Arthur",
            choice3: "John",
            choice4: "Dominic",
            answer: 1,
        },
    
        {
            question: "what?",
            choice1: "Chile",
            choice2: "Peru",
            choice3: "Brazil",
            choice4: "Argentina",
            answer: 4,
    
        },
    
        {
            question: " are?",
            choice1: "msgBox('Hello World');",
            choice2: "alertBox('Hello World');",
            choice3: "msg('Hello World');",
            choice4: "alert('Hello World');",
            answer: 4,
        },
    ];
        break;
    case "movies":
        questions = [{
            question: "bla bla bla",
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
        break;
        case "geography":
            questions = [{
                question: "bla bla bla",
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
            break;        
    default:
        break;
}


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
        //Save score in local storage
        localStorage.setItem("mostRecentScore", score);
        // Go to end page
        return window.location.assign('/end-page.html');

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

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }    


        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1700);
    });

});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();

// End game page 
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('save-score-btn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Maximum 5 scores can be stored
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

//Lets user save their score on the end game page
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
};

// const score = {
//     score: mostRecentScore,
//     name: username.value
// };

highScores.push(score);
// Lets only 5 scores to be stored in local storage 
highScores.sort((a, b) => b.score - a.score);
 //cut off everything at index 5
highScores.splice(5); 


localStorage.setItem('highScores', JSON.stringify(highScores));
window.location.assign('/');






