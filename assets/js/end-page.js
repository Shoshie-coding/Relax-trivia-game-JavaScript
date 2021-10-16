// End game page 
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('save-score-btn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('score')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

//Lets user save their score on the end game page

username.addEventListener("keyup", () => {
    console.log("hello")
    
    saveScoreBtn.disabled = !username.value;


});

saveScore = (e) => {
    e.preventDefault();
};

const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
};

highScores.push(score);

// Lets only 5 scores
highScores.sort( (a,b) => b.score - a.score)

highScores.splice(5);  //cut off everything at index 5

