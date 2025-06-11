let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx]; 
};

const drawGame =() => {
    
     msg.innerText = "Game Draw , Play Again!";
     msg.style.backgroundColor = "#081b31";
};

const showWinnner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("Congratulations ! You Won");
        msg.innerText = "You Win !";
        msg.style.backgroundColor = "green";
         
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
      
        msg.innerText = "You Loose";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =" , userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp choice will be paper | scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // comp choice will be rock | scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            // comp choice will be rock | paper
            compChoice === "rock" ? false : true;
        }
        showWinnner(userWin);
    }
};

choices.forEach((choices) =>{
    choices.addEventListener("click" ,()=>{
        const userChoice = choices.getAttribute("id");
       playGame(userChoice);
    });
});

