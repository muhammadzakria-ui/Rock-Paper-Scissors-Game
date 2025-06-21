let userScore = 0;
let compScore = 0;
let drawScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let drawScorePara = document.querySelector("#draw-score");


const genCompChoice = () =>{
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame=()=>{
    drawScore++;
   drawScorePara.innerHTML = drawScore;
   msg.innerHTML = "Game was Draw";
   msg.style.backgroundColor = "orange";
};

const showWinner = (userWin,userChoice,compChoice) =>{
  if(userWin){
    userScore++;
    msg.innerHTML = ` You win! your ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor = "green";
    userScorePara.innerHTML=userScore;
  }else{
    compScore++;
    msg.innerHTML = `You lose.${compChoice} beats Your ${userChoice}`;
    compScorePara.innerHTML=compScore;
     msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
     console.log("user choice = ", userChoice);
    //  generate comp choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice === compChoice){
        // Draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper" ){
            // rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }else if(userChoice === "scissors"){
            // rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};

  
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        //  console.log(userChoice);
         playGame(userChoice);
    });

});
