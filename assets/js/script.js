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
    question: "Which Apollo mission was the last one in NASA's Apollo program?",
    choice1: "Apollo 17",
    choice2: "Apollo 13",
    choice3: "Apollo 11",
    choice4: "Apollo 15",
    answer: 1,
},

{
    question: "Who was the first president of the United States?",
    choice1: "James Madison",
    choice2: "George Washington",
    choice3: "Thomas Jefferson",
    choice4: "James K. Polk",
    answer: 2,

},

{
    question: "During the Roman Triumvirate of 42 BCE, what region of the Roman Republic was given to Lepidus?",
    choice1: "Italia",
    choice2: "Gallia",
    choice3: "Hispania",
    choice4: "Asia",
    answer: 3,

},

{
    question: "What was the name commonly given to the ancient trade routes that connected the East and West of Eurasia?",
    choice1: "Spice Road",
    choice2: "Clay Road",
    choice3: "Salt Road",
    choice4: "Silk Road",
    answer: 4,

},
];

switch (myParam) {
    case "literature":
        questions = [{
            question: "Who wrote 'A tale of Two Cities'",
            choice1: "Charles Dickens",
            choice2: "Charles Darwin",
            choice3: "Mark Twain",
            choice4: "Roald Dahl",
            answer: 1,
        },
    
        {
            question: "In the Lord of the Rings, who is the father of the dwarf Gimli?",
            choice1: "Bombur",
            choice2: "Gloin",
            choice3: "Thorin Oakenshield",
            choice4: "Dwalin",
            answer: 2,
    
        },
    
        {
            question: "What position does Harry Potter play in Quidditch?",
            choice1: "Beater",
            choice2: "Chaser",
            choice3: "Seeker",
            choice4: "Keeper",
            answer: 3,
        },

        {
            question: "By what nickname is Jack Dawkins known in the Charles Dickens novel, 'Oliver Twist'?",
            choice1: "Fagin",
            choice2: "Mr. Fang",
            choice3: "Jack Sparrow",
            choice4: "The Artful Dodger",
            answer: 4,

        }

        {
            question: "Who wrote the children's story 'The Little Match Girl'?",
            choice1: "Hans Christian Andersen",
            choice2: "Charles Dickens",
            choice3: "Lewis Carroll",
            choice4: "Oscar Wilde",
            answer: 1,
        }




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






