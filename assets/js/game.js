// Game variables

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score");
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('cat');

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

        },

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
            question: "Who voiced the character Draco in the 1996 movie 'DragonHeart'?",
            choice1: "Sean Connery",
            choice2: "Dennis Quaid",
            choice3: "Pete Postlethwaite",
            choice4: "Brian Thompson",
            answer: 1,
        },

        {
            question: "What was Dorothy's surname in 'The Wizard Of Oz'?",     
            choice1: "Perkins", 
            choice2: "Gale",
            choice3: "Day",
            choice4: "Parker",
            answer: 2,
        },
        
        {
            question: "Which 1958 movie starred Kirk Douglas and Tony Curtis as half-brothers Einar and Eric?",
            choice1: "The Long Ships",
            choice2: "Prince Valiant",
            choice3: "The Vikings ",
            choice4: "Spartacus",
            answer: 3,
        },

        {

            question: "In which 1973 film does Yul Brynner play a robotic cowboy who malfunctions and goes on a killing spree?",
            choice1: "Runaway",
            choice2: "Android",
            choice3: "The Terminators",
            choice4: "Westworld",
            answer: 4,
        },

        {
            question: "In the 1971 film 'Willy Wonka & the Chocolate Factory', who played Willy Wonka?",
            choice1: "Gene Wilder",
            choice2: "Shia LeBouf",
            choice3: "Peter Ostrum",
            choice4: "Johnny Depp",
            answer: 1,
        }

        ];

        break;
    case "geography":
        questions = [{
            question: "Where is the area commonly known as the Bermuda Triangle?",
            choice1: "North Atlantic Ocean, between Florida and Puerto Rico",
            choice2: "North Pacific Ocean, between Japan and the USA", 
            choice3: "In the Caribbean Sea",
            choice4: "South Pacific Ocean, far off Chile",
            answer: 1,
        }

        ];
            break;        
    default:
        break;
}

// Constants
// Allows maximum 5 questions per round per user
// Gives 10 points per each correct question
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

const getNewQuestion = () => {
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
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];

    });

    availableQuestions.splice(questionIndex, 1);
    acceptAnswers = true;

};

// Add animations for correct and incorrect answers 
// If the answer is incorrect, go to each choice and apply the correct class
// Removes the correct class  

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptAnswers) return;

        acceptAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;
        var correctAnswer = false;
        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }    
        if (classToApply === "incorrect") { 
           
            choices.forEach((c) => {
                if (c.dataset.number == currentQuestion.answer) {
                    correctAnswer = c;
                    correctAnswer.parentElement.classList.add("correct");
                }

            });
        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            if (correctAnswer)
                correctAnswer.parentElement.classList.remove("correct");
            getNewQuestion();

        }, 1700);
    });

});

const incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();
