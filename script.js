const userScore= 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
//dom varibles^v
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
//above process know as "cache-ing the DOM"

rock_div.addEventListener('click', function() {
    console.log("hey you clicked on rock");

})

paper_div.addEventListener('click', function() {
    console.log("hey you clicked on paper");

})

scissor_div.addEventListener('click', function() {
    console.log("hey you clicked on scissor");

})






