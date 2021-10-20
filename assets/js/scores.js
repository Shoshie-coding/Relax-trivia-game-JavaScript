document.addEventListener("DOMContentLoaded", function() {

const items = JSON.parse(localStorage.getItem('highScores'));
const scoresTable =  document.getElementById('scoresTable');
items.forEach(element => {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = element.name;
    tr.appendChild(td);
    let td2 = document.createElement("td");
    td2.innerHTML = element.score;
    tr.appendChild(td2);    
    scoresTable.append(tr);  
  });

});
  

