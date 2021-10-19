
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

const scoreX = {
    score: mostRecentScore,
    name: username.value
};

highScores.push(scoreX);
// Lets only 5 scores to be stored in local storage 
highScores.sort((a, b) => b.score - a.score);
 //cut off everything at index 5
highScores.splice(5); 


localStorage.setItem('highScores', JSON.stringify(highScores));
window.location.assign('/');






