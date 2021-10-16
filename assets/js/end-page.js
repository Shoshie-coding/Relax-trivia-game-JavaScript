// End game page 
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('score')) || [];
finalScore.innerText = mostRecentScore;

//Lets user save their score on the end game page

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;

});

saveScore = (e) => {
    e.preventDefault();
};

const score = {
    score: mostRecentScore,
    name: username.value,
};
highScores.push(score);
